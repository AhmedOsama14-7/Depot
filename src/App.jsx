import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import "./routes/Routes"
import {routes} from './routes/Routes'
import'./style/main.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
function App() {
  
  const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
          refetchOnWindowFocus:false
      }
  }
});
// 1- photo in singleProduct mediaQuery
// 2- routes container mediaQuery
// 3- singlePhoto
// 4- animation loaders
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}></RouterProvider>
      
    </QueryClientProvider>  
    
     
    </>
  )
}

export default App
