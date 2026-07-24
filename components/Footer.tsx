"use client";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTelegram,
} from "react-icons/fa6";
import { toast } from "sonner";
import MagicButton from "./MagicButton";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Headings");
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">{t("footer_title")}</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {t("footer_desc")}
        </p>
        <a href="mailto:davronaslonov01@gmail.com">
          <MagicButton
            title={t("contact_me")}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <div
          className={`grid transition-all gap-y-3 duration-500 ease-in-out w-full mt-3 
            "grid-cols-1 md:grid-cols-4 opacity-100  "
          `}
        >
          <a
            onClick={() => {
              navigator.clipboard.writeText("https://t.me/Aslonov_Davronbek");
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
              navigator.clipboard.writeText("https://t.me/Aslonov_Davronbek");
              toast("Copied!");
            }}
            href="https://t.me/Aslonov_Davronbek"
          >
            <MagicButton title="Github" icon={<FaGithub />} position="right" />
          </a>{" "}
          <a
            onClick={() => {
              navigator.clipboard.writeText("mailto:davronaslonov01@gmail.com");
              toast("Copied!");
            }}
            href="mailto:davronaslonov01@gmail.com"
          >
            <MagicButton title="Email" icon={<FaEnvelope />} position="right" />
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
            <MagicButton title="Phone" icon={<FaPhone />} position="right" />
          </a>
          <a
            onClick={() => {
              navigator.clipboard.writeText("https://t.me/Davronbek_IT_blog");
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
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Davronbek Aslonov
        </p>
      </div>
    </footer>
  );
};

export default Footer;
