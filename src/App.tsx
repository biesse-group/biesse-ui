import React from "react";

import "./App.css";
import hsdLogo from "./assets/hsd-logo.svg";
import storybookLogo from "./assets/storybook-logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hsdLogo} className="App-logo" alt="logo" />
        <h1>HSD UI Framework</h1>
        <p>
          You can find stories inside <code>src/stories</code> folder.
        </p>
        <p>
          To execute storybook run the command: <code>npm run storybook</code>
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <img src={storybookLogo} width={30} alt="logo" style={{ marginRight: 8 }} />
          <a
            className="App-link"
            href="https://storybook.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Storybook
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
