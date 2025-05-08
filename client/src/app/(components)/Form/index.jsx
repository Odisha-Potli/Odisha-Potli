"use client";

import { useState } from "react";
import PhoneNumber from "../(sub-components)/PhoneNumber";
import emailjs from "emailjs-com";

const Form = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
  
    formObject.sender_email = formObject.email;
  
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAILJS;
  
    if (!userID) {
      console.error("Error: User ID is missing. Check .env.local file.");
      setSubmitStatus({
        success: false,
        message: "Configuration error: User ID is missing."
      });
      setIsSubmitting(false);
      return;
    }
  
    emailjs.send(serviceID, templateID, formObject, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSubmitStatus({
          success: true,
          message: "Thank you for contacting us. Our team will reach back to you soon!"
        });
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setSubmitStatus({
          success: false,
          message: "Failed to submit the form. Please try again."
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <div className="w-full bg-[#ECE5DD] pt-4 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-">
         
          <p className="text-amber-900 max-w-3xl mx-auto text-lg pb-4">
            Have questions about our handcrafted products or artisans? We'd love to hear from you. 
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information Section */}
            <div className="bg-[#c9a97a] text-white p-8 md:p-12 md:w-1/3">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 opacity-90">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#b89867] p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>+917008099469 & +918144733341</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#b89867] p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <span>contact@sarnaindia.in</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#b89867] p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>Odisha, India</span>
                </div>
              </div>
              
              <div className="mt-16">
                <h4 className="font-semibold mb-4">Connect with us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/odishapotli?igsh=NmIzZ2FhcHI2YzZw" className="bg-[#b89867] p-3 rounded-full hover:bg-[#a88756] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/sarna-educational-and-cultural-services-llp/" className="bg-[#b89867] p-3 rounded-full hover:bg-[#a88756] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@OdishaJourneys" className="bg-[#b89867] p-3 rounded-full hover:bg-[#a88756] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="p-8 md:p-12 md:w-2/3">
              <form onSubmit={handleSubmit}>
                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-amber-950 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full h-12 px-4 text-lg border-b-2 border-[#d8b48c] bg-transparent placeholder-amber-500 focus:outline-none focus:border-[#c9a97a] transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-amber-950 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="w-full h-12 px-4 text-lg border-b-2 border-[#d8b48c] bg-transparent placeholder-amber-500 focus:outline-none focus:border-[#c9a97a] transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number Component */}
                <div className="mt-8">
                  <label className="block text-lg font-medium text-amber-950 mb-2">
                    Phone Number
                  </label>
                  <PhoneNumber />
                </div>

                {/* Description Field */}
                <div className="mt-8">
                  <label htmlFor="desc" className="block text-lg font-medium text-amber-950 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="desc"
                      name="desc"
                      placeholder="How can we help you? Tell us about your inquiry..."
                      className="w-full px-4 py-3 text-lg border-2 border-[#d8b48c] rounded-lg bg-white placeholder-amber-500 focus:outline-none focus:border-[#c9a97a] transition-all duration-300 min-h-48 resize-y"
                      rows="6"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`py-3 px-12 bg-[#c9a97a] text-white font-semibold text-lg rounded-full hover:bg-[#b89867] active:bg-[#a88756] transition-all duration-300 shadow-md flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
                
                <div className="mt-6 text-sm text-[#b89867]">
                  We value your privacy and will never share your information with third parties.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;