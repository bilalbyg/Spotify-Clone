import Sidebar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
      <Bottombar></Bottombar>
    </Router>
  );
}

export default App;
