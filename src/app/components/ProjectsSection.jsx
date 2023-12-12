"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Tools I used: React, TailwindCSS, Nextjs, Resend.",
    image: "/images/projects/1.png",
    tag: ["All", "JavaScript"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Developer's Blog Website",
    description:
      "Responsive Blog App with pagination using Contentlayer and Supabase.",
    image: "/images/projects/2.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/hoangglong-nguyen/devs-blog-app",
    previewUrl: "https://devs-blog-app-hoang-long-nguyens-projects.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Web App Flowmazon",
    description:
      "E-commerce Web App with anonymous shopping cart and Google authentication.",
    image: "/images/projects/3.png",
    tag: ["All", "TypeScript"],
    gitUrl: "https://github.com/hoangglong-nguyen/nextjs-ecommerce-app",
    previewUrl:
      "https://nextjs-ecommerce-app-hoang-long-nguyens-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Instagram Clone App Snapgram",
    description: "Interactive social media app using Appwrite.",
    image: "/images/projects/4.png",
    tag: ["All", "TypeScript"],
    gitUrl: "https://github.com/hoangglong-nguyen/snapgram-app",
    previewUrl: "https://snapgram-app-hoang-long-nguyens-projects.vercel.app/",
  },
  {
    id: 5,
    title: "Messenger Clone App",
    description: "Google and Github Authentication, Live messaging with Pusher",
    image: "/images/projects/5.png",
    tag: ["All", "TypeScript"],
    gitUrl: "https://github.com/hoangglong-nguyen/nextjs-messenger-clone-app",
    previewUrl:
      "https://nextjs-messenger-clone-app-hoang-long-nguyens-projects.vercel.app/",
  },
  {
    id: 6,
    title: "Ticketing App",
    description: "Simple CRUD Ticketing App using nextjs, MongoDB, TailwindCSS",
    image: "/images/projects/6.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/hoangglong-nguyen/nextjs-ticketing-app",
    previewUrl:
      "https://nextjs-ticketing-app-hoang-long-nguyens-projects.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="TypeScript"
          isSelected={tag === "TypeScript"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
