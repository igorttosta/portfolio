/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, CardContent } from "@mui/material";
import ExperienceDetails from "./ExperienceDetails";
import Typography from "@mui/material/Typography";

interface ExperienceProps {
    experience: {
        company: string;
        image: string;
        position: string;
        period: string;
        achievements: string[];
        context: string;
        technologies: string[];
        activities: string[];
    };
}

const ExperienceCard = ({ experience }: ExperienceProps) => {
    return (
        <Card className="p-4 dark:bg-gray-800">
            <CardContent>
                <div className="flex items-center gap-3 mb-1">
                    <img
                        src={experience.image}
                        alt={experience.company}
                        width={30}
                        height={30}
                        className="rounded"
                    />
                    <Typography variant="h5" className="text-sm primary">
                        {experience.company}
                    </Typography>
                </div>
                <Typography variant="body2" className="text-sm text-gray-500">
                    {experience.position}
                </Typography>
                <Typography variant="body2" className="text-sm text-gray-500">
                    {experience.period}
                </Typography>
                <ExperienceDetails experience={experience} />
            </CardContent>
        </Card>
    );
};

export default ExperienceCard;
