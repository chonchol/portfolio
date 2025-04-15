export default function ExperienceSection() {
  const experiences = [
    {
      id: "01",
      title: "Web Application Developer",
      company: "Health and Education for All (HAEFA)",
      duration: "February 2021 - Present",
      description:
        "As a Web Application Developer, I built scalable EMR and HRM systems using Laravel, JavaScript, and jQuery, streamlining workflows and improving data accuracy by 10%. I integrated Google Cloud, Metabase, and Looker Studio for advanced analytics, enhancing decision-making speed by 25%. Additionally, I revamped organizational websites using WordPress and Elementor, increasing user engagement by 30%.",
    },
    {
      id: "02",
      title: "Fronend Developer",
      company: "Upwork",
      duration: "March 2017 - Present",
      description:
        "I've successfully delivered 60+ projects to satisfied clients, earning positive feedback for my quality work and timely deliveries.",
    },
    {
      id: "03",
      title: "Junior Web Developer",
      company: "Information Tools Ltd, Bangladesh",
      duration: "August 2017 - December 2021",
      description:
        "Implemented and deployed e-recruitment portal using front-end technologies (HTML, CSS,Bootstrap, jQuery) and Laravel for back-end, streamlining the hiring process.Developed 'Notice Board', a Laravel application, using HTML, CSS, Bootstrap, Vue.js forfrontend and Laravel for backend, enhancing official notice organization.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-4 relative">
          Work Experience
          <span className="block w-16 h-1 bg-primary-500 mt-2 rounded-full"></span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-primary-400"></div>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-16 flex flex-col md:flex-row items-center justify-between transition-all duration-700 ease-out opacity-0 animate-fade-in-up relative`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-full md:w-1/2 pr-8">
                    <div className="bg-white shadow-lg rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {exp.duration}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary-400 text-primary-600 font-bold flex items-center justify-center z-10">
                    {exp.id}
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary-400 text-primary-600 font-bold flex items-center justify-center z-10">
                    {exp.id}
                  </div>
                  <div className="w-full md:w-1/2 ml-auto pl-8">
                    <div className="bg-white shadow-lg rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {exp.duration}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
