import React from "react";

import HomeSlider from "../HomeSlider/HomeSlider";
import InterAct from "../InterAct/InterAct";
import Advices from "../Advices/Advices";
import Testimonial from "../Testimonial/Testimonial"

export default function Home() {
  return (
    <>
      <HomeSlider />

      <p className="m-5 py-3">
        {" "}
        <br />
      </p>

      <InterAct />
      <p className="m-5 py-3">
        {" "}
        <br />
      </p>
      <Advices />
      <Testimonial/>
    </>
  );
}
