import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

const services = [
  {
    icon: <FaCocktail />,
    title: "The strongest FaCocktail",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quas.",
  },
  {
    icon: <FaHiking />,
    title: "The strongest FaHiking",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quas.",
  },
  {
    icon: <FaShuttleVan />,
    title: "The strongest FaShuttleVan",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quas.",
  },
  {
    icon: <FaBeer />,
    title: "The strongest Beer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quas.",
  },
];

const Services = () => {
  return (
    <div className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map(({ icon, title, info }, index) => (
          <article key={index} className="services">
            <span>{icon}</span>
            <h6>{title}</h6>
            <p>{info}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Services;
