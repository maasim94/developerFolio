import React, { useContext, useEffect, useState } from "react";
import "./LinkedinRecommandations.scss";
import { linkedinRecommandations } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import recommendationsData from "../../assets/csv/recommendations.csv";
import { readString } from "react-papaparse";

export default function LinkedinRecommandations() {
  const { isDark } = useContext(StyleContext);
  const [recommendations, setRecommendations] = useState([]);
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);

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

  // Helper function to shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Always show random 3 recommendations on main page
  const displayRecommendations = recommendations.length > 3
    ? shuffleArray(recommendations).slice(0, 3)
    : recommendations;

  // Generate avatar URL based on name
  const getAvatarUrl = (firstName, lastName) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName + ' ' + lastName)}&background=0078d4&color=ffffff&size=60&bold=true`;
  };

  const getAvatarUrlLarge = (firstName, lastName) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName + ' ' + lastName)}&background=0078d4&color=ffffff&size=80&bold=true`;
  };

  const handleViewAllRecommendations = () => {
    setShowAllRecommendations(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseAllRecommendations = () => {
    setShowAllRecommendations(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const renderRecommendationCard = (recommendation, index) => (
    <div className="recommendation-card" key={index}>
      <div className="recommendation-header">
        <img
          src={getAvatarUrl(recommendation["First Name"], recommendation["Last Name"])}
          alt={`${recommendation["First Name"]} ${recommendation["Last Name"]}`}
          className="recommendation-avatar"
        />
        <div className="recommendation-info">
          <p className={isDark ? "dark-mode recommendation-name" : "recommendation-name"}>
            {recommendation["First Name"]} {recommendation["Last Name"]}
          </p>
          <p className={isDark ? "dark-mode recommendation-company" : "recommendation-company"}>
            {recommendation["Job Title"]} at {recommendation.Company}
          </p>
        </div>
      </div>
      <p className={isDark ? "dark-mode recommendation-text" : "recommendation-text"}>
        {recommendation["Text"]}
      </p>
    </div>
  );

  const renderAllRecommendationsCard = (recommendation, index) => (
    <div className="all-recommendation-card" key={index}>
      <div className="all-recommendation-header">
        <img
          src={getAvatarUrlLarge(recommendation["First Name"], recommendation["Last Name"])}
          alt={`${recommendation["First Name"]} ${recommendation["Last Name"]}`}
          className="all-recommendation-avatar"
        />
        <div className="all-recommendation-info">
          <p className={isDark ? "dark-mode all-recommendation-name" : "all-recommendation-name"}>
            {recommendation["First Name"]} {recommendation["Last Name"]}
          </p>
          <p className={isDark ? "dark-mode all-recommendation-company" : "all-recommendation-company"}>
            {recommendation["Job Title"]} at {recommendation.Company}
          </p>
        </div>
      </div>
      <p className={isDark ? "dark-mode all-recommendation-text" : "all-recommendation-text"}>
        {recommendation["Text"]}
      </p>
    </div>
  );

  return (
    <>
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

          <div className="recommendations-grid">
            {displayRecommendations.map((recommendation, index) =>
              renderRecommendationCard(recommendation, index)
            )}
          </div>

          {recommendations.length > 3 && (
            <div className="view-all-button-container">
              <button
                className={isDark ? "dark-mode view-all-btn" : "view-all-btn"}
                onClick={handleViewAllRecommendations}
              >
                View All Recommendations ({recommendations.length})
              </button>
            </div>
          )}
        </div>
      </Fade>

      {/* All Recommendations Modal */}
      {showAllRecommendations && (
        <div className={isDark ? "dark-mode recommendations-modal" : "recommendations-modal"}>
          <div className="recommendations-modal-content">
            <div className="recommendations-modal-header">
              <h2 className={isDark ? "dark-mode modal-title" : "modal-title"}>
                All Recommendations
              </h2>
              <button
                className={isDark ? "dark-mode close-button" : "close-button"}
                onClick={handleCloseAllRecommendations}
              >
                ×
              </button>
            </div>
            <div className="recommendations-modal-body">
              <div className="all-recommendations-grid">
                {recommendations.map((recommendation, index) =>
                  renderAllRecommendationsCard(recommendation, index)
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
