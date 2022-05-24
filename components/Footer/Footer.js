import React from "react";
import ContactForm from "../Contact/ContactForm";
import SocialMedia from "../Header/SocialMedia";

function Footer() {
  return (
    <>
      <div className="footer_data bg-[#58bfe1] px-[2rem] py-[6rem] text-white m-auto ">
        <div className="flex flex-wrap">
          <div style={{ flex: "1 0 50%" }}>
            <div className="flex flex-col">
              <div>
                <h4 className="text-4xl md:text-4xl lg:text-6xl font-bold brandName">
                  Mo Salah
                </h4>
              </div>
              <div className="px-4 text-base font-bold tracking-wider">
                <p className="capitalize">
                  A passionate frontend developer / DevOps engineer who dreams
                  of a world full of peace and love.
                </p>
              </div>
              <div className="pl-6 py-[2rem]">
                <SocialMedia />
              </div>
              {/* Telephone  */}
              <div className="pl-6">
                <form>
                  <fieldset>
                    <legend className="text-2xl font-bold mb-[0.4rem]">
                      Tel:
                    </legend>
                    <div className="flex flex-col pl-[1rem] gap-2 ">
                      <span className="text-base font-bold tracking-wider">
                        +(20) 120 489 8905
                      </span>
                      <span className="text-base font-bold tracking-wider">
                        +(20) 114 160 1994
                      </span>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-0" style={{ flex: "1 0 50%" }}>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="bg-white color-[#58bfe1 text-center p-4">
        <p>
          All rights are reserved. Made by Mohamed Salah &copy;{" "}
          {new Date().getFullYear()}{" "}
        </p>
      </div>
    </>
  );
}

export default Footer;
