"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

type Projects = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  shortlink: string;
};
const RecentProjects = () => {
  const router = useRouter();
  const t = useTranslations();
  const projects = t.raw("projects");
  const p = useTranslations("Headings");
  return (
    <div className="py-20">
      <h1 className="heading">
        {p.rich("my_project", {
          purple: (chunks) => <span className="text-purple">{chunks}</span>,
        })}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-16 mt-10">
        {projects.map((item: Projects) => (
          <div
            onClick={() => router.push(item.link)}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <div>
              <PinContainer title={item.shortlink} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img src={item.img} alt="cover" className="z-10 absolute  " />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
