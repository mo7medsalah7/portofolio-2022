import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mnqwwngb",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
      <h1 className="mb-4 sm:text-center lg:text-left sm:text-2lg md:text-2xl font-bold">
        Contact Me
      </h1>
      <form className="flex flex-col" onSubmit={handleOnSubmit}>
        <label htmlFor="email" className="font-bold tracking-widest mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="_replyto"
          placeholder="Provide Your Email"
          onChange={handleOnChange}
          required
          value={inputs.email}
          className="p-2 text-[#333] mb-4 "
        />
        <label htmlFor="message" className="font-bold tracking-widest mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          className="p-2 text-[#333] mb-4"
        />
        <button
          type="submit"
          className="hero_button font-bold"
          disabled={status.submitting}
        >
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <p className="text-center p-2 font-bold">{status.info.msg}</p>
      )}
    </main>
  );
};
