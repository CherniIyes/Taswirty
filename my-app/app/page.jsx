import Image from "next/image";
import Hero from "./pages/Hero";

import { SliderData } from '../components/SliderData';
import Slider from "@components/Slider";
import Instagram from "@components/Instagram";
export default function Home() {
  return (
    <div>
      <Hero heading="Taswerty Photography" message="Capture the world, Capture the Moment" />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
