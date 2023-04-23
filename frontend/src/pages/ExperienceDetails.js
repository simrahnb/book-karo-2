import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Experiences = ({ experience }) => {

    var type = 0 
    var setup = 0
    var fee = 0

    if (experience.type === false) {
        type = "Public"
    }
    else {
        type = "Private"
    }

    if (experience.priceSetup === false) {
        setup = "Paid"
    }
    else {
        setup = "Free"
    }

    if (experience.serviceFee === false) {
        fee = "Pass fee to guest"
    }
    else {
        fee = "Cover service fee"
    }

  return (
    <div class=" absolute right-80 top-2 p-8 md:w-32 lg:w-48 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ experience.title }</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
        <ul>
            <li>{experience.subtitle}</li>
            <li>{experience.description}</li>
            <li>{type}</li>
            <li>{experience.totalSpots}</li>
            <li>{experience.length}</li>
            <li>{experience.schedule}</li>
            <li>{experience.location}</li>
            <li>{setup}</li>
            <li>{experience.currency}</li>
            <li>{fee}</li>
        </ul>
    </p>
    </div>
  );
};

const ExperienceDetails = () => {
  const [experiences, setExperiences] = useState(null);
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await fetch("/api/experiences");
      const json = await response.json();

      if (response.ok) {
        setExperiences(json);
      }
    };

    if (user) {
    fetchExperiences();
    }
  }, [user]);

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
