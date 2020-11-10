import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocatils",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo.",
      },
      {
        icon: <FaHiking />,
        title: "Free Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shittle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo.",
      },
      {
        icon: <FaBeer />,
        title: "Best Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
