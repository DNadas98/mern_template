import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function DocumentRow({ document, onEdit, onDelete }) {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <tr key={`${document._id}-title`}>
        <td>
          <h2>{document.title}</h2>
        </td>
        <td>
          <button
            onClick={() => {
              setShowText(!showText);
            }}
          >
            {showText ? "▲" : "▼"}
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              onEdit(document._id);
            }}
          >
            ✏️
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              onDelete(document._id);
            }}
          >
            ❌
          </button>
        </td>
      </tr>
      {showText && (
        <tr key={`${document._id}-text`}>
          <td colSpan={4}>
            <pre>
              <ReactMarkdown
                className="ReactMarkdown"
                children={document.text}
                remarkPlugins={[remarkGfm]}
              ></ReactMarkdown>
            </pre>
          </td>
        </tr>
      )}
    </>
  );
}

export default DocumentRow;
