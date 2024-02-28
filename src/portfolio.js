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
    "A passionate iOS Software Developer 🚀 Having dedicated a decade to iOS development, my work is marked by versatility, passion, and innovation. Eager to tackle new challenges and pursue growth opportunities, I aim to thrive in leadership roles, fostering creativity and collaboration along the way."
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
  subTitle: "Trailblazing iOS Developer Embracing New Horizons",
  skills: [
    emoji(
      "⚡ Craft compelling and intuitive user interfaces (UIs) for your iOS apps"
    ),
    emoji("⚡ Build high-performance native iOS apps"),
    emoji(
      "⚡ Seamlessly integrate third-party services and frameworks"
    )
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
      Stack: "Swift", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Objective-C",
      progressPercentage: "80%"
    },
    {
      Stack: "SwiftUI",
      progressPercentage: "50%"
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
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "October 2009 - May 2013",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, Data Structures, Digital Logic Design and Databases.",
      descBullets: [
        "Ranked top 10% in the program",
        "Develop One and only iOS app project from whole batch",
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
      I tackle diverse iOS projects, building features, fixing bugs, and integrating services.
      Collaboration is key, ensuring optimal solutions through meetings, mentorship, and staying sharp on the latest advancements.
      My dedication to smooth project execution is evident in thorough documentation, code reviews, and reporting.
      `  ,
    },
    {
      role: "Senior Software Enginner (iOS)",
      company: "Insurance Authority",
      companylogo: require("./assets/images/insurance_authority.png"),
      date: `Jan 2019 – Feb 2020 
      Feb 2017 – Apr 2018`,
      location: "Abu Dhabi, UAE",
      desc: `
      Built four diverse iOS applications for the UAE federal authority, contributing to their digital initiatives.
      Led architectural decisions and collaborated closely with backend and QA teams for a seamless user experience.
      `
    },
    {
      role: "Software Engineer (iOS)",
      company: "Algorythma, Swoo",
      companylogo: require("./assets/images/algorythma.jpg"),
      date: "April 2018 – Jan 2019",
      location: "Abu Dhabi, UAE",
      desc: `
      Leveraging my skills at Algorythma, I worked on Swoo a popular streaming app with a massive user base, I honed my expertise in handling high-traffic applications.
      I contributed significantly to the development process, ensuring scalability and a smooth user experience for millions.
      `
    },
    {
      role: "Software Engineer (iOS)",
      company: "Nextbridge",
      companylogo: require("./assets/images/nextbridge.jpg"),
      date: "Mar 2014 – Feb 2017",
      location: "Lahore, Pakistan",
      desc: `
      Embarked on my software development journey at Nextbridge,
      a prominent Pakistani software house. Over three years, 
      I climbed the ladder from junior developer to a mid-level position,
      consistently contributing to diverse projects and acquiring valuable skills within a dynamic environment.
      `
    },
    {
      role: "Junior Software Engineer (iOS)",
      company: "S3 Technology",
      location: "Islamabad, Pakistan",
      companylogo: require("./assets/images/s3_technology.png"),
      date: "May 2013 – March 2014",
      desc: `
      My early years in the field ignited a passion for mobile app development.
      Within a supportive environment, I rapidly expanded my skillset,
      laying the groundwork for my professional growth and the dedication I bring to the craft today.
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
  subtitle: "Leveraged my expertise in iOS to contribute to the development of exciting projects",
  projects: [
    {
      image: require("./assets/images/swoo.jpeg"),
      projectName: "SWOO - Live Stream",
      projectDesc: `
      Swoo is an easy way to experience anything happening across the world via live videos.
      These are broadcast by influencers, celebrities and experts - giving you a peek into the lives of your idols,
      motivating, inspiring, educating and entertaining you!`,
    },
    {
      image: require("./assets/images/napa.png"),
      projectName: "NAPA",
      projectDesc: `
      The NAPA AutoCare Center app empowers users to manage all their car care needs conveniently from their smartphones.
      Schedule appointments, track vehicle information, receive repair cost estimates, and get notified when your car is ready.
      Additionally, access exclusive discounts and explore innovative features designed to simplify your car ownership experience.`,
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/napa-autocare/id980284954"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const linkedinRecommandations = {
  display: true,
  title: "Recommendations",
  subTitle: "Beyond the Code: Hear colleagues' insights."
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
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
