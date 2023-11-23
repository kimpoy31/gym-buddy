// Router Imports
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

// Layout
import RootLayout from "./layouts/RootLayout"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
