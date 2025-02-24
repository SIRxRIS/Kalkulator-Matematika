"use client";

import React from "react";
import Intro from "@/components/Intro";
import BangunDatar from "@/components/Bangun-datar";
import BangunRuang from "@/components/Bangun-ruang";
import Persegipanjang from "@/components/Persegi-panjang";

function Page() {
  return (
    <>
      {/* Intro */}
      <section>
        <Intro />
      </section>
      {/* End Intro */}
      {/* Home */}
      {/* {
        <section className="">
          <Home />
        </section>
      } */}
      {/* End Home */}
      {/* Bangun datar */}
      {
        // <section className="">
        //   <BangunDatar />
        // </section>
      }
      {/* End Bangun datar */}
      {/* Bangun ruang */}
      {/* {
        <section className="">
          <BangunRuang />
        </section>
      } */}
      {/* End Bangun ruang */}
    </>
  );
}

export default Page;
