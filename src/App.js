import './App.css';
import UserData from './UserData';
import {Route, Routes} from "react-router-dom";
import {UserInfo} from "./UserInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserData/>}/>
        <Route path="/user/:userId" element={<UserInfo/>}/>

      </Routes>
    </div>
  );
}

export default App;
