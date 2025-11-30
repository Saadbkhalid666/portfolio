import { FaCss3, FaHtml5, FaJs, FaPython } from "react-icons/fa"
import "./skills.css"
import { SiTypescript } from "react-icons/si"
export const Skills = () =>{


return <section id="skills">
    
<div class="parent text-white">
    <div class="div1 flex w-full text-8xl gap-40 justify-center border-2 p-2 rounded-2xl border-purple-400"><FaHtml5 className="text-red-500 "   /> <FaCss3   /><FaJs    /><SiTypescript   /> <FaPython   /></div>
    <div class="div2">2</div>
    <div class="div3">3</div>
    <div class="div5">5</div>
    <div class="div6">6</div>
    <div class="div7">7</div>
</div>
    
</section>

}