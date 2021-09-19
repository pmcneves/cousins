import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import languages from "../../languages/translations";
import { getLanguageSlice } from "./selectors";
import SelectLanguage from "../../components/SelectLanguage";
import ThemeBtn from "../../components/Buttons/ThemeBtn";

const Login: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("login");
  const [inputType, setInputType] = useState<string>("password");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
  const language = useSelector(getLanguageSlice);

  function tabsHandler(currentTab: string): void {
    if (selectedTab !== currentTab)
      setSelectedTab((prevState) =>
        prevState === "login" ? "newAccount" : "login"
      );
  }

  useEffect(() => {
    if (isCheckboxChecked) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }, [isCheckboxChecked]);

  return (
    <div className="login-container">
      <div className="login-container__sub">
        <div className="login-container__sub__tabs">
          <div
            className={`login-container__sub__tabs-left ${
              selectedTab === "login" ? "selected-tab" : ""
            }`}
          >
            <button className="left-btn" onClick={() => tabsHandler("login")}>
              {languages[language].loginTab}
            </button>
          </div>
          <div
            className={`login-container__sub__tabs-right ${
              selectedTab === "newAccount" ? "selected-tab" : ""
            }`}
          >
            <button
              className="right-btn"
              onClick={() => tabsHandler("newAccount")}
            >
              {languages[language].createAccountTab}
            </button>
          </div>
        </div>
        <div className="login-container__sub__forms">
          <div className="login-container__sub__forms__brand">
            Cousin
            <span className="login-container__sub__forms__brand__dollar">
              $
            </span>
          </div>
          {selectedTab === "login" ? (
            <div className="login-form">
              <form>
                <div className="login-form__username">
                  <label>{languages[language].emailLabel}</label>
                  <input type="text" />
                </div>
                <div className="login-form__password">
                  <label>{languages[language].passwordLabel}</label>
                  <input type={inputType} />
                </div>
                <div className="login-form__options">
                  <div className="login-form__options__password-box">
                    <input
                      type="checkbox"
                      checked={isCheckboxChecked}
                      onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                    />

                    <div>{languages[language].showPassword}</div>
                  </div>
                  <div className="login-form__options__submitBtn">
                    <button>{languages[language].logInBtn}</button>
                  </div>
                </div>
                <div className="login-form__forgot-password">
                  {languages[language].forgotPassword}
                </div>
              </form>
            </div>
          ) : (
            <div>create account</div>
          )}
          <div className="login-container__sub__forms__bottom-options">
            <SelectLanguage />
            <ThemeBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
