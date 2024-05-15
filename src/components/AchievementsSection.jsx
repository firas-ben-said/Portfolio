"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const Achievements = [
  {
    title: "Projects",
    count: "2",
    postfix: "+",
  },
  {
    title: "Clients",
    count: "1",
  },
  {
    title: "Certifications",
    count: "5",
    postfix: "+",
  },
  {
    title: "Years",
    count: "2",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {Achievements.map((achievment, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              <AnimatedNumbers 
                includeComma
                animateToNumber={parseInt(achievment.count)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => {
                  return {
                    mass: 1,
                    friction: 100,
                    tension: 100,
                  };
                }}
              />
              {achievment.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievment.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
