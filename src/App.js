import "./App.css";
import "semantic-ui-css/semantic.min.css";
import GitHubUsers from "./githubusers";
import Header from "./header";

function App() {
  return (
    <div>
      <Header />
      <div className="github-users">
        <GitHubUsers />
      </div>
      <div className="footer">
        <p>copyright &copy;2021, developed by JyothiNandyala</p>
      </div>
    </div>
  );
}

export default App;
