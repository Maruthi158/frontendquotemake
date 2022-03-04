import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyQuotes from "./screens/LandingPage/MyQuotes/MyQuotes";
import LoginScreen from "./screens/LandingPage/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/login" element={<LoginScreen />} exact />
      <Route path="/register" element={<RegisterScreen />} exact />

      <Route path="/myquotes" element={<MyQuotes />} exact />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
