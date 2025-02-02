import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
// Routes //
import Homepage from './pages/Homepage.jsx';
import MemGallery from './pages/MemGallery.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import ShroudGallery from './pages/ShroudGallery.jsx';
import TextileGallery from './pages/TextileGallery.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/korean-war",
        element: <MemGallery />
      },
      {
        path: "/shroud",
        element: <ShroudGallery />
      },
      {
        path: "/textile",
        element: <TextileGallery />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
