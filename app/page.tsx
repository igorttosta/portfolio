import Profile from "@/components/Profile";
import Projects from "@/components/projects/Projects";
import WorkExperience from "@/components/work-experience/Work-Experience";

export default function page() {
  return (
    <>
      <div id="profile">
        <Profile />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experiences">
        <WorkExperience />
      </div>
    </>
  );
}
