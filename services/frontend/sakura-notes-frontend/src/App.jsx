import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import {Container} from "@mui/material";

const router = createBrowserRouter([
  {
    path: '/', element: <LandingPage />,
  }
]);

function App() {
  return (
      <Container sx={{
      }}>
        <RouterProvider router={router} />
      </Container>
  )
}

export default App
