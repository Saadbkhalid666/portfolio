"use client";

import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import { NavBar } from "./sections/NavBar";


export default function Page() {

  return (<div>

<NavBar   />     
  <Hero   />
  <About   />
  </div>

  );
}