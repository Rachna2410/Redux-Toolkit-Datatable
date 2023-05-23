import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Paginations from "./components/Paginations";
import { getEmployees } from "./Redux/userSlice";

const App = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="app">
      <div></div>
      <Paginations userData={users} itemsPerPage={10} />
    </div>
  );
};

export default App;
