import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/utility/LoadingSpinner";
import DocumentForm from "../../components/documents/DocumentForm";
import { apiFetch } from "../../functions/apiFetch";
import { useParams } from "react-router-dom";
import BackButton from "../../components/utility/BackButton";

function CreateDocument() {
  const id = decodeURI(useParams()?.id);
  const [loading, setLoading] = useState(null);
  const [document, setDocument] = useState(null);
  const [message, setMessage] = useState(
    "Fill out the title and the text to update your document!"
  );

  async function getDocument() {
    try {
      setLoading(true);
      const { responseObject } = await apiFetch(`documents/${encodeURI(id)}`, "GET");
      if (responseObject?.data) {
        setDocument(responseObject.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDocument();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function handleUpdate(event) {
    try {
      event.preventDefault();
      setLoading(true);
      const document = Object.fromEntries(new FormData(event.target).entries());
      const { responseObject } = await apiFetch(
        `documents/${encodeURI(id)}`,
        "PATCH",
        document
      );
      if (responseObject?.message) {
        setMessage(responseObject.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      await getDocument();
    }
  }

  return (
    <div className="UpdateDocument column">
      <h2>Update document</h2>
      <p>{message}</p>
      {loading ? (
        <LoadingSpinner />
      ) : document ? (
        <DocumentForm onSubmit={handleUpdate} document={document} />
      ) : (
        <div>
          <h2>Document not found</h2>
          <BackButton path="/documents" />
        </div>
      )}
    </div>
  );
}

export default CreateDocument;
