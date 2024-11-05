import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/homePage/HomePage';
import Shop from '../pages/shop/Shop';

    export const routes = createBrowserRouter([
        {
            path:"/" , element:<Layout></Layout> , children:[
                {index:true , element:<HomePage></HomePage>},
                {path:"/shop/*" , element:<Shop></Shop>}
            ]
        }


]);




