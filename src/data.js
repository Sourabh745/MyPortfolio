export const config = {
  portfolio: {
    portfolioLogo: 'Portfolio',
    projectCard: {
      cards: [
        {
          heading: 'iNoteBook',
          description:
            'Secure Login System: Implementation of JWT (JSON Web Tokens) for authentication.Ensures only authorized users can access the system.Enhances security by preventing unauthorized access to user data. • JWT Token Authentication: Provides a secure method for users to authenticate themselves. Generates tokens upon successful login, whichare then used to authenticate subsequent requests. Tokens are encrypted and contain necessary user information, enhancing security. • MongoDB Database Integration: Storage of user notes in a MongoDB database. Utilizes MongoDBs flexibledocument structure for efficientdata storage. Offers scalability and reliability for managing large volumes of user data. • Data Security: Ensures the safety of user notes by securely storing them in the MongoDB database. Protects against unauthorized access anddata breaches. Maintains the integrity and confidentiality of user information.',
          animationDelay: '300',
          buttonLink: 'https://github.com/Sourabh745/iNoteBook',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'NewsApp',
          description: '• Real-Time News Updates: Utilizes the NewsAPI to fetch live news data from a multitude of reliable sources.\t| • Genre-Based Sections: Implements a genre section allowing users to explore news articles categorized by different genres such as Technology, Sports, Politics, Entertainment, etc. | • Responsive Design: Utilizes React.js capabilities for creating a responsive design, ensuring compatibility across various devices and screensizes. | • Tech Involved: HTML, CSS, React.js, API integration.',
          animationDelay: '700',
          buttonLink: 'https://github.com/Sourabh745/DailyNews',
          buttonText: 'CHECK OUT',
        },
        // {
        //   heading: 'Project Name Here',
        //   description: 'Project description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto mollitia at, neque iste, cupiditate distinctio ipsam animi iure nam inventore eos illo officiis voluptatibus labore est nulla totam magni minima blanditiis,',
        //   animationDelay: '700',
        //   buttonLink: 'https://codemmit.tech',
        //   buttonText: 'CHECK OUT',
        // },
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
          keyPointOne: '• Built front-end of multiple website using ReactJS',
          keyPointTwo:
            '• Developed a personal iNotebook project to keep your notes save in database.',
          keyPointThree: '• Learn about a basics of AWS and earned a certificate of cloud practitioner.',
          keyPointFour:
            '',
          offsetValue: '0',
         },
        // {
        //   companyName: 'Company Name',
        //   role: 'Front-end Developer',
        //   introText: '',
        //   duration: '14/06/2021 - 14/07/2021',
        //   keyPointOne: 'Built front-end of multiple website using ReactJS.',
        //   keyPointTwo: 'Add few lines here... if requried',
        //   keyPointThree:
        //     'Add few lines here... if requried',
        //   keyPointFour:
        //     'Add few lines here... if requried Lorem, ipsum dolor sit amet consectetur adipisicing cto molestiae.',
        //   offsetValue: '-1000',
        // },
        // {
        //   companyName: 'Company Name',
        //   role: 'Front-end Developer',
        //   introText: '',
        //   duration: '10/09/2020 - 10/11/2020',
        //   keyPointOne:
        //     'Add few lines here... if requried',
        //   keyPointTwo: 'Add few lines here... if requried',
        //   keyPointThree: 'Add few lines here... if requried',
        //   keyPointFour: '',
        //   offsetValue: '-1000',
        // },
      ],
    },
  },
};

export default config;
