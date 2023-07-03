import React, { useEffect, useState } from "react";
import LoadingSpinner from "../utility/LoadingSpinner";
import "../../style/git.css";
import GitUser from "./GitUser";
import GitRepo from "./GitRepo";

function GitRepoData({ user, repo }) {
  const [loading, setLoading] = useState(null);
  const [gitData, setGitData] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const httpResponse = await fetch(`https://api.github.com/repos/${user}/${repo}`);
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
      <div className="GitRepoData row">
        <GitUser user={gitData?.owner} />
        <GitRepo repo={gitData} />
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
            className="fade"
          >
            git repository
          </a>{" "}
          of this Project!
        </h3>
      </div>
    );
  } else return <></>;
}

export default GitRepoData;
