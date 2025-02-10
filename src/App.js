//  import { Children } from "react";
import "./App.css"


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Section from "./Components/Section/Section";
import HomePage from "./Pages/HomePage/HomePage";

//create the layout


// create route

const router = createBrowserRouter ([
    {
    path: "/",
    element: <Section />,
    children: [
        {
           path: "/",
           element: <HomePage />
        },
        
       
        ]
    }
    
])


function App(){
    return(
        <div className="Maincontainer">
             <div className=" Maincontainer">
        <RouterProvider router = {router} />

      </div>
        </div>
     
    )
}



export default App

