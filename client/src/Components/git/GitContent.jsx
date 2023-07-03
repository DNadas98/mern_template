import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import LoadingSpinner from "../utility/LoadingSpinner";
import "../../style/git.css";

function GitMarkdownContent({ user, repo, filePath }) {
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
        const format = responseObject?.name?.split(".").pop();
        setGitContent({ content, format });
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
  } else if (gitContent?.content && gitContent?.format)
    return gitContent.format === "md" ? (
      <div className="GitMarkdownContent">
        <pre>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            className="ReactMarkdown"
            children={gitContent.content}
            linkTarget="_blank"
          />
        </pre>
      </div>
    ) : (
      <div className="GitCodeContent">
        <pre>
          <code>{gitContent.content}</code>
        </pre>
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
