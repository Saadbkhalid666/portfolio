"use client";

import { About } from "./sections/About";
import { FeaturedProjects } from "./sections/FeaturedLaunches";
import {Footer} from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { NavBar } from "./sections/NavBar";
import { TechStackSection } from "./sections/TechStackSection";


export default function Page() {

  return (<div>

<NavBar   />     
  <Hero   />
  <About   />
  <FeaturedProjects   />
  <TechStackSection    />
  <Footer   />
  </div>

  );
}