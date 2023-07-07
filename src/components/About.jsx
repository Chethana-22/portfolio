import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
       I'm a motivated software engineer dedicated to advancing technical skills and closing the gap between academia
and industry. Committed to self-paced learning and completion of technical courses to stay up-to-date with
the latest trends and technologies. Have a strong background in engineering coupled with a solid
understanding of management and administration, enabling effective collaboration and successful project
execution.

        </p>

        <br />

      </div>
    </div>
  );
};

export default About;