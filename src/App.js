import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import Header from "./component/Header/Header";
import LifeCycle from "./page/LifeCycle/LifeCycle";
import UsersPage from "./page/UsersPage/UsersPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          {/*  1 page => 2 thành phần : path ( đường dẫn )  element ( component ) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/life-cycle" element={<LifeCycle />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
