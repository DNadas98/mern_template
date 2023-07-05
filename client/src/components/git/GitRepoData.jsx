import React, { useEffect, useState } from "react";
import LoadingSpinner from "../utility/LoadingSpinner";
import "../../style/git.css";
import GitRepoDetails from "./GitRepoDetails";

function GitRepoData({ user, repo }) {
  const [loading, setLoading] = useState(null);
  const [gitData, setGitData] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const httpResponse = await fetch(
          `${process.env.REACT_APP_OPEN_API_URL}/repos/${user}/${repo}`
        );
        const responseObject = await httpResponse.json();
        setGitData(responseObject);
      } catch (error) {
        console.error("Error fetching README:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [user, repo]);

  if (loading) {
    return <LoadingSpinner />;
  } else if (gitData) {
    return (
      <div className="GitRepoData column">
        <GitRepoDetails repo={gitData} />
        <p>
          Source:{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
            className="blue"
          >
            GitHub REST API
          </a>
        </p>
      </div>
    );
  } else if (user && repo) {
    return (
      <div className="GitRepo">
        <h3>
          Check out the{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://github.com/${user}/${repo}`}
            className="blue"
          >
            GitHub repository
          </a>{" "}
          of this Project!
        </h3>
      </div>
    );
  } else return <></>;
}

export default GitRepoData;
