"use client";
import Navbar from "./(components)/Navbar";
import WhatOurCustomersHaveToSay from "./(sub-pages)/WhatOurCustomers";
import WhoAreWe from "./(sub-pages)/WhoAreWe";
import Form from "./(components)/Form";
import Footer from "./(sub-pages)/Footer";
import ProductGrid from "./(sub-pages)/ProductGrid";
import VideoImageCarousel from "./(sub-pages)/VideoImageCarousel";
import ArtAndCraft from "./(sub-pages)/ArtAndCraft";
import StandardisationsAndAssociations from "./(sub-pages)/StdAndAss";
import Link from "next/link";
import WhoAreWeCarousel from "./(components)/WhoAreWeCarousel";

export default function Home() {
  return (
    <div className="bg-[#ECE5DD]">
      <Navbar />

      <section
        style={{ backgroundImage: "url('/Frame 47467.png')" }}
        className="bg-no-repeat bg-cover sm:bg-contain bg-center w-full h-[80vh] hidden sm:flex flex-col justify-center px-6 lg:px-20 text-[#744d20]"
      >
        <h1 className="text-[8vw] lg:text-[3rem] font-extrabold leading-tight">Discover<br />Odisha&apos;s Heritage</h1>
        <p className="mt-2 text-sm lg:text-lg font-medium max-w-2xl">OdishaPotli – Where Tradition Meets Handcrafted Elegance</p>
        <Link href="/Shop/" className="mt-3 w-fit">
          <button className="px-6 py-2 text-base font-bold bg-[#97571c] text-white rounded-lg">Shop Now!</button>
        </Link>
      </section>

      <section className="sm:hidden flex flex-col items-center px-4 text-center text-[#744d20] bg-[#ECE5DD]">
        <h1 className="text-[8vw] font-extrabold leading-snug">Discover<br />Odisha&apos;s Heritage</h1>
        <div className="w-full h-[30vh] bg-cover bg-center mt-2 rounded-lg" style={{ backgroundImage: "url('/Frame 47469.png')" }} />
        <p className="mt-2 text-sm font-medium">OdishaPotli – Where Tradition Meets Handcrafted Elegance</p>
        <Link href="/Shop/" className="mt-3">
          <button className="px-4 py-2 text-sm font-bold bg-[#97571c] text-white rounded-lg">Shop Now!</button>
        </Link>
      </section>

      <div className="mt-0">
        <WhoAreWeCarousel />
      </div>

      <hr />

      <div className="mt-0">
        <ProductGrid />
      </div>

      <div className="mt-0">
        <ArtAndCraft />
      </div>

      <WhatOurCustomersHaveToSay />

      <div className="mt-0">
        <StandardisationsAndAssociations />
      </div>

      <div className="flex justify-center font-bold mb-2">
        <div className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[2.5rem] text-black">
          <span className="text-[#97571c]">Contact</span> Us
        </div>
      </div>

      <Form />

      <Footer />
    </div>
  );
}
