"use client";
import { useTranslations } from "next-intl";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTelegram,
} from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useState } from "react";
import { toast } from "sonner";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Hero = () => {
  const t = useTranslations("BentoGrid");
  const [contact, setContact] = useState(false);

  const toggleContact = () => {
    setContact((prev) => !prev);
  };

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words={t("title")}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {t("saasProjectDesc")}
          </p>

          <div
            onClick={toggleContact}
            className="cursor-pointer w-full flex items-center justify-center"
          >
            <MagicButton
              title={t("contact")}
              icon={<FaLocationArrow />}
              position="right"
            />{" "}
          </div>

          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
              contact
                ? "max-h-[500px] opacity-100 mt-5"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
              <a
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://t.me/Aslonov_Davronbek"
                  );
                  toast("Copied!");
                }}
                href="https://t.me/Aslonov_Davronbek"
              >
                <MagicButton
                  title="Telegram"
                  icon={<FaTelegram />}
                  position="right"
                />
              </a>{" "}
              <a
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://www.linkedin.com/in/davron-aslonov-fullstack"
                  );
                  toast("Copied!");
                }}
                href="https://www.linkedin.com/in/davron-aslonov-fullstack"
              >
                <MagicButton
                  title="LinkedIn"
                  icon={<FaLinkedin />}
                  position="right"
                />
              </a>
              <a
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://t.me/Aslonov_Davronbek"
                  );
                  toast("Copied!");
                }}
                href="https://t.me/Aslonov_Davronbek"
              >
                <MagicButton
                  title="Github"
                  icon={<FaGithub />}
                  position="right"
                />
              </a>{" "}
              <a
                onClick={() => {
                  navigator.clipboard.writeText(
                    "mailto:davronaslonov01@gmail.com"
                  );
                  toast("Copied!");
                }}
                href="mailto:davronaslonov01@gmail.com"
              >
                <MagicButton
                  title="Email"
                  icon={<FaEnvelope />}
                  position="right"
                />
              </a>
              <a
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://www.instagram.com/aslonov_davronbek"
                  );
                  toast("Copied!");
                }}
                href="https://www.instagram.com/aslonov_davronbek"
              >
                <MagicButton
                  title="Instagram"
                  icon={<FaInstagram />}
                  position="right"
                />
              </a>
              <a
                onClick={() => {
                  navigator.clipboard.writeText("+998 20 005 77 20");
                  toast("Copied!");
                }}
              >
                <MagicButton
                  title="Phone"
                  icon={<FaPhone />}
                  position="right"
                />
              </a>
              <a
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://t.me/Davronbek_IT_blog"
                  );
                  toast("Copied!");
                }}
                href="https://t.me/Davronbek_IT_blog"
              >
                <MagicButton
                  title="Telegram Channel"
                  icon={<FaTelegram />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
