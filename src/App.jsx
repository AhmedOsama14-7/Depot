import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import "./routes/Routes"
import {routes} from './routes/Routes'
import'./style/main.css'
function App() {
  

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
