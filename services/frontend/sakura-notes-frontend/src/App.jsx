import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import {Container} from "@mui/material";
import NotesPage from "./pages/NotesPage/NotesPage.jsx";

const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/notes', element: <NotesPage /> }
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
