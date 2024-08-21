import React, { useContext, useEffect, useState } from "react";
import "./LinkedinRecommandations.scss";
import { linkedinRecommandations } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import recommendationsData from "../../assets/csv/recommendations.csv";
import { readString } from "react-papaparse"; // Destructure parse function

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function LinkedinRecommandations() {
  const { isDark } = useContext(StyleContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const papaConfig = {
      header: true,
      complete: (results) => {
        setRecommendations(results.data);
      },
      download: true,
      error: (error) => {
        console.log('Error while parsing:', error);
      },
    };
    readString(recommendationsData, papaConfig);
  }, []);

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

        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          renderDotsOutside={true}
          renderButtonGroupOutside={false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          itemClass="recommendation-item"
        >
          {recommendations.map((recommendation, index) => (

            <div className="recommendation-item2" key={index}>
              <p
                className={
                  isDark
                    ? "dark-mode recommendation-name"
                    : "recommendation-name"
                }
              >
                {recommendation["First Name"]} {recommendation["Last Name"]}
              </p>
              <p
                className={
                  isDark
                    ? "recommendation-company"
                    : "recommendation-company"
                }
              >
                {recommendation["Job Title"]} at {recommendation.Company}
              </p>
              <p
                className={
                  isDark
                    ? "dark-mode recommendation-text"
                    : "recommendation-text"
                }
              >
                {recommendation["Text"]}
              </p>
            </div>

          ))}
        </Carousel>
      </div>
    </Fade>
  );
}
