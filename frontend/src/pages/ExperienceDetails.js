import { useState, useEffect } from "react";

const Experiences = ({ experience }) => {
  return (
    <div class=" absolute right-80 top-2 p-8 md:w-32 lg:w-48 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ experience.title }</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
  );
};

const ExperienceDetails = () => {
  const [experiences, setExperiences] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await fetch("/api/experiences");
      const json = await response.json();

      if (response.ok) {
        setExperiences(json);
        console.log("check");
        console.log(experiences);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className="experiences">
      {experiences &&
        experiences.map((experience) => (
          <Experiences experience={experience} key={experience._id} />
        ))}
    </div>
  );
};

export default ExperienceDetails;
