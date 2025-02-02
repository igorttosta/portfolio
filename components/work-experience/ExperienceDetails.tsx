"use client";

import { List, ListItem, ListItemText, Typography } from "@mui/material";

interface ExperienceProps {
    experience: {
        achievements: string[];
        context: string;
        technologies: string[];
        activities: string[];
    };
}

const ExperienceDetails = ({ experience }: ExperienceProps) => {
    return (
        <div className="mt-4">
            <Section title="Achievements" items={experience.achievements} />
            <Section title="Context" text={experience.context} />
            <Section title="Technologies" items={experience.technologies} />
            <Section title="Activities" items={experience.activities} />
        </div>
    );
};

const Section = ({
    title,
    items,
    text,
}: {
    title: string;
    items?: string[];
    text?: string;
}) => (
    <div className="mt-3">
        <Typography variant="h6" className="text-primary font-semibold">
            {title}:
        </Typography>
        {items ? (
            <List className="gap-1" sx={{ paddingLeft: 2 }}>
            {items.map((item, i) => (
                <ListItem key={i} sx={{ paddingY: 0, minHeight: "unset" }}>
                    <ListItemText 
                        primary={item} 
                        primaryTypographyProps={{ className: "text-gray-400 text-sm" }} 
                    />
                </ListItem>
            ))}
        </List>
        
        ) : (
            <Typography variant="body2" className="text-gray-400 pl-2">
                {text}
            </Typography>
        )}
    </div>
);

export default ExperienceDetails;
