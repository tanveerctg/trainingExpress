import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import LandingPage from "./Containers/LandingPage/LandingPage";
import Features from "./Containers/Features/Features";
import OurCourses from "./Containers/OurCourses/OurCourses";

function App() {
  return (
    <div className="App">
      <Layout>
        <LandingPage />
        <Features />
        <OurCourses />
      </Layout>
    </div>
  );
}

export default App;
