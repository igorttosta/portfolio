import Profile from "@/components/Profile";
import Projects from "@/components/projects/Projects";
import VideoPlayer from "@/components/Video";

export default function page() {
  return (
    <>
      <div id="profile">
        <Profile />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="video">
        <VideoPlayer videoId="1BHte2eeO45zqvBmvl-4LaS6xGOMcX5a_" />
      </div>
    </>
  );
}
