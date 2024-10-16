import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
