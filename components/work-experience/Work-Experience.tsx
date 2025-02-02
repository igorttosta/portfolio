"use client";

import ExperienceCard from "./ExperienceCard";
import experiences from "../../json/experiences.json";
import Typography from "@mui/material/Typography";

const WorkExperience = () => {
    return (
        <section className="w-full mx-auto px-8 md:px-10 lg:px-20 xl:px-32 pt-12 pb-20 dark:bg-gray-900">
            <div className="mb-6">
                <Typography variant="h5" className="text-primary">
                    Work Experience
                </Typography>
            </div>
            <div className="grid gap-8">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
