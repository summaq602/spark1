import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full min-h-screen bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h2
              className="text-white text-[56px] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[170px] font-normal leading-[1] tracking-tight"
              style={{ fontFamily: "Unbounded" }}
            >
              <span className="block text-white">Let's</span>
              <span className="block text-[#F58327] pl-1">Talk!</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[30px] p-6 sm:p-10 w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-2">
                <label
                  className="text-xs font-medium text-[#888]"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 m-2 bg-gray-500/15 border border-gray-500/10 rounded-[20px] text-sm text-gray-300 placeholder-gray-400"
                  style={{ fontFamily: "Inter" }}
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-xs font-medium text-[#888]"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 m-2 bg-gray-500/15 border border-gray-500/10 rounded-[20px] text-sm text-gray-300 placeholder-gray-400"
                  style={{ fontFamily: "Inter" }}
                />
              </div>


              <div className="space-y-2">
                <label
                  className="text-xs font-medium text-[#888]"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your message"
                  className="w-full px-4 py-3 m-2 bg-gray-500/15 border border-gray-500/10 rounded-[20px] text-sm text-gray-300 placeholder-gray-400 resize-none"
                  style={{ fontFamily: "Inter" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#F58327] rounded-[10px] text-[#0A0A0A] text-base font-semibold hover:bg-[#e6751f] transition-all duration-200"
                style={{
                  fontFamily: 'Unbounded, "Unbounded Placeholder", sans-serif',
                  fontWeight:400
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
