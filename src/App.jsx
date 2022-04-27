import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./assets/sass/main.scss";
import { ThemeContext } from "./context/ThemeContext";
import RoutePage from "./RoutePage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
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

  useEffect(() => {
    if (language === "ar" || language === "ko") {
      setRtl(true);
    } else {
      setRtl(false);
    }

    if (localStorage.loginData) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [language]);

  return (
    <div className="App">
      <ThemeContext.Provider
        value={{
          languageHandler,
          language,
          rtl,
          paymentData,
          paymentHandler,
          isLogin,
        }}
      >
        <RoutePage isLogin={isLogin} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
