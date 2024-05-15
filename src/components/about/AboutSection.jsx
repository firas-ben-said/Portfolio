"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 columns-3">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>NodeJs</li>
        <li>ReactJs</li>
        <li>Back End</li>
        <li>ExpressJs</li>
        <li>NextJs</li>
        <li>Django</li>
        <li>Python</li>
        <li>C</li>
        <li>Linux</li>
        <li>Git</li>
        <li>Software Testing / ISTQB</li>
        <li>NoSQL/SQL</li>
        <li>Agile Methodology</li>
        <li>UML conception software engineering</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>
          Double degree at Horizon School of Digital Technologies & Beijing
          University of Technology
        </li>
        <li className="font-bold">Software Engineering</li>
        <li className="opacity-30">2022 - Present</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Meta Back-End Development - <strong>Meta</strong>{" "}
          <span className="opacity-30">(sep 2023)</span>
        </li>
        <li>
          React Basics - <strong>Meta</strong>{" "}
          <span className="opacity-30">(Apr 2024)</span>
        </li>
        <li>
          Building RESTful APIs with Node.js and Express -{" "}
          <strong>Board Infinity</strong>
          <span className="opacity-30"> (Mar 2024)</span>
        </li>
        <li>
          Java Testing Specialization - <strong>Learn Quest</strong>{" "}
          <span className="opacity-30">(Mai 2024)</span>
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
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About Image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a former physiotherapist with nearly a year of hands-on
            experience, I've decided to make a career change to software
            engineering. Currently in my second year of study pursuing a double
            degree with Beijing University of Technology, I bring a strong
            passion for technology and software development, with a keen
            interest in backend development. My academic journey has provided me
            with a solid foundation in software engineering principles.
          </p>
          <div className="flex flex-row mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
