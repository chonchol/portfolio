"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      id: "01",
      title: "Web Application Developer",
      company: "Health and Education for All (HAEFA)",
      duration: "February 2021 - Present",
      description:
        "As a Web Application Developer, I built scalable EMR and HRM systems using Laravel, JavaScript, and jQuery, streamlining workflows and improving data accuracy by 10%. I integrated Google Cloud, Metabase, and Looker Studio for advanced analytics, enhancing decision-making speed by 25%. Additionally, I revamped organizational websites using WordPress and Elementor, increasing user engagement by 30%.",
    },
    {
      id: "02",
      title: "Fronend Developer",
      company: "Upwork",
      duration: "March 2017 - Present",
      description:
        "I've successfully delivered 60+ projects to satisfied clients, earning positive feedback for my quality work and timely deliveries.",
    },
    {
      id: "03",
      title: "Junior Web Developer",
      company: "Information Tools Ltd, Bangladesh",
      duration: "August 2017 - December 2021",
      description:
        "Implemented and deployed e-recruitment portal using front-end technologies (HTML, CSS,Bootstrap, jQuery) and Laravel for back-end, streamlining the hiring process.Developed 'Notice Board', a Laravel application, using HTML, CSS, Bootstrap, Vue.js forfrontend and Laravel for backend, enhancing official notice organization.",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-10 relative"
        >
          Work Experience
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="block h-1 bg-indigo-500 mt-4 rounded-full"
          ></motion.span>
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-400"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-5 flex flex-col md:flex-row items-center justify-between relative`}
            >
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    className="w-full md:w-1/2 pr-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-black shadow-lg rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-indigo-600 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {exp.duration}
                      </p>
                      <p className="text-white text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-indigo-400 text-indigo-600 font-bold flex items-center justify-center z-10"
                  >
                    {exp.id}
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-indigo-400 text-indigo-600 font-bold flex items-center justify-center z-10"
                  >
                    {exp.id}
                  </motion.div>
                  <motion.div
                    className="w-full md:w-1/2 ml-auto pl-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-black shadow-lg rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-indigo-600 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {exp.duration}
                      </p>
                      <p className="text-white text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
