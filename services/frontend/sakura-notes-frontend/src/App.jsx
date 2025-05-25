import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import LandingPage from "./pages/LandingPage/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: '/', element: <LandingPage />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
