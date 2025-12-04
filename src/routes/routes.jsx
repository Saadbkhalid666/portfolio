import { createBrowserRouter, Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/navbar";
import App from "../App";
import { NeuroVisionX } from "../pages/NeuroVisionX/neurovisionx";
import { Footer } from "../sections/footer/footer";
import { ChatWat } from "../pages/ChatWat/chatwat";
import { AutoLogAI } from "../pages/AutoLogAI/autologai";
import { KSTraders } from "../pages/KS-Traders/kstraders";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "/neurovisionx", element: <NeuroVisionX /> },
      { path: "/chatwat", element: <ChatWat /> },
      { path: "/autologai", element: <AutoLogAI /> },
      {path:'/ks-traders', element:<KSTraders    />}
    ],
  },
]);

function HomeLayout() {
  return (
    <div className=" ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
