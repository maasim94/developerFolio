import React, { useContext, useEffect, useState } from "react";
import "./AllRecommendations.scss";
import { linkedinRecommandations } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import recommendationsData from "../../assets/csv/recommendations.csv";
import { readString } from "react-papaparse";

export default function AllRecommendations() {
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

    // Generate avatar URL based on name
    const getAvatarUrl = (firstName, lastName) => {
        const initials = `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`;
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName + ' ' + lastName)}&background=0078d4&color=ffffff&size=80&bold=true`;
    };

    const renderRecommendationCard = (recommendation, index) => (
        <div className="all-recommendation-card" key={index}>
            <div className="all-recommendation-header">
                <img
                    src={getAvatarUrl(recommendation["First Name"], recommendation["Last Name"])}
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
        <div className={isDark ? "dark-mode all-recommendations-page" : "all-recommendations-page"}>
            <div className="all-recommendations-container">
                <Fade bottom duration={1000} distance="20px">
                    <div className="all-recommendations-header">
                        <h1 className={isDark ? "dark-mode all-recommendations-title" : "all-recommendations-title"}>
                            All Recommendations
                        </h1>
                        <p className={isDark ? "dark-mode all-recommendations-subtitle" : "all-recommendations-subtitle"}>
                            Complete collection of professional recommendations from colleagues and collaborators.
                        </p>
                        <button
                            className={isDark ? "dark-mode back-button" : "back-button"}
                            onClick={() => window.history.back()}
                        >
                            ← Back to Portfolio
                        </button>
                    </div>

                    <div className="all-recommendations-grid">
                        {recommendations.map((recommendation, index) =>
                            renderRecommendationCard(recommendation, index)
                        )}
                    </div>

                    {recommendations.length === 0 && (
                        <div className="loading-message">
                            <p>Loading recommendations...</p>
                        </div>
                    )}
                </Fade>
            </div>
        </div>
    );
}
