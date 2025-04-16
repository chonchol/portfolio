"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Employee Management Application",
    description:
      "This application is provides a minimal setup for employee management app in ReactJS, tailwind css and saved data into local storage in Card and Table view.",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "//github.com/chonchol/brotecs-assignment-test",
    previewUrl: "//employee-management007.netlify.app",
  },
  {
    id: 2,
    title: "EMR Application",
    description:
      "A patient dashboard application built with Vanila JavaScript, TailwindCSS and used fake API for data.",
    image: "/images/projects/2.png",
    tag: ["All", "Frontend"],
    gitUrl: "//github.com/chonchol/patient-dashboard",
    previewUrl: "//patient-dashboard-js.netlify.app/",
  },
  {
    id: 3,
    title: "Sports Wear Ecommerce Template",
    description:
      "A modern sports wear ecommerce template built with HTML, CSS, TailwindCSS",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "//sportswear-ecom.netlify.app/",
  },
  {
    id: 4,
    title: "Ecommerce Template",
    description:
      "A modern ecommerce template built with HTML, CSS, TailwindCSS",
    image: "/images/projects/4.png",
    tag: ["All", "Backend"],
    gitUrl: "/",
    previewUrl: "//ecommerce-tailwind1.netlify.app/",
  },
  {
    id: 5,
    title: "VueJS Shop Template",
    description:
      "A VueJs shop template built with VueJS, TailwindCSS. It has multi filtering and sorting functionality.",
    image: "/images/projects/5.png",
    tag: ["All", "Frontend"],
    gitUrl: "//github.com/chonchol/vue-filtering-sorting",
    previewUrl: "//vue-shoppage.netlify.app/",
  },
  {
    id: 6,
    title: "Weather App with VueJS",
    description:
      "A simple weather app built with VueJS, TailwindCSS and OpenWeather API.",
    image: "/images/projects/6.png",
    tag: ["All", "Frontend"],
    gitUrl: "//github.com/chonchol/weather-app",
    previewUrl: "//vue-weather-app1.netlify.app/",
  },
  {
    id: 7,
    title: "Online Course Website with WordPress",
    description: "Build this website with custom template and Elementor plugin",
    image: "/images/projects/7.png",
    tag: ["All", "Frontend", "Backend"],
    gitUrl: "/",
    previewUrl: "//myuxacademy.com/",
  },
  {
    id: 8,
    title: "UTAC - Electronic Part selling Website",
    description:
      "Developed this website with HTML and SCSS from adobe XD. Lately it convert to the WordPress theme.",
    image: "/images/projects/8.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "//utac.atlastestsite.xyz",
  },
  {
    id: 9,
    title: "Agency website with WordPress",
    description:
      "An agency website which is build with custom template and Elementor plugin",
    image: "/images/projects/9.png",
    tag: ["All", "Frontend", "Backend"],
    gitUrl: "/",
    previewUrl: "//cheetahconversions.com/",
  },
  {
    id: 10,
    title: "Deepfashion - Image generation application",
    description:
      "This was an image generation application which transfer garment images to on-model photos",
    image: "/images/projects/10.png",
    tag: ["All", "Frontend", "Backend"],
    gitUrl: "/",
    previewUrl: "//deepfashion.netlify.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [visibleCount, setVisisbleCount] = useState(6);
  const increment = 1;

  const showMore = () => {
    setVisisbleCount((prev) => prev + increment);
  };

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
    <section id="projects" className="py-8 md:py-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <p className="w-full md:w-1/2 text-center text-white mt-4 mb-8 md:mb-12 mx-auto">
        I have added only one page for some project here to show case it in this
        section as i can not show all because of privacy and policy
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.slice(0, visibleCount).map((project, index) => (
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
      {visibleCount < projectsData.length && (
        <motion.div
          className="flex flex-col items-center justify-center my-16 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="w-full md:w-1/2 bg-indigo-100 text-indigo-600 rounded-full py-3 text-sm leading-5"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={showMore}
          >
            Show more
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
