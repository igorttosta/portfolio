'use client'

import Link from "next/link";
import ShimmerButton from "@/components/ui/shimmer-button";
import Typography from "@mui/material/Typography";

interface VideoPlayerProps {
    videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
    const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

    return (
        <div className="container mx-auto px-8 md:px-10 my-20 lg:px-20 xl:px-32 flex flex-col items-center justify-center gap-6">
            <Typography variant="h5" className="text-primary text-center"> { /*hover:text-violet-500*/ }
                A Little More About Me
            </Typography>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay"
                title="Google Drive Video"
                />
            </div>
            <div className="flex flex-wrap gap-6 justify-center items-center pt-4">
                <ShimmerButton className="min-w-[50px]">
                    <Link
                    href="/assets/pdf/resume-it.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 text-white"
                    >
                        Download Resume
                    </Link>
                </ShimmerButton>
            </div>
        </div>
    );
};

export default VideoPlayer;
