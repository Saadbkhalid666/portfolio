import { Card } from "../../components/cards/cards"

export const Portfolio = () => {
return <section id="portfolio" className="h-screen w-screen mt-[10%]">

<h1 className=" bg-clip-text bg-linear-to-r text-transparent from-purple-800 via-purple-300 to-white  text-6xl text-center font-extrabold font-serif h-full">My Quality Work</h1>
<Card  title="My Portfolio Card"
  description="This is a sample card built with React + Tailwind. Elegant and reusable."
  skills={["HTML", "CSS", "JavaScript", "React", "TS"]}
  link="https://github.com/your-repo"/>

</section>     
}

