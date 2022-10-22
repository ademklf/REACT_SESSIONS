import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { title, description };
  };

  //!POST- CRUD (Create)
  const addTutorial = async (newTutor) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
      await axios.post(url, newTutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;