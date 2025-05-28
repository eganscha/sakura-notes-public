import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import {Container} from "@mui/material";
import NotesPage from "./pages/NotesPage/NotesPage.jsx";
import CreateNotePage from "./pages/CreateNotePage/CreateNotePage.jsx";

const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/notes', element: <NotesPage /> },
    { path: '/create-note', element: <CreateNotePage /> }
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
