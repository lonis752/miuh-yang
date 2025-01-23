import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Homepage from './pages/Homepage.jsx';
import MemGallery from './pages/MemGallery.jsx';
import MainLayout from './layouts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/miuh-yang/",
        element: <Homepage />,
      },
      {
        path: "/miuh-yang/korean-war",
        element: <MemGallery />
      },
      {
        path: "/miuh-yang/shroud",
        element: <MemGallery />
      },
      {
        path: "/miuh-yang/textile",
        element: <MemGallery />
      },
      {
        path: "/miuh-yang/about",
        element: <MemGallery />
      },
      {
        path: "/miuh-yang/contact",
        element: <MemGallery />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
