"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "This is my portfolio website",
    img: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/firas-ben-said/Portfolio",
    previewUrl: "https://firasbensaid.netlify.app",
  },
  {
    id: 2,
    title: "Association Management App",
    description: "This is my Association Management App",
    img: "/images/project1.png",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/firas-ben-said/association-agile-v3",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "This is my admin panel",
    img: "/images/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/firas-ben-said/dashboard-admin",
    previewUrl: "/",
  }, 
  {
    id: 4,
    title: "E-commerce Website",
    description: "This is my e-commerce website",
    img: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(selectedTag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-5">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={selectedTag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={selectedTag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={selectedTag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((data, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <ProjectCard
              key={data.id}
              title={data.title}
              description={data.description}
              imgUrl={data.img || "/images/noImage.png"}
              gitUrl={data.gitUrl}
              previewUrl={data.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
