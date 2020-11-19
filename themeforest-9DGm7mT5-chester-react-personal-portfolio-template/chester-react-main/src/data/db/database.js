import Mock from "../mock";

const database = {
  information: {
    name: 'Matthew Quint',
    aboutContent: "I am a full-stack web developer. I am dedicated to my work and strive to always continue learning new skills. I have a passion for designing creative, intuitive, and dynamic user experiences.",
    age: '',
    phone: '',
    nationality: 'American',
    language: 'English',
    email: 'mattquint111@gmail.com',
    address: 'Nashville, Tennessee',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/matt-quint/',
      dribbble: '',
      github: 'https://github.com/mattquint111'
    },
    brandImage: '/images/selfie.jpeg',
    aboutImage: '/images/climb.png',
    aboutImageLg: '/images/climb.png',
    cvfile: '/files/Resume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Able to design clean functional UI's as well as focusing on aesthetics when designing websites and applications. My focus is to create easy to use and intuitive UX/UI."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "I am proficient in HTML5, CSS3, Javascript, React, Redux, Node.js, MongoDB, SCSS, Jquery, SQL, AJAX, as well as Firebase, Git, and Github for open source projects."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "We live in a mobile world where devices come in every shape and size. I am focused on creating designs that are intuitive and user friendly for all mobile devices."
    }
  ],
  reviews: [
    // {
    //   id: 1,
    //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
    //   author: {
    //     name: 'Burdette Turner',
    //     designation: 'Web Developer, Abc Company'
    //   }
    // },
    
  ],
  skills: [
    {
      title: "Javascript",
      value: 95
    },
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    
    {
      title: "Node.js",
      value: 85
    },
    {
      title: "React/Redux",
      value: 80
    },
    {
      title: "SQL",
      value: 75
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "CHALK-UP",
      subtitle: "Rock climbing training app focused on indoor gym climbing.",
      imageUrl: "/images/chalkup.png",
      largeImageUrl: ["/images/chalk-up-lrg.png"],
      url: 'https://chalkupapp.herokuapp.com/'
    },
    {
      id: 2,
      title: "Super React Boy",
      subtitle: "Video game emulator app with both single and multiple player games.",
      imageUrl: "/images/super-react-boy.png",
      largeImageUrl: ["/images/super-react-boy-lrg.png"],
      url: 'https://chalkupapp.herokuapp.com/'
    },
    {
      id: 3,
      title: "Flix-Lists",
      subtitle: "Movie playlist site to create and save movie lists.",
      imageUrl: "/images/flix-lists.png",
      largeImageUrl: [
        "/images/flix-lists-lrg.png"
      ],
      url: 'flixlists.surge.sh'
    },
    
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Apr 2020",
        position: "Bartender",
        company: "FGL House",
        details: "Oversaw operational procedures were correctly implemented and customer expectations were surpassed in a fast paced club like environment. Ensured all customers were tended to in both the bar/restaurant area and ensured the customer experience was satisfactory."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Research Assistant",
        company: "Axion Dark Matter Experiment (ADMX) - University of Florida",
        details: "Participated in the development of a software simulation framework for particle detection and analysis.Performed standard technical laboratory and field experimental procedures."
      },
      {
        id: 3,
        year: "2016 - 2018",
        position: "Physics/Math Tutor",
        company: "University of Florida",
        details: "Privately tutored high school and undergraduate students in various physics and math courses. Enhanced student learning by optimizing a wide range of teaching approaches catered to each students learning needs."
      },
      {
        id: 4,
        year: "May 2017 - Aug 2017",
        position: "Research Internship",
        company: "Ultra High Energy Cosmic Ray Telescope Array Project",
        details: "Studied and modeled the effects of atmospheric conditions on cosmic ray particle scattering. Monitor and assist in data collection from telescope array experiment using standard experimental techniques. Performed device simulation, characterization, and data analysis methods."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "Sep 2020 - Jan 2020",
        graduation: "Certificate in Software Engineering",
        university: "DigitalCrafts",
        details: "Software engineering training program covering full-stack development including, but not limited to JavaScript, Python, including an emphasis on cutting-edge frameworks like React/Redux and server-side technologies including Node.js, Express, and PostgreSQL."
      },
      {
        id: 2,
        year: "2015 - 2018",
        graduation: "Bachelor of Science in Physics",
        university: "University of Florida",
        details: "Graduated Cum Laude with a GPA of 3.81"
      },
      {
        id: 3,
        year: "2015 - 2018",
        graduation: "Bachelor of Arts in Mathematics",
        university: "University of Florida",
        details: "Graduated Cum Laude with a GPA of 3.81"
      }
    ]
  },
  blogs: [
    // {
    //   id: 1,
    //   title: 'Markdown & Html supported blog.',
    //   featuredImage: '/images/blog-image-1.jpg',
    //   filesource: '../../blog/markdown-html-supported-blog.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 2,
    //   title: 'Installing NodeJS on your device.',
    //   featuredImage: '/images/blog-image-2.jpg',
    //   filesource: '../../blog/installing-nodejs-on-your-device.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 3,
    //   title: 'UI/UX design starter with Adobe XD.',
    //   featuredImage: '/images/blog-image-3.jpg',
    //   filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 4,
    //   title: 'Boost your post for increasing sales.',
    //   featuredImage: '/images/blog-image-4.jpg',
    //   filesource: '../../blog/boost-your-post-for-increasing-sales.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 5,
    //   title: 'Difference between GatsbyJS & NextJS.',
    //   featuredImage: '/images/blog-image-5.jpg',
    //   filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 6,
    //   title: 'How to choose javascript framework for project.',
    //   featuredImage: '/images/blog-image-6.jpg',
    //   filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 7,
    //   title: 'Web automation with python language.',
    //   featuredImage: '/images/blog-image-7.jpg',
    //   filesource: '../../blog/web-automation-with-python-language.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 8,
    //   title: 'Time to use latest technology for creating a website.',
    //   featuredImage: '/images/blog-image-8.jpg',
    //   filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 9,
    //   title: 'Think out of the box.',
    //   featuredImage: '/images/blog-image-9.jpg',
    //   filesource: '../../blog/think-out-of-the-box.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 10,
    //   title: 'Trending designs in 2020.',
    //   featuredImage: '/images/blog-image-1.jpg',
    //   filesource: '../../blog/trending-designs-in-2020.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 11,
    //   title: 'How to get 10k instagram followers?',
    //   featuredImage: '/images/blog-image-2.jpg',
    //   filesource: '../../blog/how-to-get-10k-instagram-followers.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 12,
    //   title: 'What NodeJS can do?',
    //   featuredImage: '/images/blog-image-3.jpg',
    //   filesource: '../../blog/what-nodejs-can-do.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 13,
    //   title: 'Futures of javascript.',
    //   featuredImage: '/images/blog-image-4.jpg',
    //   filesource: '../../blog/future-of-javascript.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 14,
    //   title: 'Popular javascript library in 2020.',
    //   featuredImage: '/images/blog-image-5.jpg',
    //   filesource: '../../blog/popular-javascript-library-in-2020.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 15,
    //   title: 'Promrammers must read books.',
    //   featuredImage: '/images/blog-image-6.jpg',
    //   filesource: '../../blog/programmers-must-read-books.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // }
  ],
  contactInfo: {
    emailAddress: ['mattquint111@gmail.com'],
    address: "Nashville, Tennessee"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});