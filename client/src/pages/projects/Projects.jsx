import React, { useEffect, useState } from "react";
import { apiFetch } from "../../functions/apiFetch";
import LoadingSpinner from "../../components/utility/LoadingSpinner";
import ProjectInfo from "../../components/git/ProjectInfo";

function Projects() {
  const [loading, setLoading] = useState(null);
  const [projects, setProjects] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    async function getProjects() {
      try {
        setLoading(true);
        const { responseObject } = await apiFetch("projects", "GET");
        if (responseObject?.data?.length >= 1) {
          const data = responseObject.data;
          setProjects(responseObject.data);
          setSelectedProject(responseObject.data[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  return (
    <div className="Projects column">
      <h1>Project Showroom</h1>
      <div className="Info column">
        <p>
          A{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
            className="blue"
          >
            GitHub REST API
          </a>{" "}
          integration I have developed to dynamically present my projects through a
          full-stack web application.
        </p>
        <p>
          My API stores and manages project details such as the username, project name and
          file paths for the projects in the database, enabling{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
            className="blue"
          >
            CRUD operations
          </a>{" "}
          and retrieving project information using this data.
        </p>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : selectedProject ? (
        <ProjectInfo
          user={selectedProject?.user}
          repo={selectedProject?.repo}
          files={selectedProject?.files}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Projects;
