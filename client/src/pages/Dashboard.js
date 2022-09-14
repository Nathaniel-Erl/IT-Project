import React from "react";
import CreateButton from "../components/CreateButton/CreateButton";
import NavBar from "../components/NavBar/NavBar";

function Dashboard() {
  return (
    <>
      <NavBar title="Dashboard" />
      <CreateButton link="/createquestion" title="Create Quiz"></CreateButton>
    </>
  );
}

export default Dashboard;
