import { createBrowserRouter, Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/navbar";
import App from "../App";

export const router = createBrowserRouter([
    {path:'/', element:<HomeLayout  />, children:[
        {index:true, element:<App    />}
    ]}
])

function HomeLayout(){
    return <div className=" ">
    <NavBar  />
    <Outlet  />
    </div>
}