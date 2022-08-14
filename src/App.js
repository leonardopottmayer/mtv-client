import "./App.css";

import { AuthProvider } from "./contexts/auth";

import Routes from "./routes/index";

function App() {
  return (
    <div className="App">
      <AuthProvider value={{ signed: true }}>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
