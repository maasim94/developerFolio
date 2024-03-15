import React, {useContext} from "react";
import "./LinkedinRecommandations.scss";
import {linkedinRecommandations} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// import recommendationsData from "../../assets/csv/recommendations.csv";
// import {readString} from "react-papaparse"; // Destructure parse function


export default function LinkedinRecommandations() {
  
  const {isDark} = useContext(StyleContext);
  // const papaConfig = {
  //   header: true,
  //   complete: (results, file) => {
  //     console.log('Parsing complete:', results, file);
  //   },
  //   download: true,
  //   error: (error, file) => {
  //     console.log('Error while parsing:', error, file);
  //   },
  // };
  // readString(recommendationsData, papaConfig);
  
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
      <iframe title= "linkedinRecommandation" src='https://widgets.sociablekit.com/linkedin-recommendations/iframe/25372516' frameBorder='0' width='100%' height='550'>
      </iframe>
      </div>
    </Fade>
  );
}
