import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/Theme";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";
import FloatingSocial from "./constants/FloatingSocial";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <FloatingSocial />

        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
