import  {useTranslation}  from  'react-i18next' ;

import React from 'react'

const AboutPage = () => {
    const { t } = useTranslation(["common", "about"]);
  return (
    <div className='aboutPage'> {t("about:An_about_page")}  <div>{t("about:mother")}</div>  </div>
   
  )
}

export default AboutPage