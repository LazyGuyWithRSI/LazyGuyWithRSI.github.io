/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ian Chapman",
  title: "Hi all, I'm Ian",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building and maintaining Web applications with JavaScript / Reactjs / Scala."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/LazyGuyWithRSI",
  linkedin: "https://www.linkedin.com/in/ian-chapman-180ba6172/",
  gmail: "gammaian.ic@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVEPLOPER WHO LOVES MAKING RANDOM PROJECTS",
  skills: [
    emoji(
      "⚡ Develop highly scalable and reliable web applications"
    ),
    emoji(
      "⚡ Create embedded robotic control systems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java / Scala",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C# / .NET",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Robotics / C++",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lake Washington Institute of Technology",
      logo: require("./assets/images/lwtechLogo.png"),
      subHeader: "Bachelors of Applied Science in Computer Science",
      duration: "June 2018 - June 2021",
      desc: "4.0 GPA",
      descBullets: [
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Axon",
      companylogo: require("./assets/images/axonLogo.jpg"),
      date: "August 2021 – Present",
      desc: "Developed full stack solutions for the highly available Evidence.com",
      descBullets: [
        "Designed and implemented new features in React",
        "Created dashboards in grafana to track SLAs",
        "Implemented REST APIs in Scala web services",
        "Practiced Test Driven Development to ensure quality"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Stockcharts",
      companylogo: require("./assets/images/stockchartsLogo.png"),
      date: "Summer 2021",
      desc: "Reduced tech-debt in large Java codebase",
      descBullets: [
        "Created a tool that automatically fixed code smells to save engineering time"
      ]

    },
    {
      role: "Software Engineer Intern",
      company: "Electronic Arts",
      companylogo: require("./assets/images/eaLogo.jpg"),
      date: "Summer 2019",
      desc: "Developer on a gameplay simulation decoupled from the game client",
      descBullets: [
        "Saved time for developers and designers by developing a metrics collection system",
        "Generated and analysed data to evaluate viability of an AI agent for game balance",
        "Gathered requirements for new feature from Engineering, Game Design, and QA stakeholders"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/pickerbot.jpg"),
      projectName: "Picker Bot",
      projectDesc: "Pick and Place robot utilizing computer vision",
      link: "https://github.com/LazyGuyWithRSI/picker_bot",
    },
    {
      image: require("./assets/images/pocketPirateSplash.png"),
      projectName: "Pocket Pirate",
      projectDesc: "Unreleased naval combat mobile game",
      link: "https://github.com/LazyGuyWithRSI",
    },
    {
      image: require("./assets/images/pirate.png"),
      projectName: "Pi-Robot",
      projectDesc: "2-Foot-Tall Animatronic LEGO Pirate Minifig (IN-PROGRESS)",
      link: "https://github.com/LazyGuyWithRSI/pirobot",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "gammaian.ic@gmail.com"
};

// Twitter Section

const twitterDetails = {
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
  isHireable
};
