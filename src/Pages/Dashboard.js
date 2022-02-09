import React from "react";
import "./Dashboard.css";
import NavBar from "../NavBar";
import StatusBar from "../StatusBar";
import RightSidebar from "../UI/RightSidebar";
import ChatBox from "../Dashboard/ChatBox";
import MainAreaMedium from "../UI/MainAreaMedium";
import WeatherDashCard from "../Components/WeatherDashCard";
import StockExchangeCard from "../Components/StockExchangeCard";
import TasksDashCard from "../Components/TasksDashCard";
import ProjectsCard from "../Components/ProjectsCard";

function Dashboard(props) {
  return (
    <React.Fragment>
      <NavBar>
        <h2>Dashboard</h2>
      </NavBar>
      <MainAreaMedium>
        <WeatherDashCard />
        <StockExchangeCard />
        <TasksDashCard />
        <ProjectsCard />
      </MainAreaMedium>

      <RightSidebar>
        <ChatBox />
      </RightSidebar>
      <StatusBar />
    </React.Fragment>
  );
}

export default Dashboard;