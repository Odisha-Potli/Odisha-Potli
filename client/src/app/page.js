"use client";
import Navbar from "./(components)/Navbar";
import WhatOurCustomersHaveToSay from "./(sub-pages)/WhatOurCustomers";
import WhoAreWe from "./(sub-pages)/WhoAreWe";
import Form from "./(components)/Form";
import Footer from "./(sub-pages)/Footer";
import ProductGrid from "./(sub-pages)/ProductGrid";
import Video from "./(sub-pages)/Video";
import ArtAndCraft from "./(sub-pages)/ArtAndCraft";
import StandardisationsAndAssociations from "./(sub-pages)/StdAndAss";
import Link from "next/link";
import WhoAreWeCarousel from "./(components)/WhoAreWeCarousel";

export default function Home() {
  return (
    <div className="bg-[#ECE5DD]">
      <Navbar />
      {/* Desktop View */}
      <section className="hidden sm:block relative h-screen w-full overflow-hidden">
        <img
          src="/Screenshot 2025-05-11 122946.png"
          alt="Odisha Heritage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-20 text-[white]">
          <h1 className="text-[10vw] lg:text-[3rem] font-extrabold leading-tight drop-shadow-sm">
            <span className="block">Discover</span>
            <span className="block">Odisha&apos;s Heritage</span>
          </h1>
          <p className="mt-4 text-sm lg:text-lg font-medium max-w-2xl">
            OdishaPotli – Where Tradition Meets Handcrafted Elegance
          </p>
          <p className="mt-2 text-sm lg:text-base max-w-3xl leading-relaxed whitespace-normal">
            OdishaPotli is your gateway to Odisha&apos;s rich heritage, offering a curated collection of handwoven sarees, handcrafted clothing, and traditional crafts.
          </p>
          <Link href="/Shop/" className="mt-4 w-fit">
            <button className="px-6 py-2 text-base font-bold bg-[#97571c] text-white rounded-lg">Shop Now!</button>
          </Link>
        </div>
      </section>
     
      {/* Mobile View - Improved with Fixed Text and Better Positioning */}
      <section className="sm:hidden relative h-screen w-full">
        <img
          src="/Screenshot 2025-05-11 122946.png"
          alt="Odisha Heritage Mobile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-start px-6 pb-40 text-[white] bg-gradient-to-b from-transparent via-transparent to-white/60">
          <h1 className="text-4xl font-extrabold leading-tight mb-2">
            <span className="block">Discover</span>
            <span className="block">Odisha&apos;s Heritage</span>
          </h1>
          <p className="text-base font-medium mb-3 max-w-xs">
            OdishaPotli – Where Tradition Meets Handcrafted Elegance
          </p>
          <Link href="/Shop/" className="mb-4">
            <button className="px-5 py-2 text-base font-bold bg-[#97571c] text-white rounded-lg shadow-md">
              Shop Now!
            </button>
          </Link>
        </div>
      </section>
      <div className="-mt-6">
      <WhoAreWeCarousel />
     </div>
      <div className="-mt-20">
        <ProductGrid />
      </div>
      <div className="-mt-17">
        <ArtAndCraft />
      </div>
       <div className="-mt-7">
      <Video />
      </div>
      <WhatOurCustomersHaveToSay />
      <div className="-mt-10">
        <StandardisationsAndAssociations />
      </div>
      {/* Contact Section - Fixed Text Sizing */}
      <div className="flex justify-center font-bold mb-2 -mt-5">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-black">
          <span className="text-[#97571c]">Contact</span> Us
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}