import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { submitContactForm } from "../../services/api";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const POPUP_STORAGE_KEY = "welcomePopupShown";

const COURSE_OPTIONS = [
  "MS Office",
  "DTP",
  "Photoshop",
  "Painting",
  "C++",
  "Java",
  "Python",
  "PHP",
  "HTML",
  "CSS",
  "Java Fullstack",
  "Python Fullstack",
  "Android Development",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Spring Boot",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Manual Testing",
  "Automation Testing",
  "NumPy",
  "PyTest",
  "UI/UX",
];

type FormState = {
  name: string;
  address: string;
  course: string;
  phone: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  address: "",
  course: "",
  phone: "",
  email: "",
  message: "",
};

function FirstVisitPopup() {
  const [open, setOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.sessionStorage.getItem(POPUP_STORAGE_KEY) !== "true";
  });
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<{
    name?: string;
    course?: string;
    form?: string;
    phone?: string;
    email?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const markPopupAsSeen = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
    }
  };

  const handleClose = () => {
    markPopupAsSeen();
    setOpen(false);
  };

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", form: undefined }));
  };

  const handleCourseChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;

    setFormData((prev) => ({ ...prev, course: value }));
    setErrors((prev) => ({ ...prev, course: undefined, form: undefined }));
  };
  const validateForm = () => {
    const nextErrors: {
      name?: string;
      course?: string;
      phone?: string;
      email?: string;
    } = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      nextErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!formData.course.trim()) {
      nextErrors.course = "Please select a course";
    }

    return nextErrors;
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const apiResult = await submitContactForm(formData);

      if (!apiResult.success) {
        setErrors({
          form: apiResult.message || "Failed to submit enquiry",
        });

        setSnack({
          open: true,
          message: apiResult.message || "Failed to submit enquiry",
          severity: "error",
        });

        return;
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        course: formData.course,
        message: formData.message,
      };

      await emailjs.send(
        "service_z3mxh7d",
        "template_pdf2spn",
        templateParams,
        "b0kgOz7BA7ErFVpvs",
      );

      // Reset form
      setFormData(initialFormState);

      // Clear errors
      setErrors({});

      // Close popup
      setOpen(false);

      // Success Snackbar
      setSnack({
        open: true,
        message:
          "Enquiry submitted successfully! We will contact you within 24 hours.",
        severity: "success",
      });

      // Mark popup as seen
      markPopupAsSeen();
    } catch (error) {
      console.error("Submit error:", error);

      setErrors({
        form: "Failed to submit enquiry. Please try again.",
      });

      setSnack({
        open: true,
        message: "Failed to submit enquiry. Please try again.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        aria-labelledby="first-visit-popup-title"
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: "hidden",
            background: "#0b1630",
            color: "#fff",
            boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
          },
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate>
          {/* Header */}
          <DialogTitle
            sx={{
              background: "linear-gradient(135deg, #0d1b3d 0%, #102a56 100%)",
            }}
          >
            {/* Close Icon */}
            <IconButton
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: "absolute",
                right: 12,
                top: 12,
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.08)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.18)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f8b72b",
                width: "100%",
              }}
            >
              yahtechinfo
            </Typography>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                width: "100%",
              }}
            >
              Start Your Journey
            </Typography>
          </DialogTitle>

          {/* Form */}
          <DialogContent
            sx={{
              pt: "24px !important",
              px: 3,
              pb: 3,
              background: "#0b1630",
            }}
          >
            <Stack spacing={2}>
              {/* Name */}
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleFieldChange}
                fullWidth
                required
                error={Boolean(errors.name)}
                helperText={errors.name}
                placeholder="Enter your full name"
                autoComplete="name"
              />

              {/* Phone Number */}
              <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);

                  setFormData((prev) => ({
                    ...prev,
                    phone: value,
                  }));

                  // User typing செய்தவுடன் phone error remove
                  setErrors((prev) => ({
                    ...prev,
                    phone: undefined,
                  }));
                }}
                fullWidth
                required
                error={Boolean(errors.phone)}
                helperText={errors.phone}
                placeholder="Enter your phone number"
                autoComplete="tel"
                slotProps={{
                  htmlInput: {
                    maxLength: 10,
                    inputMode: "numeric",
                  },
                }}
              />
              {/* Email */}
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFieldChange}
                fullWidth
                required
                error={Boolean(errors.email)}
                helperText={errors.email}
                placeholder="Enter your email address"
                autoComplete="email"
              />
              {/* Address */}
              <TextField
                label="Address (optional)"
                name="address"
                value={formData.address}
                onChange={handleFieldChange}
                fullWidth
                placeholder="Enter your address"
                autoComplete="street-address"
              />

              {/* Course */}
              <FormControl fullWidth error={Boolean(errors.course)}>
                <InputLabel id="course-select-label">
                  Select Course (optional)
                </InputLabel>

                <Select
                  labelId="course-select-label"
                  value={formData.course}
                  label="Select Course (optional)"
                  onChange={handleCourseChange}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 220,
                        overflowY: "auto",
                      },
                    },
                  }}
                >
                  <MenuItem value="">Select a course</MenuItem>

                  {COURSE_OPTIONS.map((course) => (
                    <MenuItem key={course} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Message */}
              <TextField
                label="Message (optional)"
                name="message"
                value={formData.message}
                onChange={handleFieldChange}
                fullWidth
                multiline
                minRows={4}
                placeholder="Tell us what you would like to know..."
              />

              {/* Form Error */}
              {errors.form && <Alert severity="error">{errors.form}</Alert>}
            </Stack>
          </DialogContent>

          {/* Footer */}
          <DialogActions
            sx={{
              px: 3,
              pt: 0,
              pb: 2,
              background: "#0b1630",
              gap: 1,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{
                borderRadius: 2,
                px: 3,
                fontWeight: 600,
                background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                "&:hover": {
                  background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
                },
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </DialogActions>

          <Typography
            variant="caption"
            align="center"
            display="block"
            sx={{
              pb: 2.5,
              px: 2,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Your information is safe with us. We’ll contact you shortly.
          </Typography>
        </Box>
      </Dialog>
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() =>
          setSnack((prev) => ({
            ...prev,
            open: false,
          }))
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          severity={snack.severity}
          variant="filled"
          onClose={() =>
            setSnack((prev) => ({
              ...prev,
              open: false,
            }))
          }
          sx={{
            width: "100%",
          }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default FirstVisitPopup;
