import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsConteiner";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
      <Form />
      <Footer />
    </>
  );
};

export default Rooms;
