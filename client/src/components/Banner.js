import { useTranslation} from 'react-i18next';

const Banner = () => {

  const { t } = useTranslation("global");
  
return(
  <div className="banner">
    <div className="banner-text">
      <h1 className="responsive-headline">{t("header.who")}</h1>
      <h3>{t("header.description")}
        <span>{t("header.web")}</span>
        {t("header.have")}
        <span>FullStack</span>
        {t("header.skill")}
        <span>FrontEnd</span>
        {t("header.and")}
        <span>BackEnd</span>
        {t("header.bracket")}<br/>
      
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
