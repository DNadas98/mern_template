import React, { useState } from "react";
import LoadingSpinner from "../../components/utility/LoadingSpinner";
import DocumentForm from "../../components/documents/DocumentForm";
import { apiFetch } from "../../functions/apiFetch";

function CreateDocument() {
  const [loading, setLoading] = useState(null);
  const [message, setMessage] = useState(
    "Please fill out the title and the text of your document!"
  );

  async function handleCreate(event) {
    try {
      event.preventDefault();
      setLoading(true);
      const document = Object.fromEntries(new FormData(event.target).entries());
      const { responseObject } = await apiFetch("documents", "POST", document);
      if (responseObject?.message) {
        setMessage(responseObject.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="CreateDocument column">
      <h2>Create new document</h2>
      <p>{message}</p>
      {loading ? <LoadingSpinner /> : <DocumentForm onSubmit={handleCreate} />}
    </div>
  );
}

export default CreateDocument;
