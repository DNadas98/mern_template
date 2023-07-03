import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import LoadingSpinner from "../utility/LoadingSpinner";
import "../../style/git.css";

function GitMarkdownContent({ user, repo, filePath, language }) {
  const [loading, setLoading] = useState(null);
  const [gitContent, setGitContent] = useState("");

  useEffect(() => {
    async function getContent() {
      try {
        setLoading(true);
        const httpResponse = await fetch(
          `https://api.github.com/repos/${user}/${repo}/contents/${filePath}`
        );
        const responseObject = await httpResponse.json();
        const content = atob(responseObject?.content);
        setGitContent(content);
      } catch (error) {
        console.error("Error fetching README:", error);
      } finally {
        setLoading(false);
      }
    }
    getContent();
  }, [user, repo, filePath]);

  if (loading) {
    return <LoadingSpinner />;
  } else if (gitContent)
    return language === "markdown" ? (
      <div className="GitMarkdownContent">
        <pre>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="ReactMarkdown"
            children={gitContent}
            linkTarget="_blank"
          />{" "}
        </pre>
      </div>
    ) : (
      <div>
        <SyntaxHighlighter
          className="GitCodeContent"
          wrapLongLines={true}
          showLineNumbers={true}
          showInlineLineNumbers={true}
          language={language}
          style={vs2015}
        >
          {gitContent}
        </SyntaxHighlighter>
      </div>
    );
  else {
    <div>
      <h2>
        Check out the{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href={`https://github.com/${user}/${repo}`}
          className="fade"
        >
          git repository
        </a>
      </h2>
    </div>;
  }
}

export default GitMarkdownContent;
