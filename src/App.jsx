import { useEffect, useState } from "react";
import "./App.css";
import "./assets/sass/main.scss";
import { ThemeContext } from "./context/ThemeContext";
import RoutePage from "./RoutePage";

function App() {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  const [rtl, setRtl] = useState(false);
  const languageHandler = (e) => {
    localStorage.setItem("language", e.target.value);
    setLanguage(e.target.value);
  };
  const [paymentData, setPaymentData] = useState({});
  const paymentHandler = (data) => {
    setPaymentData(data);
  };

  console.log(paymentData);

  useEffect(() => {
    if (language === "ar" || language === "ko") {
      setRtl(true);
    } else {
      setRtl(false);
    }
  }, [language]);

  return (
    <div className="App">
      <ThemeContext.Provider
        value={{ languageHandler, language, rtl, paymentData, paymentHandler }}
      >
        <RoutePage />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
