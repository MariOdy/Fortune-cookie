import React from "react";
import { Home } from "./styles";
import AnimatedStars from "react-animated-stars";
import FortuneCookie from "src/FortuneCookie";

const HomePage: React.FC = () => {
  return (
    <AnimatedStars
      bgColor="#1A1520"
      rotationSpeed={0.03}
      maxSize={3}
      starCount={300}
      starColor="#FFE7C3"
      opacity={0.8}
    >
      <Home>
        <FortuneCookie />
      </Home>
    </AnimatedStars>
  );
};

export default HomePage;
