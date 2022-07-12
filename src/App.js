//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" excat element={<Users />} />
        <Route path="/places/new" excat element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
