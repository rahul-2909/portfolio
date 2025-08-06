import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 text-white">Experience</h2>

        {/* Full-Time / Project Experience */}
        {/* <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-white">Full-Time / Freelance Projects</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-gray-800">[Your Role or Project Name]</h4>
            <p className="text-sm text-gray-500 mb-2">[Company or Project] | [Duration]</p>
            <p className="text-gray-700">
              [Add a short description of your responsibilities, technologies used, or achievements.]
            </p>
          </div>
        </div> */}

        {/* Internship Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Internship</h3>
          <div className="bg-white p-6 rounded-lg shadow-md bg-gradient-to-br from-black via-gray-900 to-black">
            <h4 className="text-xl font-bold text-gray-800 text-white">Full Stack Developer Intern</h4>
            <p className="text-sm text-gray-500 mb-2 text-white">Genoa IT Solutions | June 2025 – August 2025</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-1 text-white">
              <li>Developed responsive React.js components with Tailwind CSS.</li>
              <li>Worked on backend APIs using Node.js and Express.js.</li>
              <li>Integrated MongoDB for dynamic data handling.</li>
              <li>Collaborated with the senior dev team to deploy features and fix bugs.</li>
              <li>Participated in daily stand-ups and weekly code reviews.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

