import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I’m <span className="text-blue-400">Rohit Rahul</span>
        </h1>
        <p className="text-lg md:text-2xl font-medium">
          Full Stack Web Developer
        </p>
      </div>
    </section>
  );
};

export default Home;
