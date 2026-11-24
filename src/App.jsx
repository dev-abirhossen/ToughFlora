import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomeIndex from "./pages/HomePage/HomeIndex"

const routes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomeIndex/>}/>
  </Route>
))

function App() {
  return <RouterProvider router ={routes}/>
}

export default App
