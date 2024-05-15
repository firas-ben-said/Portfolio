"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      subject,
      message,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Email sent successfully");
      //set email submitted to true
      setEmailSubmitted(true);
      //clear form
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      console.log("Error sending email");
      setEmailSubmitted(false);
    }
  };

  return (
    <section
      className="grid grid-cols-12 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="col-span-12 md:col-span-3 place-self-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent z-0 rounded-full bg-[#181818] w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] relative ">
        <Image
          src="/images/contact-image.png"
          width={300}
          height={300}
          alt="Conatat Image"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 backdrop-blur-sm"
        />
      </div>
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div> */}
      <div className="col-span-12 md:col-span-4 place-self-center text-center sm:text-left z-10 mr-5">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 maw-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/firas-ben-said" target="_blank">
            <Image
              src="/images/github.png"
              className="bg-white mr-2 p-0.5 rounded-full inline-flex items-center justify-center"
              width={40}
              height={40}
              alt="Github Icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/bensaid31/" target="_blank">
            <Image
              src="/images/linkedin.png"
              className="bg-white p-0.5 rounded inline-flex items-center justify-center"
              width={40}
              height={40}
              alt="Github Icon"
            />
          </Link>
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 flex flex-col justify-center mt-4 lg:mt-0">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="example@example.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)} //update email state
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              value={subject}
              onChange={(e) => setSubject(e.target.value)} //update subject state
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Leave a message..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              value={message}
              onChange={(e) => setMessage(e.target.value)} //update message state
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
