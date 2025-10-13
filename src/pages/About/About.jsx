import React from 'react';
import about from "../../assets/about.png";
import Container from "../../components/Container/Container";

const About = () => {
    return (
      <Container>
        <div className="min-h-screen flex flex-col justify-center items-center gap-10">
          <img
            src={about}
            alt="Wait Please"
            className="animate-bounce bg-transparent w-[300px] h-[200px]"
          />

          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              Hold on... 🕒
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              I haven’t created the{" "}
              <span className="font-semibold">About Page</span> yet 😅
            </p>
            <p className="text-md text-gray-600">
              But don’t worry — I’m working on it! 💪
              <br />
              Stay tuned and have a little patience, please 🩵
            </p>
          </div>
        </div>
      </Container>
    );
};

export default About;