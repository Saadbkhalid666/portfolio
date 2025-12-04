import { createBrowserRouter, Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/navbar";
import App from "../App";
import { NeuroVisionX } from "../pages/NeuroVisionX/neurovisionx";
import {Footer} from "../sections/footer/footer"
export const router = createBrowserRouter([
    {path:'/', element:<HomeLayout  />, children:[
        {index:true, element:<App    />},
        {path:'/neurovisionx', element:<NeuroVisionX    />}
    ]}
])

function HomeLayout(){
    return <div className=" ">
    <NavBar  />
    <Outlet  />
    <Footer   />
    </div>
}