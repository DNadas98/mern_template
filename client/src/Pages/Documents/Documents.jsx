import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/utility/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../../functions/apiFetch";
import DocumentsTable from "../../components/documents/DocumentsTable";
import Confirm from "../../components/utility/Confirm";

function DocumentsList() {
  const [loading, setLoading] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState(null);
  const [onConfirm, setOnConfirm] = useState(() => null);
  const [documents, setDocuments] = useState(null);
  const [filteredDocuments, setFilteredDocuments] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getDocuments() {
      try {
        setLoading(true);
        const { responseObject } = await apiFetch("documents", "GET");
        if (responseObject?.data?.length >= 1) {
          setDocuments(responseObject.data);
          setFilteredDocuments(responseObject.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getDocuments();
  }, []);
  function handleEdit(id) {
    navigate(`/documents/update/${encodeURI(id)}`);
  }

  async function handleDelete(id) {
    try {
      setLoading(true);
      const { httpResponse } = await apiFetch(`documents/${encodeURI(id)}`, "DELETE");
      if (httpResponse?.status === 200) {
        setDocuments((prev) => {
          return [...prev].filter((document) => document._id !== id);
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function triggerDeleteConfirm(id) {
    setOnConfirm(() => () => handleDelete(id));
    setConfirmMessage("Document will be deleted.\nAre you sure?");
  }

  useEffect(() => {
    if (documents) {
      setFilteredDocuments(
        [...documents].filter((document) =>
          document.title.toLowerCase().includes(searchFilter.toLowerCase())
        )
      );
    }
  }, [documents, searchFilter]);

  return (
    <div className="Documents column">
      {confirmMessage && (
        <Confirm
          message={confirmMessage}
          onConfirm={onConfirm}
          setConfirmMessage={setConfirmMessage}
        />
      )}
      <h1>Documents</h1>
      <div className="row">
        <Link to="/documents/create">
          <button>New Document</button>
        </Link>
        <input
          type="search"
          placeholder="Search"
          value={searchFilter}
          onChange={(event) => {
            setSearchFilter(event.target.value);
          }}
        />
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : filteredDocuments ? (
        <DocumentsTable
          documents={filteredDocuments}
          onEdit={handleEdit}
          onDelete={triggerDeleteConfirm}
        />
      ) : (
        <h2>No documents found</h2>
      )}
    </div>
  );
}

export default DocumentsList;
