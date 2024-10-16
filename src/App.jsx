import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobDetails, { jobLoader } from "./pages/JobDetails";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

function App() {
  // Adding Job to the API
  async function addJob(newJobObj) {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJobObj),
    });
    return;
  }

  // Deleting Job from Api
  async function deleteJob(id) {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  }

  // Updating Job From API
  async function updateJob(jobToBeUpdatedObj) {
    const res = await fetch(`/api/jobs/${jobToBeUpdatedObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobToBeUpdatedObj),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobDetails deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJob={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJob={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
