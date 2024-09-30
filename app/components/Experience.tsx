import React from "react";
import Title from "./common/Title";
import Accordion from "./Accordion";

const workPlaces = [
  {
    company: "Afretrade",
    role: "Frontend Mobile/Web Developer",
    timeFrame: "2024 - Current",
    work: [
      "Developed responsive Mobile e-commerce platform with over 200 users",
      "Integrated secure payment gateway for seamless and secure payments",
      "Implemented robust error handling for third-party APIs, ensuring a smooth user experience during temporary outages",
    ],
  },
  {
    company: "SRM Solutions",
    role: "Graphics  designer",
    timeFrame: "2023",
    work: [
      "Part of the team Designing Company profile",
      "Participated in reviews and provided feedback to other team members to help improve design quality and maintainability.",
      "Streamlined analysis processes by critical  & strategic documentations from Excel/Powerpoint  to other enhanced efficiency and flexibility.",
    ],
  },
  {
    company: "Nigerian Breweries",
    role: "IT Support Officer",
    timeFrame: "2019 - 2022",
    work: [
      "System upgrade, and technical support for members of all staffs.",
      "Performed website updates and maintenance, contributing to an up-to-date presence for the organization.",
      "Offered network troubleshooting assistance to staff members, ensuring minimal disruptions in daily operations.",
    ],
  },

  // Add more Experience items here
];
const Experience = () => {
  return (
    <section className="w-full">
      <Title title="Experience" />
      <div className="items-center pb-10">
        <div className=" space-y-4">
          <Accordion workPlaces={workPlaces} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
