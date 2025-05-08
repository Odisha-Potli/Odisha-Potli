import FilledHeart from "../../(components)/(icons)/FilledHeart";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    // <div className="min-w-full bg-gradient-to-b from-amber-100 to-amber-200 text-gray-800 mt-10">
    <div className="min-w-full bg-gradient-to-b from-[#f3e9dd] to-[#E8D8C6] text-gray-800 mt-10">  {/* bg color  */}
      {/* Logo and Odisha Potli */}
      <div className="container mx-auto px-6 pt-8">
        <div className="flex flex-row items-center">
          <Link href="/">
            <img
              alt="Odisha Potli Logo"
              src="/Odisha_Potli_Logo.ico"
              className="h-16 object-contain rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          </Link>
          <div className="text-3xl font-bold ml-6 text-amber-900">Odisha Potli</div>
        </div>

        {/* para and sections */}
        <div className="flex lg:flex-row flex-col justify-between mt-8 pt-6">
          {/* Para */}
          <div className="lg:w-1/2 w-full lg:pl-0 pl-3 lg:pr-24 pr-3 lg:text-left text-center font-medium">
            <p className="text-lg leading-relaxed text-amber-900">
              OdishaPotli is your gateway to authentic handmade sarees, crafts, and clothing from Odisha. 
              We celebrate tradition by empowering artisans, ensuring sustainability, and offering exquisite 
              handloom creations. Shop with us and embrace the heritage of Odisha with every purchase!
            </p>
          </div>

          {/* Sections */}
          <div className="flex lg:flex-row flex-col justify-between lg:gap-x-12 gap-y-6 mt-6 lg:mt-0">
            <div className="section-1 flex flex-col">
              <div className="pb-4 font-bold text-xl text-amber-900">Explore</div>
              <div className="flex flex-col space-y-2">
                <Link href="/Shop/category/mens-fashion">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Men&apos;s Fashion</button>
                  </div>
                </Link>
                <Link href="/Shop/category/jewellery">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Jewellery</button>
                  </div>
                </Link>
                <Link href="/Shop/category/accessories">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Accessories</button>
                  </div>
                </Link>
                <Link href="/Shop/category/arts-crafts">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Art & Craft</button>
                  </div>
                </Link>
                <Link href="/Shop/category/arts-crafts">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Traditional Toys</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="section-2">
              <div className="pb-4 font-bold text-xl text-amber-900">Community</div>
              <div className="flex flex-col space-y-2">
                <Link href="Blogs">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Blogs</button>
                  </div>
                </Link>
                <Link href="AboutUs">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Our Team</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="section-3">
              <div className="pb-4 font-bold text-xl text-amber-900">About Us</div>
              <div className="flex flex-col space-y-2">
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <button className="text-amber-800 hover:text-amber-950">Manifesto</button>
                </div>
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <button className="text-amber-800 hover:text-amber-950">Partners</button>
                </div>
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <button className="text-amber-800 hover:text-amber-950">Standardisations</button>
                </div>
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <button className="text-amber-800 hover:text-amber-950">Association</button>
                </div>
                <Link href="/PrivacyPolicy">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Privacy Policy</button>
                  </div>
                </Link>
                <Link href="/ShippingDeliveryPolicy">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Shipping & Delivery</button>
                  </div>
                </Link>
                <Link href="/CookiePolicy">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Cookies Policy</button>
                  </div>
                </Link>
                <Link href="/Cancellation&Refund">
                  <div className="hover:translate-x-1 transition-transform duration-300">
                    <button className="text-amber-800 hover:text-amber-950">Cancellation</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="section-4 pb-6">
              <div className="pb-4 font-bold text-xl text-amber-900">Socials</div>
              <div className="flex lg:flex-col flex-row justify-center items-center lg:gap-y-4 gap-x-6">
                <Link href="https://www.instagram.com/odishapotli?igsh=NmIzZ2FhcHI2YzZw">
                  <div className="flex items-center group">
                    <button className="flex flex-row items-center gap-3 hover:text-amber-950">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram-icon lucide-instagram group-hover:scale-110 transition-transform duration-300"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="hidden md:block">Instagram</span>
                    </button>
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/company/sarna-educational-and-cultural-services-llp/">
                  <div className="flex items-center group">
                    <button className="flex flex-row items-center gap-3 hover:text-amber-950">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin-icon lucide-linkedin group-hover:scale-110 transition-transform duration-300"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="hidden md:block">LinkedIn</span>
                    </button>
                  </div>
                </Link>
                <Link href="https://www.youtube.com/@OdishaJourneys">
                  <div className="flex items-center group">
                    <button className="flex flex-row items-center gap-3 hover:text-amber-950">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-youtube-icon lucide-youtube group-hover:scale-110 transition-transform duration-300"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                      <span className="hidden md:block">Youtube</span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call-Mail-Location */}
        <div className="lg:text-left text-center pt-6 pb-6  mt-8">
          <div className="flex lg:flex-row flex-col gap-4 items-center lg:items-start">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-amber-800">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="font-medium">+917008099469 & +918144733341</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-amber-800">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span className="font-medium">contact@sarnaindia.in</span>
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="flex items-center justify-center pb-4">
          <span className="flex items-center text-lg font-medium text-amber-900">
            Made with <FilledHeart className="mx-2 text-red-500" /> from Odisha Potli
          </span>
        </div>
<hr className="border-0 border-amber-300 mx-12" />
 {/* Terms and Conditions */}
        <div className="flex lg:flex-row flex-col justify-between px-4 py-6 text-sm">
          <Link href="/TermsAndConditions">
            <div className="hover:text-amber-900 transition-colors duration-300 lg:text-left text-center mb-2 lg:mb-0">Terms and Conditions</div>
          </Link>
          <div className="text-amber-800 lg:text-right text-center">&copy; All Rights Reserved for Odisha Potli, 2025</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
