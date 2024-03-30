import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  }
])


function App() { 
  return  <RouterProvider router={router} />
}

export default App
