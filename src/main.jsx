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
import Gallery from './pages/Gallery.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

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
        element: <ShroudGallery />
      },
      {
        path: "/miuh-yang/textile",
        element: <TextileGallery />
      },
      {
        path: "/miuh-yang/about",
        element: <About />
      },
      {
        path: "/miuh-yang/contact",
        element: <Contact />
      },
      {
        path: "/miuh-yang/gallery",
        element: <Gallery />
      },
      {
        path: "/miuh-yang/privacy-policy",
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
