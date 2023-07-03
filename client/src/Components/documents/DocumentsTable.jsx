import React from "react";
import DocumentRow from "./DocumentRow";

function DocumentsTable({ documents, onEdit, onDelete }) {
  return (
    <table className="DocumentsTable">
      <thead>
        <tr>
          <th className="Title">Title</th>
          <th>Text</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((document) => (
          <DocumentRow
            key={document._id}
            document={document}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default DocumentsTable;
