import cloudxperteImage from '../assets/images/cloudxperte.png';
import webappcostImage from '../assets/images/webappcost.png';
import costcalformImage from '../assets/images/costcalform.png';
import costbreakdownImage from '../assets/images/costbreakdown.png';
import hireappdevformImage from '../assets/images/hireappdevform.png';
import hireappdevformImage2 from '../assets/images/hireappdevform2.png';
import testcostcalImage from '../assets/images/testcostcal.png';
import mobiletestcostcalImage from '../assets/images/mobiletestcostcal.png';
import hiretesterImage from '../assets/images/hiretester.png';
import vehicleTrackingImage from '../assets/images/vehicletrackingqa.png';
import vtdemosImage from '../assets/images/vtdemos.png';
import fleetmngImage from '../assets/images/fleetmng.png';
import vtpricingImage from '../assets/images/vtpricing.png';
import fmpricingImage from '../assets/images/fmpricing.png';
import deeniyatplusImage from '../assets/images/deeniyatplus.png';
import deeniyatplusformImage from '../assets/images/deeniyatplusform.png';
import deeniyatslImage from '../assets/images/deeniyatsl.png';
import mhfglobalImage from '../assets/images/mhfglobal.png';
import mhfadminImage from '../assets/images/mhfadmin.png';
import animalappImage from '../assets/images/animalapp.png';
import animalappaccImage from '../assets/images/animalappacc.png';
import veterinaryappImage from '../assets/images/veterinaryapp.png';
import pharmacyappImage from '../assets/images/pharmacyapp.png';
import devtinderloginImage from '../assets/images/devtinderlogin.png';
import devtindersignupImage from '../assets/images/devtindersignup.png';
import devtinderfeedImage from '../assets/images/devtinderfeed.png';
import devtinderprofileImage from '../assets/images/devtinderprofile.png';
import devtinderconnImage from '../assets/images/devtinderconn.png';
import devtindersubsImage from '../assets/images/devtindersubs.png';
import devtinderrzpImage from '../assets/images/devtinderrzp.png';
import jtaImage from '../assets/images/jta.png';
import jtatimingImage from '../assets/images/jtatiming.png';
import jtaupdatepageImage from '../assets/images/jtaupdatepage.png';

import { ProjectDetail } from '../components/ProjectDetails';

const projects: ProjectDetail[] = [
    {
        id: 'jta',
        title: 'Jamaat Timing App (Islamic Utility App)',
        description: 'A web application for Jamaat timings and notifications',
        longDescription: `A unique real-time web application that enables users to search and view Jamaat and Adhaan timings of registered mosques, while allowing community admins to manage masjid data and super admins to verify and approve timings.`,
        techStack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Redux', 'Redux Persist', 'Redux Toolkit', 'Axios', 'React Router DOM', 'Node.js', 'Express', 'REST APIs', 'MongoDB', 'Mongoose', 'JWT','Git', 'Postman'],
        features: [
            'Developed role-based architecture (User, Community Admin, Super Admin) with permission-based routing.',
            'Implemented mosque search, registration, and real-time timing updates.',
            'Designed workflow for masjid registration and approval between Community Admin and Super Admin.',
            'Built notification system for update status (e.g., "Updated 1 min ago").',
            'Integrated GitHub-managed frontend (React.js) and backend (Node.js + Express) using REST APIs.',
        ],
        achievement: '40% improvement in resource utilization',
        challenges: [
            'Designing a secure, multi-role approval system with async timing updates.',
            'Handling real-time updates for masjid timings across different user roles.',
        ],
        solutions: [
            'Created clear role separation with condition-based rendering and secure access control using JWT and middleware checks.',
            'Implemented timestamp-based update notifications and chart upload verification flow.',
        ],
        images: [
            jtaImage,
            jtatimingImage,
            jtaupdatepageImage
            // Add more images here
        ],
        githubUrl: 'https://github.com/Tohid4641/jamaat-timing-app-frontend',
        // liveUrl: '',
        company: 'Self Unique Project',
        role: 'Full Stack Developer',
        duration: '1 month',
        subProjects: [
            {
                name: 'Jamaat Timing Web Application',
                description: 'Not deployed yet',
                link: ''
            },
        ]
    },
    {
        id: 'devtinder',
        title: 'DevTinder – A Developer Matching Application',
        description: 'DevTinder is a full-stack matchmaking app for developers featuring real-time chat, subscription payments, and manual AWS deployment built during the Namaste Node.js course.',
        longDescription: `DevTinder is a full-stack matchmaking application tailored for developers, inspired by the swiping mechanism of Tinder. Built during the Namaste Node.js course by Akshay Saini, the project emphasizes real-world application of Node.js concepts, encompassing user authentication, real-time interactions, and subscription-based features.`,
        techStack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Redux', 'Redux Toolkit', 'Axios', 'React Router DOM', 'Node.js', 'Express', 'REST APIs', 'MongoDB', 'Mongoose', 'Socket.io', 'JWT', 'AWS EC2', 'AWS SES', 'Nginx', 'PM2', 'Razorpay', 'Git', 'Postman'],
        features: [
            'Implemented RESTful APIs using Express.js for user management, matchmaking logic, and chat functionalities.',
            'Integrated MongoDB with Mongoose for efficient data modeling and querying.',
            'Developed real-time chat features using Socket.IO, enabling instant messaging between matched users.',
            'Set up JWT-based authentication to secure API endpoints and manage user sessions.',
            'Designed and integrated a subscription management system, incorporating payment gateway integration for premium features.',
            `Built responsive UI components using React.js and styled them with Tailwind CSS.
            Managed application state using Redux Toolkit, ensuring seamless data flow across components.
            `,
            'Implemented routing with React Router DOM to navigate between different views.',
            'Integrated frontend with backend APIs, handling asynchronous data fetching and error handling.',
            `Deployed the application manually on AWS EC2, configuring the server environment, setting up Nginx as a reverse proxy, and managing domain settings.`,
            'Ensured environment variable management and process monitoring using tools like PM2.'

        ],
        achievement: '40% improvement in resource utilization',
        challenges: [
            'Implementing a real-time chat system that scales efficiently.',
            'Managing user subscriptions and integrating a payment gateway.',
            'Deploying the application without using automated CI/CD pipelines.',
            'Managing complex state across various components.'
        ],
        solutions: [
            'Utilized Socket.IO to establish WebSocket connections, enabling bi-directional communication between clients and the server.',
            'Designed a subscription schema in MongoDB and integrated a payment gateway (e.g., Razorpay or Stripe) to handle transactions securely.',
            'Manually configured the server environment on AWS EC2, set up Nginx for handling HTTP requests, and managed application processes using PM2.',
            'Implemented Redux Toolkit to centralize state management, making the application more predictable and easier to debug.'
        ],
        images: [
            devtinderloginImage,
            devtindersignupImage,
            devtinderfeedImage,
            devtinderprofileImage,
            devtinderconnImage,
            devtindersubsImage,
            devtinderrzpImage
            // Add more images here
        ],
        githubUrl: 'https://github.com/Tohid4641/devTinder-web',
        liveUrl: 'http://13.60.199.215',
        company: 'Self Project | Course Based',
        role: 'Full Stack Developer',
        duration: '1 month',
        subProjects: [
            {
                name: 'DevTinder - Web Application',
                description: 'The web application for DevTinder, allowing users to create profiles, swipe on potential matches, and chat in real-time.',
                link: 'http://devtinder.in/'
            },
        ]
    },
    {
        id: 'erp',
        title: 'ERP (Enterprise Resource Planning) Tools',
        description: 'Cost Calculators or Cost estimation tools for software projects',
        longDescription: `At Redbytes Software, I was instrumental in developing and maintaining a comprehensive suite of ERP tools designed to streamline cost estimation and hiring processes for web and mobile applications, as well as software testing services. These platforms provided clients with interactive calculators and hiring modules, enhancing decision-making and operational efficiency.`,
        techStack: ['Node.js', 'Express', 'PHP', 'Filzilla', 'Git', 'REST APIs', 'HTML/CSS', 'PM2', 'SSH', 'MySQL', 'PHPMyAdmin', 'Twilio', 'TextLocal', 'Sendgrid',],
        features: [
            'Integrated third-party APIs (Fixer.io for currency conversion, SendGrid for email, Twilio/Meta for WhatsApp/SMS alerts, IpStack/GeoPlugin for geolocation).',
            'Built PDF quote generation using html-pdf-node and handled international phone/country data with libphonenumber-js.',
            'Resolved edge cases (e.g., Zimbabwe currency rates via Forbes API when standard packages lacked support).',
            'Managed deployments via Git/FTP and maintained server directories on /var/www/html.',
        ],
        achievement: '40% improvement in resource utilization',
        challenges: [
            'Handling currency conversion for unsupported countries (e.g., Zimbabwe) where standard packages like currency-converter-lt lacked data.',
            'Deprecated/closed APIs (e.g., Twilio WhatsApp API) disrupting communication workflows.',
            'Managing multiple third-party APIs (10+ integrations per project) leading to latency and error cascades.',
        ],
        solutions: [
            'Integrated a third-party Forbes API to fetch real-time exchange rates, ensuring global coverage.',
            'Migrated to Meta’s WhatsApp Business API and implemented failover SMS alerts via TextLocal.',
            'Built a centralized error-handling middleware in Node.js and introduced retry mechanisms for API calls.'
        ],
        images: [
            cloudxperteImage,
            webappcostImage,
            costcalformImage,
            costbreakdownImage,
            hireappdevformImage,
            hireappdevformImage2,
            testcostcalImage,
            mobiletestcostcalImage,
            hiretesterImage,
            // Add more images here
        ],
        githubUrl: 'https://github.com/yourusername/cloudxperte',
        //liveUrl: '',
        company: 'Redbytes Software',
        role: 'Backend Developer',
        duration: '8 months',
        subProjects: [
            {
                name: 'Web Application Cost Calculator',
                description: 'An interactive tool allowing users to estimate web application development costs based on selected features, platforms, and other parameters.',
                link: 'https://www.webapplicationdevelopmentcost.com/web-app-cost-calculator/'
            },
            {
                name: 'Mobile App Cost Calculator',
                description: 'Similar to the web calculator, this tool provided cost estimations for mobile app development, accommodating various platforms and functionalities.',
                link: 'https://www.mobileappdevelopmentcost.com/Calculator/Domain/?utm_source=MADC_LP&utm_medium=Hero_button&utm_campaign=Lead_gen'
            },
            {
                name: 'Hire Web App Developer Cost Estimator',
                description: 'A platform enabling clients to estimate the cost of hiring web application developers, considering factors like skill sets, experience, and project duration.',
                link: 'https://www.webapplicationdevelopmentcost.com/hire-web-app-developer-cost/'
            },
            {
                name: 'Test Cost Calculator',
                description: 'An application allowing users to estimate software testing costs by selecting domains, testing types, and other relevant parameters.',
                link: 'https://www.testreveal.com/test-cost-calculator/step1/'
            },
            {
                name: 'Mobile Test Cost Calculator',
                description: 'An application allowing users to estimate software testing costs by selecting domains, testing types, and other relevant parameters.',
                link: 'https://www.testbytes.net/mobile-app-testing/'
            },
            {
                name: 'Security Testing Services',
                description: 'A dedicated service for conducting security assessments of applications, identifying vulnerabilities, and ensuring compliance with industry standards.',
                link: 'https://www.testbytes.net/software-testing-services/security-testing-services/'
            },
            {
                name: 'Hire a Tester Platform',
                description: 'A hiring module enabling clients to recruit professional testers based on project requirements, domain expertise, and testing needs.',
                link: 'https://www.testbytes.net/hire-a-tester/'
            }

        ]
    },
    {
        id: 'tms',
        title: 'Transport Management System - UAE & Qatar',
        description: 'Vehicle Tracking and Fleet Management System for Qatar and UAE',
        longDescription: `At Redbytes Software, I was responsible for developing and integrating backend services for vehicle tracking and fleet management platforms, specifically focusing on the demo modules and subscription pricing calculators for:

Vehicle Tracking System Qatar

Fleet Management UAE`,
        techStack: ['Node.js', 'Express', 'JWT', 'REST APIs', 'Socket.io', 'PostgreSQL', 'Twilio', 'TextLocal', 'Sendgrid', 'PM2', 'SSH'],
        features: [
            'User Authentication: Implemented a secure OTP-based authentication system to verify users before granting access to the demo sections.',
            "Real-Time Demo Navigation: Utilized WebSockets to enable real-time navigation through demo content, allowing users to experience both manual (via 'Next' and 'Previous' controls) and automatic transitions.",
            'Dynamic URL Handling: Developed backend logic to serve static demo URLs dynamically based on user interactions, ensuring a seamless and interactive demo experience.',
            'API Development: Created robust APIs to support dynamic subscription pricing calculations, accommodating various plans such as contract-based, non-contract-based, and mobile-based solutions.',
            'Integration with Frontend: Ensured seamless integration of the pricing calculator APIs with the frontend interfaces, providing users with instant and accurate pricing information based on their selections.'
        ],
        achievement: 'Tracks 500+ vehicles in real-time',
        challenges: [
            'Users needed access to product demos without going through full registration, but security was still essential to avoid misuse.',
            'The system needed to support both manual navigation (Next/Previous) and automatic flow through demo slides in real time.',
            'Each demo slide was a static URL that had to be served in sequence, based on user interactions.',
            'The same demo engine needed to be reused for two different platforms (Qatar and UAE versions).',
            'Different pricing plans (contract-based, non-contract, mobile-only) with variable durations and service combinations required dynamic calculation.',
            'Frequent updates and real-time traffic required robust deployment and monitoring.'
        ],
        solutions: [
            'Implemented an OTP-based authentication system, which verified users through their mobile numbers before granting access to the demo. This allowed secure and quick entry without requiring full account creation.',
            `Used Socket.io for real-time communication, pushing URLs dynamically to the client-side based on user actions or timers.
      Developed APIs for manual navigation that worked seamlessly alongside the automatic socket-based flow.`,
            `Built a backend service that mapped each demo state to a static URL and served it dynamically using API or sockets.
      Ensured synchronization across manual and auto modes using a shared state management logic.
      `,
            `Developed modular and reusable API services, where configurations (e.g., URL sets, branding) could be passed based on domain or subdomain logic.`,
            `Created a flexible pricing calculator API that processed user selections and returned computed pricing.
      Ensured data validation and logic abstraction to support new plans easily in the future.`,
            `Used PM2 for process management and logs.
      Deployed on cloud infrastructure (AWS or DigitalOcean) with health checks and basic scaling.
      `,
        ],
        images: [
            vehicleTrackingImage,
            fleetmngImage,
            vtdemosImage,
            vtpricingImage,
            fmpricingImage,
            // Add more images here
        ],
        githubUrl: 'https://github.com/yourusername/vehicle-tracking',
        //liveUrl: 'https://vehicletracking.qa',
        company: 'Redbytes Software',
        role: 'Backend Developer',
        duration: '6 months',
        subProjects: [
            {
                name: 'Vehicle Tracking - Pricing Calculator',
                description: 'It provides detailed pricing plans for GPS vehicle tracking services, allowing potential customers to compare packages and choose the one that fits their needs.',
                link: 'https://www.vehicletracking.qa/pricing-page/'
            },
            {
                name: 'Vehicle Tracking - Free Demo',
                description: 'The “Free Demo” section lets users request a demo of the vehicle tracking system, encouraging them to try the service before committing.',
                link: 'https://www.vehicletracking.qa/'
            },
            {
                name: 'Fleetmanagement - Pricing Calculator',
                description: 'Outlines various pricing plans for fleet management services, helping businesses compare features and choose the best option for their operations.',
                link: 'https://www.fleetmanagement.ae/subscription-plans/'
            },
            {
                name: 'Fleetmanagement - Free Demo',
                description: 'It showcases solutions for managing fleets. The “Free Demo” section allows visitors to request a trial/demo to explore the platform’s features for fleet optimization.',
                link: 'https://www.fleetmanagement.ae/'
            }
        ]
    },
    {
        id: 'deeniyat',
        title: 'Deeniyat Plus & Self Learning - Islamic Education Platform',
        description: 'Vehicle Tracking and Fleet Management System for Qatar and UAE',
        longDescription: `At Redbytes Software, I was instrumental in developing and maintaining the backend services for the Deeniyat Plus and Deen Learning platforms. These applications, available on the Google Play Store and App Store, are designed to provide structured Islamic education through organized maktabs and self-paced learning modules.`,
        techStack: ['Node.js', 'Express', 'JWT', 'REST APIs', 'PostgreSQL', 'PM2', 'SSH', 'AWS'],
        features: [
            'Developed RESTful APIs to support functionalities such as user management, content delivery, and progress tracking.',
            "Ensured seamless integration between the admin panels and mobile applications, facilitating efficient content updates and user management.",
            'Optimized PostgreSQL queries to enhance performance, reduce latency, and ensure scalability as user engagement grew.',
            'Implemented indexing and query optimization techniques to handle complex data retrieval operations efficiently.',
            'Deployed backend services on client servers, ensuring high availability and reliability.',
            'Managed server configurations, performed routine maintenance, and implemented monitoring tools to proactively address potential issues.',
            'Implemented robust authentication and authorization mechanisms to protect sensitive user data.',
            'Ensured compliance with data protection standards and best practices to maintain user trust and platform integrity.'
        ],
        achievement: 'Tracks 500+ vehicles in real-time',
        challenges: [
            'The platform needed to support a wide range of Islamic learning modules (Quran, Hadith, Namaz, Duas) across multiple grades, which were frequently updated via the admin panel.',
            'As user activity increased, certain data-heavy operations (e.g., progress tracking, bulk content fetching) caused slowdowns.',
            'Needed to allow easy onboarding for young users while maintaining security.',
            'Admins needed the ability to create/update content from the panel and see it instantly reflected on the app.',
            'Deployment had to be done on the client’s own infrastructure with limited documentation and access.',
            'Islamic content involved complex data formats (e.g., Arabic scripts, audio recitations, Ayah-based indexing).',
            'Admins needed insight into student activity, progress, and usage patterns.',


        ],
        solutions: [
            `Designed modular APIs to fetch categorized content based on user level, subject, and lesson type.
      Implemented versioning to allow admin-controlled content updates without breaking the app structure.`,
            `Optimized SQL queries using joins, indexes, and pagination.
      Used query planners and execution time analysis to pinpoint and resolve performance issues.`,
            `Implemented JWT-based token authentication with simple login for students and more granular role-based access for admins.
      Created token refresh mechanisms and limited session expiry to maintain app security.`,
            `Developed synchronized APIs between the admin panel and mobile app.
      Added content version tracking to handle updates efficiently on both sides without requiring app updates.`,
            `Set up environment variables, PM2 process manager, and custom deployment scripts.
      Used SSH-based remote access, log monitoring, and database backups to maintain the server and application.`,
            `Built flexible schemas to handle Arabic, Urdu, and English translations.
      Used Unicode-safe query handling and file streaming for efficient access to audio content.`,
            `Added dashboard APIs for user progress summaries, lesson completion rates, and login patterns.
      Used pre-aggregated data and caching to improve performance for reporting endpoints.`,
        ],
        images: [
            deeniyatplusImage,
            deeniyatplusformImage,
            deeniyatslImage,
            // Add more images here
        ],
        githubUrl: 'https://github.com/yourusername/vehicle-tracking',
        //liveUrl: 'https://vehicletracking.qa',
        company: 'Redbytes Software',
        role: 'Backend Developer',
        duration: '6 months',
        subProjects: [
            {
                name: 'Deeniyat Plus – Islamic Learning App for Students',
                description: 'A comprehensive mobile app offering structured Islamic education including Quran, Hadith, Dua, and Namaz modules for different student levels. Used in madrasas and homes to help students learn at their own pace with audio, video, and interactive lessons.',
                link: 'https://play.google.com/store/apps/details?id=com.hl.deeniyat.deeniyatmaktab'
            },
            {
                name: 'Deen Learning – Self-paced Islamic Education App',
                description: 'An intuitive Islamic self-learning app offering bite-sized, trackable lessons and activities for learners of all ages. Designed for independent learning with admin-controlled content and user progress monitoring.',
                link: 'https://play.google.com/store/apps/details?id=com.deeniyat.deenlearning&hl=en_IN'
            },
        ]
    },
    {
        id: 'animalapp',
        title: 'Animal Application',
        description: 'Animal Application this application is very complex app and contains the sub applications based on services like customerApp, verternaryApp, AmbulanceApp, PharmacyApp etc.',
        longDescription: `The Animal Application is a comprehensive healthcare ecosystem built to support pet owners and service providers. It consists of multiple interconnected sub-apps like CustomerApp, VeterinaryApp, AmbulanceApp, and PharmacyApp, each tailored to a specific role in the pet care workflow. The platform enables users to book veterinary appointments, manage prescriptions, request ambulance services, and order pet medicines online.`,
        techStack: ['Node.js', 'Express', 'PostgreSQL', 'AWS EC2', 'AWS S3', 'GitLab', 'Postman', 'SMS TextLocal'],
        features: [
            'Developed core CustomerApp APIs for modules like profile management (with S3 image upload), appointments, orders, and prescriptions.',
            'Designed and implemented the subscription management system, handling tiered services and payment workflows.',
            'Led a backend team for complex module deliveries, ensuring task distribution, code reviews, and quality assurance.',
            'Managed Git workflows, branch strategies, and handled CI/CD deployments on AWS EC2 servers.',
            'Optimized PostgreSQL queries for high-traffic modules and ensured database scalability and performance.',
            'Integrated SMS notification flows and secure file handling for user data and prescription sharing.',
        ],
        achievement: 'Tracks 500+ vehicles in real-time',
        challenges: [
            'Complex Role-Based Modular Design',
            'Secure and Fast File Uploads (Profile Pics, Prescriptions)',
            'Subscription Logic and Tiered Service Management',
            'Real-Time Notifications for Appointments and Orders',
            'Codebase & Team Management',
        ],
        solutions: [
            'Designed APIs with scalable route and middleware separation to cleanly handle roles like customers, vets, ambulances, and pharmacies.',
            'Integrated AWS S3 using signed URLs and handled secure client uploads with token-based auth checks.',
            'Created modular plans and billing logic with flexible renewal and expiry systems, tested thoroughly with edge cases (paused, expired, renew).',
            'Implemented SMS workflow with event triggers on appointment confirmations, order dispatches, and subscription updates.',
            'Used Git branching and pull request workflows; conducted code reviews and regular syncs on task progress using Slack & GitLab issues.'
        ],
        images: [
            animalappImage,
            animalappaccImage,
            veterinaryappImage,
            pharmacyappImage,
        ],
        githubUrl: 'https://github.com/yourusername/vehicle-tracking',
        //liveUrl: 'https://vehicletracking.qa',
        company: 'Redbytes Software',
        role: 'Backend Developer | Team Coordinator',
        duration: '6 months',
        subProjects: [
            {
                name: 'Animal Application - Old Landing Page',
                description: 'The landing page of the Animal Application, providing an overview of the services and features offered.',
                link: 'https://animalsapp.in/'
            },
            {
                name: 'Animal Application - New User Registration',
                description: 'The new user registration page for the Animal Application, allowing users to create accounts and access services.',
                link: 'https://theanimalsapp.com/'
            },
            {
                name: 'Animal Application - Mobile App',
                description: 'The mobile application for the Animal Application, providing users with access to all services on their smartphones.',
                link: 'https://play.google.com/store/apps/details?id=com.animal.customer'
            },
        ]
    },
    {
        id: 'mhf',
        title: 'Mujtaba Helping Foundation – Admin Portal Enhancement',
        description: 'Social Service Admin Portal for the Mujtaba Helping Foundation',
        longDescription: `At Tekisky, I contributed to enhancing and extending the Mujtaba Helping Foundation's MERN-based admin portal (built with React class components). The project focused on managing members, health records, surveys, and event communications for the foundation's social outreach.
    Assigned tasks to the team via Slack, tracked progress, and ensured timely delivery.
    Maintained daily updates with the Project Manager, and personally handled key development features and client-requested customizations.
    `,
        techStack: ['Node.js', 'Express', 'React (Class Components)', 'MongoDB', 'jsPDF', 'ExcelJS', 'Firebase', 'WhatsApp Web API'],
        features: [
            'Membership Card Download using jsPDF for generating printable digital cards.',
            "Daily, Weekly, and Monthly Membership Reports",
            'Expiring/Expired Membership tracking (1–4 week filters)',
            'Enabled PDF & Excel report exports for admin analysis.',
            'Integrated WhatsApp sharing features for fast communication.',
            'Implemented push notifications for upcoming events.',
            'Added modules to manage Health Records and Surveys.',
        ],
        achievement: 'Tracks 500+ vehicles in real-time',
        challenges: [
            'The client required downloadable membership cards with real-time data and styling consistent across browsers.',
            'Daily, weekly, and monthly membership reports needed accurate time-based filtering and performance handling as records scaled.',
            'Admins required the same report data to be exportable in both PDF and Excel formats with proper formatting.',
            'Needed a way to share member details or events through WhatsApp with pre-filled content.',
            'Users/admins needed to be notified about upcoming events or changes.',
            'Multiple developers needed clear roles and deliverable tracking to avoid overlap or delay.',
            'Survey and health modules required sensitive data handling and structured storage.',


        ],
        solutions: [
            `Used jsPDF to dynamically render card details (name, ID, expiry date, etc.) with custom layouts and branding.
      Handled edge cases like image/logo rendering and font embedding for consistent output.`,
            `Implemented MongoDB date aggregation queries with optimized indexes.
      Created reusable utility functions to calculate and fetch report ranges efficiently.`,
            `Used jsPDF for PDF generation and ExcelJS for Excel export with headers, cell formatting, and dynamic rows.
      Created a unified data processing layer to feed both export modules.`,
            `Integrated WhatsApp Web Share API with pre-defined templates and data placeholders.
      Ensured cross-device compatibility (desktop/mobile).`,
            `Used Firebase Cloud Messaging (FCM) to send push notifications from the backend.
      Created a notification management module in the admin panel for scheduling and targeting.`,
            `Managed task distribution via Slack with shared documents and clear deadlines.
      Gave daily updates to the Project Manager and conducted peer reviews for quality assurance.`,
            `Designed flexible schemas for survey questions and health data.
       Applied field-level validation and ensured restricted access using role-based authorization.`

        ],
        images: [
            mhfglobalImage,
            mhfadminImage
            // Add more images here
        ],
        githubUrl: 'https://github.com/yourusername/vehicle-tracking',
        //liveUrl: 'https://vehicletracking.qa',
        company: 'Tekisky Pvt. Ltd.',
        role: 'Full Stack Developer | Team Coordinator',
        duration: '6 months',
        subProjects: [
            {
                name: 'Mujtaba Helping Foundation – Social Welfare Platform',
                description: 'A member-focused welfare management system for a non-profit organization, supporting features like membership card downloads, health record tracking, event notifications, surveys, and real-time reports.',
                link: 'https://mhfglobal.com/'
            },
            {
                name: 'Mujtaba Helping Foundation – Mobile App',
                description: 'A community service app designed to help users access their membership details, health records, event updates, and participate in surveys. The app also enables users to download their membership cards, receive push notifications for important events, and stay connected with the foundation’s initiatives in real-time.',
                link: 'https://play.google.com/store/apps/details?id=com.mhf.app&hl=en_IN'
            },
        ]
    },
];

export default projects;