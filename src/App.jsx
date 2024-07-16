import { createBrowserRouter, RouterProvider, NavLink } from 'react-router-dom'
import Routes from './Databases/Routes'
function App() {
  const router = createBrowserRouter(Routes)
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
