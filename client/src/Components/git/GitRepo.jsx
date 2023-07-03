import React from "react";
import { format } from "date-fns";

function GitRepo({ repo }) {
  return (
    <div className="GitRepo">
      <h1>
        <a rel="noreferrer" target="_blank" href={repo?.html_url} className="fade">
          {repo?.name}
        </a>
      </h1>
      <pre>
        <ul>
          <li>
            <p>Main language: {repo?.language}</p>
          </li>
          {repo?.stargazers_count >= 1 && <li>Stars: {repo?.stargazers_count}</li>}
          {repo?.watchers_count >= 1 && <li>Watchers: {repo?.watchers_count}</li>}
          {repo?.open_issues_count >= 1 && (
            <li>Open Issues: {repo?.open_issues_count}</li>
          )}
          {repo?.forks_count >= 1 && <li>Forks: {repo?.forks_count}</li>}
          <li>Created At: {format(new Date(repo?.created_at), "yyyy. MM. dd. hh:mm")}</li>
          <li>
            Last update: {format(new Date(repo?.updated_at), "yyyy. MM. dd. hh:mm")}
          </li>
        </ul>
      </pre>
    </div>
  );
}

export default GitRepo;
