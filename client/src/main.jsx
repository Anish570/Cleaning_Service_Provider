import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { } from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

// Define routes as an array of objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },  // Default route
      { path: "about", element: <About /> },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
