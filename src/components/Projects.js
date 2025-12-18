const Projects = () => (
  <section id="projects" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
    <div className="max-w-6xl mx-auto ">
      <h2 className="text-4xl font-bold text-center mb-10 ">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 ">
        <div className=" p-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <a href="https://bringyourownform.vercel.app/">
            <h3 className="text-2xl font-bold mb-2">Bring your own form</h3>
            <p className="text-gray-700 text-white">Worked on project that allow user to manage event by bringing their own forms -- focus on clean UI , simple
              workflows and real time form handling.
              Front-end and back-end.</p></a>
        </div>

        <div className=" p-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <a href="https://illustrious-paprenjak-9a2c68.netlify.app/">
            <h3 className="text-2xl font-bold mb-2">Signature App</h3>
            <p className="text-gray-700 text-white">Signature App used to make Signature and download Signature easily online without using any login.</p></a>
        </div>
                <div className=" p-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <a href="https://illustrious-paprenjak-9a2c68.netlify.app/">
            <h3 className="text-2xl font-bold mb-2">Signature App</h3>
            <p className="text-gray-700 text-white">Signature App used to make Signature and download Signature easily online without using any login.</p></a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;


