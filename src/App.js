import React, { Suspense } from "react";

import "./App.css";
import ShowDetails from "./components/ShowDetails";
import ShowEpisodes from "./components/ShowEpisodes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Suspense Demo</h1>
      </header>
      <Suspense fallback={<p>loading...</p>}>
        <ShowDetails />
        <ShowEpisodes />
      </Suspense>
    </div>
  );
}

export default App;
