import SocialLinks from "./SocialLinks";
import { useTranslation} from 'react-i18next';

const Banner = () => {

  const { t } = useTranslation("global");
  
return(
  <div className="banner">
    <div className="banner-text">
      <h1 className="responsive-headline">{t("header.who")}</h1>
      <h3>{t("header.description")}
        <span>{t("header.web")}</span>
        {t("header.both")}
        <span>BackEnd</span>
        {t("header.and")}
        <span>FrontEnd</span> {t("header.say")}
        <span>FullStack</span>
        {t("header.dev")}. <br/>
        <a className="smoothscroll" href="#about">
          {" "}
          {t("header.scroll")}
        </a>{" "}
        {t("header.learn")}
        <a className="smoothscroll" href="#about">
          {" "}
          {t("header.about")}
        </a>
      </h3>
      <hr />
      {/* <SocialLinks /> */}
    </div>
  </div>
);
}
export default Banner;
