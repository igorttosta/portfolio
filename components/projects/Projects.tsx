"use client";

import Item from "./Item";
import projects from "../../json/projects.json";
import Typography from "@mui/material/Typography";

const Projects = () => {
    return (
        <div className="w-full mx-auto px-8 md:px-10 lg:px-20 xl:px-32 pt-12 pb-20 dark:bg-gray-900">
            <Typography variant="h5" className="text-primary">
                My Projects
            </Typography>
            <div className="grid gap-8 md:grid-cols-2 mt-8">
                {projects.map((project, index) => (
                    <Item
                        key={index}
                        name={project.name}
                        headerImg={project.headerImg}
                        description={project.description}
                        seeMore={project.seeMore}
                        techs={project.techs}
                        headerLinks={project.headerLinks}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
