import fallbackImg from "../../assets/no-projects.png";
import Button from "../Button/button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="m-24 text-center w-2/3">
      <img
        src={fallbackImg}
        alt="image"
        className="w-16h h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or create new one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
