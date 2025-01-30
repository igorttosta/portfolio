'use client'

interface VideoPlayerProps {
    videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
    const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

    return (
        <div className="container mx-auto px-8 md:px-10 my-20 lg:px-20 xl:px-32">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay"
            title="Google Drive Video"
            />
        </div>
        </div>
    );
};

export default VideoPlayer;
