import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const MyPage = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <Main />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPage;
