"use client";

import Item from "./Item";
import projects from "../../json/projects.json";

const Projects = () => {

    return (
        <section id="projects" className="pt-20 pb-20 dark:bg-gray-900">
            <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32">
                <div className="grid gap-8 md:grid-cols-2">
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
        </section>
    );
};

export default Projects;
