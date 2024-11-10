import Dinning from "./components/Dinning";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Survey from "./components/Survey";

export default function Home(){
  return(
    <main>
      
      <Hero/>
      <Feature/>
      <Menu/>
      <Dinning/>
      <Survey/>
      
    </main>
  )
}