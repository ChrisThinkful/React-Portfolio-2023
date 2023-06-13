const Cases = [
  {
    id: 1,
    title:
      "Building a Full-Featured Ecommerce Application and Admin Dashboard with Next.js",
    description:
      "In this ongoing case study, I dive deep into the challenges and successes I've encountered while developing a complex, full-featured ecommerce application and its associated admin dashboard. Utilizing Next.js, I've had to navigate changes in framework versions, grapple with cloud storage systems, and constantly adapt to new problems and solutions. Follow my journey to see how I'm turning this concept into reality.",
    body: [
      {
        id: 1,
        title: "Project Overview",
        body: [
          "The project started with the idea of building an e-commerce application, which would showcase my skills as a full-stack developer. The application was designed to include typical e-commerce features such as inventory browsing, item search, adding items to a shopping cart, and making purchases. However, I wanted to take it a step further by incorporating an admin dashboard. This dashboard would allow an admin to manage the inventory, add and edit items, and select sponsored items to display on the home page.",
          "The project expanded into the development of two separate applications:",
        ],
        list: [
          "An admin dashboard for inventory management.",
          "The customer-facing e-commerce site for browsing and purchasing items.",
        ],
      },
      {
        id: 2,
        title: "Planning and Strategy",
        body: [
          "To expand my skills beyond React, JS, HTML, CSS, I chose to develop these applications using Next.js. The styling of the admin dashboard was accomplished using Tailwind CSS for a more functional, utilitarian look, while the e-commerce site employed Styled Components to accommodate a more design-heavy user interface.",
        ],
      },
      {
        id: 3,
        title: "Challenges and Solutions",
        body: [
          "The development process wasn't without its challenges. While building with Next.js, I initially relied on tutorials that had been based on previous versions of the framework. When I transitioned to Next.js 13, I found that there were significant changes in file structure and routing that weren't addressed in the older tutorials.",
          "To overcome this, I invested time in thoroughly reading the new documentation. I eventually mastered the framework's updated file and URL routing system, which allowed me to proceed with development.",
          "Another challenge arose while implementing the 'Create' and 'Update' item functionalities, which required image file uploads. Initially, I stored the images in local storage but soon realized that this wouldn't suffice for a deployed application. After some research and help from ChatGPT-4, I decided to use an Amazon S3 bucket for cloud storage. Configuring the file uploads to match the requirements of S3 was a tricky task. After a period of trial and error, I opted to use the React Dropzone library, which streamlined the process significantly. However, this challenge highlighted the need to further my knowledge of file uploads in the future.",
        ],
      },
      {
        id: 4,
        title: "Curent Progress and Next Steps - June 13, 2023",
        body: [
          "Currently, the development of the admin dashboard is in progress with the 'Create' and 'Update' item pages nearly completed. The lessons learned so far have been invaluable and will certainly contribute to the success of the e-commerce site development that follows. I'm excited to continue this journey, enhancing my skills and building an application that showcases my development abilities.",
        ],
      },
    ],
  },
  // add more cases here
];

export default Cases;
