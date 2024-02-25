Project Documentation
Overview
This project aimed to create a portfolio website using React.js and Tailwind CSS. The website consists of four main sections: Home, About Me, Projects, and Contact. Each section is represented by a separate page with its own content.

Decisions Made
Choice of Technologies:

React.js: Chosen for its component-based architecture, which facilitates building reusable UI components and managing complex state efficiently.


Directory Structure:

Organized the project into directories for better modularity and maintainability:
src/pages: Contains individual page components (e.g., Home.js, About.js, etc.).
src/styles: Holds CSS files for styling, including tailwind.css and custom.css.


Routing:

Implemented client-side routing using React Router DOM to navigate between different pages in the application.
Defined routes for each page component in the App.js file.


Styling:

Used Tailwind CSS utility classes for styling components, providing a consistent and responsive design across all pages.
Created custom utility classes in a separate CSS file (custom.css) to extend Tailwind's capabilities and abstract repetitive styles.


Challenges Faced
Integrating Tailwind CSS with React:

Initial setup and configuration of Tailwind CSS within a React project posed challenges, especially when trying to import Tailwind classes directly into JSX components.
Implementing React Router:

Understanding the concepts of client-side routing and setting up routes for different pages using React Router DOM required careful consideration and learning.


React Router Implementation:

Referenced React Router DOM documentation and examples to set up routes for each page component in the App.js file.
Utilized <Route> and <Switch> components to define routes and handle navigation within the application.


Conclusion
Overall, the project successfully achieved its objectives of creating a portfolio website using React.js and Tailwind CSS. By leveraging the chosen technologies and overcoming challenges through research and experimentation, a functional and aesthetically pleasing website was developed.