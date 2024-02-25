import { React } from "react";


export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projectsDiv">
        {/* i tried to use the tailwindCSS .. */}
        <h1 className="ProjectsH">Projects</h1>
        <h1 className="text-lg text-center mb-4">This is the Projects section</h1>
        <p className="textp2">Check out some of my featured projects below:</p>
        <div className="Projects">
          <ProjectCard title="E-commerce Website" description="Explore the latest in technology with TechTrends! Shop for cutting-edge gadgets, stylish accessories, and must-have electronics. Whether you're a tech enthusiast or a casual shopper, find everything you need right here." />
          <ProjectCard title=" Portfolio Website" description="Welcome to CreativeWorks, where creativity knows no bounds! Browse through a curated collection of stunning designs, captivating artworks, and innovative projects. Whether you're an artist, designer, or simply seeking inspiration, let your imagination soar with CreativeWorks." />
          <ProjectCard title="Educational Platform" description="At LearnHub, we believe in the transformative power of education. Dive into a world of knowledge with our comprehensive learning platform. From interactive courses and engaging tutorials to expert-led workshops, embark on a journey of discovery and mastery with LearnHub." />
        </div>
      </div>
    </section>
  );
}
function ProjectCard({ title, description }) {
  return (
    <div className="div2">
      <h2 className="title">{title}</h2>
      <p className="desc">{description}</p>
    </div>
  );
}

export default Projects;

