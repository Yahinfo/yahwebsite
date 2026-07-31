import { Box, Typography, Grid, Container } from "@mui/material";
import { useGSAPCounter } from "../../hooks/useGSAP";
import { STATS } from "../../constants/home";

function StatCounter({
  value,
  suffix,
  label,
  prefix,
}: {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}) {
  const ref = useGSAPCounter(value, 2, suffix);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        ref={ref}
        variant="h2"
        sx={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700,
          background: "linear-gradient(135deg, #00E5FF, #8B5CF6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {prefix}
        {0}
        {suffix}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function Counter() {
  return (
    <Box
      sx={{
        py: 8,
        background:
          "linear-gradient(180deg, transparent, rgba(0,229,255,0.03), transparent)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* <Container maxWidth="lg">
        <Grid container spacing={4}>
          {STATS.map((stat) => (
            <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
              <StatCounter {...stat} />
            </Grid>
          ))}
        </Grid>
      </Container> */}
    </Box>
  );
}
