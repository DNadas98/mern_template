import React from "react";

function GitUser({ user }) {
  return (
    <div className="GitUser row">
      <a rel="noreferrer" target="_blank" href={user.html_url} className="fade row">
        <img src={user.avatar_url} alt="profile_picture" />
        <h1>{user.login}</h1>
      </a>
    </div>
  );
}

export default GitUser;
