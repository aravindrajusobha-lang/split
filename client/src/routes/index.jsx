import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  { path: '/', element: <AppLayout />, children: [
    { index: true, element: <HomePage /> },
    { path: 'dashboard', element: <Navigate to="/" replace /> },
    { path: '*', element: <NotFoundPage /> },
  ] },
])
