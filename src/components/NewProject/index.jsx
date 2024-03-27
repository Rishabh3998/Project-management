import { useRef } from "react";
import Input from "../Input";
import Modal from "../Modal";

const NewProject = ({ addProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueRef = useRef();
  const modalRef = useRef();

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueRef.current.value;

    // validation
    if (
      title?.trim() === "" ||
      description?.trim() === "" ||
      dueDate?.trim() === ""
    ) {
      // show the error modal
      modalRef.current.open();
      return;
    }

    const obj = {
      title,
      description,
      dueDate,
    };
    addProject(obj);
  };

  const handleCancel = () => {};

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops.... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={handleCancel}
            >
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
          <Input label="Due date" type="date" ref={dueRef} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
