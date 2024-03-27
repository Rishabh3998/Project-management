import { useRef } from "react";
import Input from "../Input";

const NewProject = ({ addProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueRef = useRef();

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueRef.current.value;
    const obj = {
      title,
      description,
      dueDate,
    };
    addProject(obj);
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={titleRef} />
        <Input label="Description" isTextArea ref={descriptionRef} />
        <Input label="Due date" ref={dueRef} />
      </div>
    </div>
  );
};

export default NewProject;
