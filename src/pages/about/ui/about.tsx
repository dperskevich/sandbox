import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation('pages/about');

    return <div>
        <h2>{t("About")}</h2>
    </div>
}

export default AboutPage;