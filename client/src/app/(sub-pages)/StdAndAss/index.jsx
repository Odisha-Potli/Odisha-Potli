import React from "react";
import Image from "next/image";

function StandardisationsAndAssociations() {
  const standardImageWidth = 240;
  const standardImageHeight = 320;
  const assocImageWidth = 320;
  const assocImageHeight = 320;

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#ECE5DD]">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Standardisations Section */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2e1c0f] mb-10">
              Our <span className="text-[#97571c]">Standardisations</span>
            </h2>

            <div className="grid grid-cols-2 gap-6 md:gap-10">
              {["/Stand1.png", "/Stand2.png", "/Stand3.png", "/Stand4.png"].map((src, index) => (
                <div key={index} className="hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden shadow-md bg-white p-4">
                  <Image
                    src={src}
                    width={standardImageWidth}
                    height={standardImageHeight}
                    alt={`Standardisation ${index + 1}`}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Associations Section */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2e1c0f] mb-10">
              Our <span className="text-[#97571c]">Associations</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {["/Assoc1.png", "/Assoc2.png"].map((src, index) => (
                <div key={index} className="hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden shadow-md bg-white p-4">
                  <Image
                    src={src}
                    width={assocImageWidth}
                    height={assocImageHeight}
                    alt={`Association ${index + 1}`}
                    className="object-contain"
                  />
                </div>
              ))}
              <div className="md:col-span-2 justify-self-left hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden shadow-md bg-white p-4">
                <Image
                  src="/Assoc3.png"
                  width={assocImageWidth}
                  height={assocImageHeight}
                  alt="Association 3"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StandardisationsAndAssociations;
