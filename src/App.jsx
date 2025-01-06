// React router dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Library Import
import { ToastContainer } from "./imports/library";
// routes Import
import { createRoutes } from "./routes/routes";

// Default Funtion
function App() {
  // Routing system
  const routes = createBrowserRouter(createRoutes());

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App
