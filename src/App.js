import React, { Suspense } from "react";

import "./App.css";
import Shows from "./components/Shows";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Suspense Demo</h1>
      </header>
      <Suspense fallback={<p>loading...</p>}>
        <Shows />
      </Suspense>
    </div>
  );
}

export default App;
