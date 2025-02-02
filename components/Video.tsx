"use client";

import Typography from "@mui/material/Typography";

interface VideoPlayerProps {
    videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
    const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

    return (
        <div className="w-full bg-background mx-auto px-8 md:px-10 pt-10 pb-16 lg:px-20 xl:px-32 flex flex-col gap-6">
            <Typography variant="h5" className="text-primary">
                A Little More About Me
            </Typography>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                    src={videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay"
                    title="Google Drive Video"
                    aria-label="Embedded video from Google Drive"
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
