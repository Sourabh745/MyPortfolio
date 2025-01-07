export const config = {
  portfolio: {
    portfolioLogo: 'Portfolio',
    projectCard: {
      cards: [
        {
          heading: 'iNoteBook',
          description:
            `Developed a secure and scalable note-taking application with JWT-based authentication and MongoDB for efficient data storage.
            Key Features:
            - User authentication for secure access.
            - Reliable storage to protect user information and prevent unauthorized access.
            - Future Scope: Adding a backup feature to prevent data loss.`,
          animationDelay: '300',
          buttonLink: 'https://github.com/Sourabh745/iNoteBook',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'NewsApp',
           description: //`Purpose: Deliver real-time news updates across categories like Technology, Sports, and Entertainment.
          //   Technologies Used: React.js, NewsAPI, HTML, CSS, JavaScript.
          //   Key Contributions:
          //   - Integrated NewsAPI to provide live updates with over 1,000 articles daily.
          //   - Designed an intuitive user interface, increasing user engagement.
          //   Future Scope:
          //   - Personalized news feeds, multilingual support, and offline reading capabilities.`
          "react-portfolio\src\assets\images\icons\DALL.jpg",
          animationDelay: '700',
          buttonLink: 'https://main--dailynews645.netlify.app/',
          buttonText: 'Visit site',
        },
        {
          heading: 'Under Construction',
          description: '</>',
          animationDelay: '1100',
          buttonText: '',
        },
      ],
    },
    internships: {
      internship: [
        {
          companyName: 'HopingMinds',
          role: 'Front-end Developer',
          introText: '',
          duration: '07/01/2023 - 07/07/2023',
          keyPointOne: 'Built front-end of multiple website using ReactJS',
          keyPointTwo: 'Developed a personal iNotebook project to keep your notes save in database.',
          keyPointThree: 'Learn about a basics of AWS and earned a certificate of cloud practitioner.',
          offsetValue: '0',
        },
        {
          companyName: 'Anudip Foundation',
          role: 'Advanced Java Training',
          introText: '',
          duration: 'June 2024 - Dec 2024',
          keyPointOne: 'Acquired skills in Java, Hibernate, MySQL, and CLI application development through an extensive 6-month training program, building a solid foundation in back-end technologies',
          keyPointTwo: 'Developed a digital bookstore system, integrating Java programming, Hibernate ORM, and MySQL, managing over 100 books.',
          keyPointThree:
            'Strengthened expertise in OOP, DBMS, and CLI tools, contributing to 100% efficiency in application performance during user testing',
          offsetValue: '-1000',
        },
      ],
    },
  },
};

export default config;
