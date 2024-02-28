import React, {useContext} from "react";
import "./LinkedinRecommandations.scss";
import {linkedinRecommandations} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function LinkedinRecommandations() {
  
  const {isDark} = useContext(StyleContext);
  if (!linkedinRecommandations.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="recommandations">
      <h1 className="skills-heading">{linkedinRecommandations.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode linkedin-subtitle"
                : "subTitle linkedin-subtitle"
            }
          >
            {linkedinRecommandations.subTitle}
          </p>
      <iframe title= "linkedinRecommandation" src='https://widgets.sociablekit.com/linkedin-recommendations/iframe/25372516' frameborder='0' width='100%' height='550'>
      </iframe>
      </div>
    </Fade>
  );
}
