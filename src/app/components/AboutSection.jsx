"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJS, JavaScript, jQuery, VueJS </li>
        <li>PHP, Laravel, WordPress</li>
        <li>HTML5 & CSS3</li>
        <li>Bootstrap, TailwindCSS, SASS, SCSS</li>
        <li>AJAX, JSON, XML, REST API</li>
        <li>SQL, MSSQL, Google Firebase and MySQL</li>
        <li>Unbounce, Squarespace, Wix Scripting</li>
        <li>Google Lookers Studio, Metabase</li>
        <li>Slack, Jira, Asana, Trello, Postman, Figma, Photoshop</li>
        <li>Version Control: GIT & SVN (GitHub, GitLab, Bitbucket)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Msc in ICT, Bangladesh University of Professionals (BUP)</li>
        <li>BSc in Physics, Shahjalal University of Science and Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://www.linkedin.com/learning/certificates/549ae9fea2b5ab989198b8ffd564a8f503b207ecb9c15002d6ed51e17b9ca70f">
            Learning ECMAScript 6+ (ES6+)
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/learning/certificates/71f4349375b6c5867256f5c2ceac3799f06dfb78ddac4237b386350ab93c9fe2">
            Learning REST APIs
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, ReactJS, PHP, Laravel, WordPress, SQL,
            MSSQL, Google Firebase and MySQL, HTML, CSS, and Git. Adept at
            designing and implementing RESTful APIs, managing databases.
            Committed to creating responsive, user-focused web applications. I
            am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
