import React from "react";
import BackButton from "../utility/BackButton";

function DocumentForm({ onSubmit, document }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">
          <h3>Title</h3>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={document?.title ? document.title : "Enter title"}
        />
      </div>
      <div>
        <label htmlFor="text">
          <h3>Text</h3>
        </label>
        <textarea
          id="text"
          name="text"
          defaultValue={document?.text ? document.text : "Enter text"}
        />
      </div>
      <div>
        <button type="submit">Save</button>
        <BackButton path="/documents" />
      </div>
    </form>
  );
}

export default DocumentForm;
