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

      {/* Desktop View */}
      <section
        style={{ backgroundImage: "url('/Frame 47467.png')" }}
        className="bg-no-repeat bg-cover sm:bg-contain bg-center w-full h-screen hidden sm:flex flex-col justify-center px-6 lg:px-20 text-[#744d20]"
      >
        <h1 className="text-[10vw] lg:text-[3rem] font-extrabold leading-tight drop-shadow-sm">
          Discover<br />Odisha&apos;s Heritage
        </h1>
        <p className="mt-4 text-sm lg:text-lg font-medium max-w-2xl">
          OdishaPotli – Where Tradition Meets Handcrafted Elegance
        </p>
        <p className="mt-2 text-sm lg:text-base max-w-3xl leading-relaxed">
          OdishaPotli is your gateway to Odisha&apos;s rich heritage, offering a curated collection of <br />handwoven sarees, handcrafted clothing, and traditional crafts.
        </p>
        <Link href="/Shop/" className="mt-8 w-fit">
          <button className="px-8 py-3 lg:py-4 text-lg font-bold bg-[#97571c] text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2">Shop Now!</button>
        </Link>
      </section>

      {/* Mobile View */}
      <section className="sm:hidden flex flex-col justify-center items-center px-4 text-center text-[#744d20] bg-[#ECE5DD] h-screen">
        <h1 className="text-[10vw] font-extrabold leading-snug">Discover<br />Odisha&apos;s Heritage</h1>
        <div style={{ backgroundImage: "url('/Frame 47469.png')" }} className="w-full h-2/5 bg-cover bg-center mt-4 rounded-lg" />
        <p className="mt-4 text-sm font-medium">OdishaPotli – Where Tradition Meets Handcrafted Elegance</p>
        <p className="mt-2 text-sm leading-relaxed">Explore our curated collection of handwoven sarees and traditional crafts.</p>
        <Link href="/Shop/" className="mt-4">
          <button className="px-6 py-2 text-base font-bold bg-[#97571c] text-white rounded-lg">Shop Now!</button>
        </Link>
      </section>

      <div className="-mt-5"> {/* Reduced Top Margin */}
        <WhoAreWeCarousel />
      </div>

      <hr />
      <div className="-mt-21">
        <h1>
      <ProductGrid />
      </h1>
      </div>
      <div className="-mt-9">
      <ArtAndCraft />
      </div>
      <WhatOurCustomersHaveToSay />
      <div className="-mt-15">
      <StandardisationsAndAssociations />
</div>
      {/* Contact Section */}
      <div className="flex justify-center font-bold mb-2 -mt-4" >
        <div className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[2.5rem] text-black">
          <span className="text-[#97571c]">Contact</span> Us
        </div>
      </div>
      <Form />

      <Footer />
    </div>
  );
}
