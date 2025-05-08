import FilledHeart from "../../(components)/(icons)/FilledHeart";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="min-w-full bg-gradient-to-b from-[#f3e9dd] to-[#E8D8C6] text-gray-800 mt-6">
      <div className="container mx-auto px-4 pt-6">
        {/* Logo and Brand */}
        <div className="flex items-center mb-4">
          <Link href="/">
            <img
              alt="Odisha Potli Logo"
              src="/Odisha_Potli_Logo.ico"
              className="h-12 object-contain rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          </Link>
          <div className="text-2xl font-bold ml-4 text-amber-900">Odisha Potli</div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 text-sm">
          {/* Brief Description - spans multiple columns */}
          <div className="col-span-2 lg:col-span-4 pr-2">
            <p className="text-sm leading-relaxed text-amber-900">
              OdishaPotli celebrates tradition by empowering artisans and offering exquisite handloom creations. Shop with us and embrace the heritage of Odisha!
            </p>
          </div>

          {/* Explore */}
          <div className="col-span-1 lg:col-span-2">
            <div className="font-bold mb-2 text-amber-900">Explore</div>
            <div className="flex flex-col space-y-1">
              <Link href="/Shop/category/mens-fashion">
                <span className="text-amber-800 hover:text-amber-950 hover:translate-x-1 inline-block transition-transform duration-300">Men's Fashion</span>
              </Link>
              <Link href="/Shop/category/jewellery">
                <span className="text-amber-800 hover:text-amber-950 hover:translate-x-1 inline-block transition-transform duration-300">Jewellery</span>
              </Link>
              <Link href="/Shop/category/accessories">
                <span className="text-amber-800 hover:text-amber-950 hover:translate-x-1 inline-block transition-transform duration-300">Accessories</span>
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="col-span-1 lg:col-span-2">
            <div className="font-bold mb-2 text-amber-900">Community</div>
            <div className="flex flex-col space-y-1">
              <Link href="Blogs">
                <span className="text-amber-800 hover:text-amber-950 hover:translate-x-1 inline-block transition-transform duration-300">Blogs</span>
              </Link>
              <Link href="AboutUs">
                <span className="text-amber-800 hover:text-amber-950 hover:translate-x-1 inline-block transition-transform duration-300">Our Team</span>
              </Link>
            </div>
          </div>
          
          {/* About Us */}
          <div className="col-span-1 lg:col-span-2">
            <div className="font-bold mb-2 text-amber-900">About Us</div>
            <div className="flex flex-col space-y-1">
              <span className="text-amber-800 hover:text-amber-950 hover:translate-x-1 inline-block transition-transform duration-300">Manifesto</span>
              <span className="text-amber-800 hover:text-amber-950 hover:translate-x-1 inline-block transition-transform duration-300">Partners</span>
              <Link href="/PrivacyPolicy">
                <span className="text-amber-800 hover:text-amber-950 hover:translate-x-1 inline-block transition-transform duration-300">Privacy Policy</span>
              </Link>
              <Link href="/ShippingDeliveryPolicy">
                <span className="text-amber-800 hover:text-amber-950 hover:translate-x-1 inline-block transition-transform duration-300">Shipping</span>
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className="font-bold mb-2 text-amber-900">Socials</div>
            <div className="flex flex-col space-y-2">
              <Link href="https://www.instagram.com/odishapotli?igsh=NmIzZ2FhcHI2YzZw">
                <div className="flex items-center group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="text-amber-800 hover:text-amber-950">Instagram</span>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/company/sarna-educational-and-cultural-services-llp/">
                <div className="flex items-center group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="text-amber-800 hover:text-amber-950">LinkedIn</span>
                </div>
              </Link>
              <Link href="https://www.youtube.com/@OdishaJourneys">
                <div className="flex items-center group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  <span className="text-amber-800 hover:text-amber-950">Youtube</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs mt-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-amber-800">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+917008099469 & +918144733341</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-amber-800">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>contact@sarnaindia.in</span>
          </div>
        </div>

        {/* Made with love */}
        <div className="flex items-center justify-center my-4">
          <span className="flex items-center text-sm">
            Made with <FilledHeart className="mx-1 text-red-500" /> from Odisha Potli
          </span>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col items-center border-t border-[#E8D8C6] pt-2">
          <div className="flex flex-wrap justify-center gap-4 text-xs mb-2">
            <Link href="/TermsAndConditions">
              <span className="hover:text-amber-900 transition-colors duration-300">Terms and Conditions</span>
            </Link>
            <span className="text-amber-800">&copy; All Rights Reserved for Odisha Potli, 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;