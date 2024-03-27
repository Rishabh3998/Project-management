import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/Sidebar";

const App = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectDetails) => {
    setProjectState((prev) => {
      const newProject = {
        ...projectDetails,
        id: Math.random(),
      };
      return {
        ...prev,
        projects: [...prev.projects, newProject],
      };
    });
  };

  console.log({ projectState });

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} />
      {projectState.selectedProjectId === undefined ? (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      ) : (
        <NewProject addProject={handleAddProject} />
      )}
    </main>
  );
};

export default App;
