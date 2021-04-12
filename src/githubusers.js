import React, { useContext } from "react";
import { ProfileContext } from "./profileContext";
import { Form, Card, Icon, Image } from "semantic-ui-react";

const GitHubUsers = () => {
  const githubContext = useContext(ProfileContext);

  const handleSubmit = () => {
    if (githubContext.userInput !== "") {
      fetch(`https://api.github.com/users/${githubContext.userInput}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            githubContext.setError(data.message);
          } else {
            githubContext.setError(null);
            githubContext.setUsers(data);
          }
        });
    }

    fetch(`https://api.github.com/users/${githubContext.userInput}/repos`)
      .then((response) => response.json())
      .then((reposData) => {
        githubContext.setRepos(reposData);
      });
  };

  return (
    <div className="githubusers-content">
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Github User Name"
              name="name"
              onChange={githubContext.handleSearch}
            />
            <Form.Button content="Search" />
          </Form.Group>
        </Form>
      </div>
      {githubContext.error ? (
        <h2>{githubContext.error}</h2>
      ) : (
        <div className="card">
          <Card className="card-details">
            <Image src={githubContext.users.avatar_url} wrapped ui={false} />
            <Card.Content className="card-info">
              <Card.Header>Name:{githubContext.users.name}</Card.Header>
              <Card.Header>Login:{githubContext.users.login}</Card.Header>
            </Card.Content>
            <Card.Content className="card-info" extra>
              <a href="#/">
                <Icon name="user" />
                {githubContext.users.followers} Followers
              </a>
            </Card.Content>
            <Card.Content className="card-info" extra>
              <a href="#/">
                <Icon name="user" />
                {githubContext.users.public_repos} Repos
              </a>
            </Card.Content>
            <Card.Content className="card-info" extra>
              <a href="#/">
                <Icon name="user" />
                {githubContext.users.following} Following
              </a>
            </Card.Content>
            <Card.Content className="card-info" extra>
              <a href="#/">
                <Icon name="user" /> Repos
                {githubContext.repos.map((repo) => {
                  return <h4 key={repo.id}>{repo.name}</h4>;
                })}
              </a>
            </Card.Content>
          </Card>
        </div>
      )}
    </div>
  );
};
export default GitHubUsers;
