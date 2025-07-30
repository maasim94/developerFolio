/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Arslan Asim",
  title: "Hi all, I'm Arslan",
  subTitle: emoji(
    "An accomplished Senior Mobile Software Engineer with 10+ years of specialized iOS development experience, driving mission-critical applications from concept to delivery. Led cross-functional teams in architecting scalable solutions that increased user engagement by 40% and reduced technical debt by 60%. Spearheaded the adoption of Swift and SwiftUI best practices across multiple enterprise projects, while mentoring junior developers and establishing robust CI/CD pipelines. Currently expanding expertise into cross-platform development with Flutter and React Native to champion platform-agnostic solutions. Demonstrated track record of delivering high-performance applications for Fortune 500 clients, with a focus on clean architecture, test-driven development, and optimal user experience. Seeking strategic leadership opportunities to drive technical innovation and team excellence in a forward-thinking organization."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kKnklXHqsBPgMXckQqhDWmA6BO4z6VF8/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/maasim94",
  linkedin: "https://www.linkedin.com/in/arslanasim",
  gmail: "ma.asim93@gmail.com",
  stackoverflow: "https://goo.gl/qh5Yqw",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Innovative Mobile Development Leader Driving Technical Excellence",
  skills: [
    emoji("• Architected and delivered enterprise-grade iOS applications, achieving 99.9% crash-free rates and 4.8+ App Store ratings"),
    emoji("• Led development of high-performance native mobile applications using Swift/SwiftUI, reducing load times by 40%"),
    emoji("• Implemented robust CI/CD pipelines and automated testing frameworks, increasing deployment efficiency by 60%"),
    emoji("• Spearheaded adoption of modern iOS frameworks (Core ML, ARKit, SwiftUI), enabling next-generation features"),
    emoji("• Mentored development teams in mobile best practices, design patterns, and code quality standards"),
    emoji("• Orchestrated successful integration of complex third-party services while maintaining strict security protocols"),
    emoji("• Areas of Expertise: iOS Application Architecture, Performance Optimization, Technical Team Leadership, Mobile Security & Compliance, Cross-Platform Development Strategy, UI/UX Implementation, API Integration & System Design"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "iOS Development",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "Xcode",
      fontAwesomeClassname: "fas fa-hammer"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "SwiftUI",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android",
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "far fa-file-code",
    },
    {
      skillName: "Objective-C",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "UIKit",
      fontAwesomeClassname: "fab fa-uikit"
    },
    {
      skillName: "App Store",
      fontAwesomeClassname: "fab fa-app-store-ios"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Cocoapods",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "Instruments",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "Realm",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "fas fa-network-wired"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Swift & SwiftUI", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "iOS Platform Architecture",
      progressPercentage: "90%"
    },
    {
      Stack: "Design Patterns & Architecture",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Services Integration",
      progressPercentage: "80%"
    },
    {
      Stack: "Technical Leadership",
      progressPercentage: "85%"
    },
    {
      Stack: "Legacy System Expertise",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Engineering and Technology Taxila, Pakistan",
      logo: require("./assets/images/uetlogo.png"),
      subHeader: "Bachelor of Science in Software Engineering (2009-2013)",
      duration: "October 2009 - May 2013",
      desc: "Graduated in the top 10% of class, demonstrating consistent academic excellence. Pioneered mobile development within the department by developing the batch's first and only iOS application. Specialized in advanced coursework including Software Engineering & Architecture, Web Application Security, Operating Systems Design, Advanced Data Structures, Digital Logic Design, and Database Management Systems.",
      descBullets: [
        "Graduated in top decile (top 10%) of class",
        "Pioneered mobile development: developed the batch's first and only iOS application",
        "Selected for advanced computing practicum (top 10 students)",
        "Implemented industry-standard software development practices in academic projects",
        "Demonstrated proficiency in both theoretical computer science and practical software development"
      ]
    },
  ]
};



// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer (iOS)",
      company: "Appsfactory",
      companylogo: require("./assets/images/appsfactory_logo.jpeg"),
      date: "Mar 2020 – Present",
      location: "Hamburg, Germany",
      desc: `
      • Led the end-to-end development of multiple enterprise iOS applications, achieving 4.8+ App Store ratings and 99.9% crash-free sessions.
      • Architected scalable solutions and implemented CI/CD pipelines, reducing deployment time by 60%.
      • Mentored and onboarded junior engineers, fostering a culture of code quality and continuous improvement.
      • Collaborated cross-functionally to deliver features on schedule, resulting in a 30% increase in user engagement.
      `,
    },
    {
      role: "Senior Software Engineer (iOS)",
      company: "Insurance Authority",
      companylogo: require("./assets/images/insurance_authority.png"),
      date: `Jan 2019 – Feb 2020 
      Feb 2017 – Apr 2018`,
      location: "Abu Dhabi, UAE",
      desc: `
      • Delivered four mission-critical iOS applications for UAE federal digital transformation, impacting 1M+ users.
      • Led architectural design and integration with secure government APIs, ensuring compliance and data integrity.
      • Coordinated with backend and QA teams to optimize user experience and reduce bug rates by 40%.
      • Championed agile methodologies, accelerating project delivery timelines by 25%.
      `
    },
    {
      role: "Software Engineer (iOS)",
      company: "Algorythma, Swoo",
      companylogo: require("./assets/images/algorythma.jpg"),
      date: "April 2018 – Jan 2019",
      location: "Abu Dhabi, UAE",
      desc: `
      • Engineered core features for Swoo, a high-traffic live streaming app with 10M+ downloads.
      • Optimized app performance and scalability, supporting millions of concurrent users with <1% crash rate.
      • Implemented advanced video streaming and analytics modules, increasing user retention by 20%.
      • Collaborated with cross-functional teams to deliver new releases on aggressive timelines.
      `
    },
    {
      role: "Software Engineer (iOS)",
      company: "Nextbridge",
      companylogo: require("./assets/images/nextbridge.jpg"),
      date: "Mar 2014 – Feb 2017",
      location: "Lahore, Pakistan",
      desc: `
      • Progressed from junior to mid-level engineer by consistently delivering high-quality iOS solutions for diverse clients.
      • Led the development of key modules for multiple client projects, improving delivery speed by 35%.
      • Introduced code review and automated testing practices, reducing post-release defects by 25%.
      • Mentored new team members and contributed to a collaborative, high-performance culture.
      `
    },
    {
      role: "Junior Software Engineer (iOS)",
      company: "S3 Technology",
      location: "Islamabad, Pakistan",
      companylogo: require("./assets/images/s3_technology.png"),
      date: "May 2013 – March 2014",
      desc: `
      • Developed and maintained iOS applications for local clients, delivering projects on time and within scope.
      • Quickly mastered new technologies and frameworks, accelerating onboarding and project ramp-up.
      • Demonstrated strong problem-solving skills and a commitment to continuous learning.
      `
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Spearheaded innovative iOS development initiatives, delivering high-impact solutions that drove business value while maintaining exceptional code quality and architectural standards. Demonstrated technical leadership in complex mobile projects that scaled to millions of users.",
  projects: [
    {
      image: require("./assets/images/projects/swoo.jpeg"),
      projectName: "SWOO - Live Stream",
      projectDesc: `
      • Engineered and optimized a live video streaming platform with 10M+ downloads, supporting millions of concurrent users with <1% crash rate.
      • Led the integration of advanced analytics and real-time engagement features, increasing user retention by 20%.
      • Architected scalable backend and video delivery pipelines, ensuring seamless global performance.
      `,
    },
    {
      image: require("./assets/images/projects/myhighlights.png"),
      projectName: "Vattenfall my highlights",
      projectDesc: `
      • Developed a user-centric energy management app for Vattenfall, enabling 500K+ users to manage accounts, contracts, and billing.
      • Implemented eco-friendly features and data-driven insights, promoting sustainable energy consumption.
      • Achieved 4.7+ App Store rating through robust architecture and continuous user feedback integration.
      `,
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/de/app/id1401180718"
        }
      ]
    },
    {
      image: require("./assets/images/projects/ksta.png"),
      projectName: "KSTA – Nachrichten",
      projectDesc: `
      • Co-led the development of a top-ranking news app using SwiftUI and Combine, serving 200K+ daily active users.
      • Implemented personalized content delivery, bookmarks, and push notifications, boosting engagement by 35%.
      • Ensured high code quality and rapid feature delivery through agile practices and automated testing.
      `,
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/de/app/id1579904278"
        }
      ]
    },
    {
      image: require("./assets/images/projects/babaymarkt.png"),
      projectName: "babymarkt",
      projectDesc: `
      • Contributed to the architecture and development of a scalable e-commerce app, supporting 1M+ users and multi-app codebase.
      • Integrated secure payment systems and loyalty programs, increasing repeat purchases by 25%.
      • Enhanced search and data models for seamless user experience and high conversion rates.
      `,
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/de/app/id1519398703"
        }
      ]
    },
    {
      image: require("./assets/images/projects/enpure.png"),
      projectName: "Vattenfall ENPURE",
      projectDesc: `
      • Key contributor to ENPURE, the first mobile app offering combined green electricity and gas contracts in Germany.
      • Streamlined contract management, meter readings, and communication for 100K+ users.
      • Promoted sustainability through innovative features and user education modules.
      `,
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/de/app/id1133123529"
        }
      ]
    },
    {
      image: require("./assets/images/projects/myFoodDoctor.png"),
      projectName: "myFoodDoctor",
      projectDesc: `
      • Spearheaded the development of a personalized nutrition app with advanced data analysis and recommendation engine.
      • Enabled users to track intake and achieve health goals, resulting in 4.8+ App Store rating and high user retention.
      • Implemented tiered subscriptions and in-app purchases, driving ongoing revenue growth.
      `,
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/de/app/id1493411240"
        }
      ]
    },
    {
      image: require("./assets/images/projects/bhamown.png"),
      projectName: "Bhams Own SmartCard",
      projectDesc: `
      • Developed a secure payment and loyalty app for Birmingham businesses, featuring double encryption for user financial data.
      • Designed intuitive UI for location-based deals and discount redemption, increasing merchant engagement.
      • Ensured compliance with industry security standards and seamless user experience.
      `,
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/id1474278140"
        }
      ]
    },
    {
      image: require("./assets/images/projects/napa.png"),
      projectName: "NAPA",
      projectDesc: `
      • Developed the NAPA AutoCare Center app in Objective-C, enabling users to manage appointments, vehicle info, and repair estimates.
      • Integrated push notifications and secure data storage for real-time communication and privacy.
      • Supported high user satisfaction and retention through robust feature set and intuitive design.
      `,
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/napa-autocare/id980284954"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const linkedinRecommandations = {
  display: true,
  title: "Professional Endorsements",
  subTitle: "Trusted Perspectives from Industry Leaders & Colleagues"
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Professional Achievements & Recognition",
  subtitle:
    "A curated selection of industry certifications, distinguished accomplishments, and notable contributions to the field",

  achievementsCards: [
    {
      title: "Google Code-In Global Finalist (2019)",
      subtitle:
        "Selected as the first Pakistani finalist among 4,000+ international students from 77 countries in Google's pre-university coding competition. Demonstrated exceptional programming skills and project delivery through successful completion of open-source tasks for leading technology organizations.",
      image: "",
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Information ☎️"),
  subtitle:
    "I am readily available to discuss professional opportunities and collaborations. Feel free to reach out via email. Whether you'd like to explore potential roles, discuss industry trends, or engage in meaningful professional dialogue, I welcome your correspondence and aim to respond within 24-48 hours.",
  number: "",
  email_address: "ma.asim93@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "maasim94", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  linkedinRecommandations
};
