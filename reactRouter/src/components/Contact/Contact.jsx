import React from "react";

function Contact() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md-space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="w:5/12 lg:w-5/12">
            <img
              src="https://plus.unsplash.com/premium_photo-1661596558877-dac536b361a9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="contact-image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl  text-gray-900 font-bold md:text-4xl">
              Contact us
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              porro molestias fugit quasi ratione facilis odio quas sapiente
              aliquid repudiandae mollitia voluptatibus, deserunt, consectetur
              provident commodi unde eaque sequi earum.
            </p>
            <p>Contact no. 85236974152</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
