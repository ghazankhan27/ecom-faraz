import React from "react";

export default function ContactUs() {
  const inputField = (label, placeholder) => {
    return (
      <div className="md:mt-0 mt-10">
        <p>{label}</p>
        <input
          className="bg-transparent border-b mt-2 p-2"
          placeholder={placeholder}
        ></input>
      </div>
    );
  };

  const messageArea = () => {
    return (
      <div className="w-full mt-10">
        <p>Enter your message</p>
        <textarea
          placeholder="enter message here"
          className="w-full mt-2 p-2 bg-transparent border-b"
        ></textarea>
      </div>
    );
  };

  const submitButton = () => {
    return (
      <button className="px-4 py-2 border rounded text-xl mt-6 transition hover:bg-red-800">
        Submit
      </button>
    );
  };

  const footer = () => {
    return (
      <div className="mt-20 pt-10 text-center md:text-left md:w-full md:px-0 bg-red-800">
        <div className="md:px-24">
          <div className="md:flex md:justify-between md:items-center">
            <div>
              <p className="font-bold">Address</p>
              <p>
                Onboard Teams INC 5 Great Valley PKWY STE 210 Malvern, PA19355
              </p>
            </div>
            <div>
              <p className="mt-4 font-bold">Tel</p>
              <p>+1 313-329-4959</p>
            </div>
          </div>
        </div>
        <div className="w-full text-center text-neutral-300">
          <p className="mt-8 font-semibold">
            © 2023 by ITG. Proudly created with Onboard Teams INC
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        id="contactform"
        className="bg-red-900 text-neutral-200 py-20 pb-0 flex flex-col items-center"
      >
        <p className="md:text-center text-5xl">Contact Us</p>
        <p className="text-xl mt-1">for custom designs</p>
        <div className="flex flex-col items-center text-xl w-fit">
          <div className="flex flex-col md:flex-row justify-center md:mt-20">
            {inputField("Enter your name *", "name")}
            <div className="md:w-36 h-1"></div>
            {inputField("Enter your email *", "email")}
          </div>
          {messageArea()}
        </div>
        {submitButton()}
        {footer()}
      </div>
    </>
  );
}
