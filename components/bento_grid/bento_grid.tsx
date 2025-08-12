import { DownloadIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AuroraText } from "../magicui/aurora-text";
import { Ripple } from "../magicui/ripple";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import OribitingSkillsCircles from "./oribitingSkillsCircles";
import ProfileGrid from "./profile_grid";

export default function BentoGrid() {
  const cv = "cv.pdf";
  return (
    <div className="grid gap-10">
      {/* first col */}
      <div className="grid sm:grid-cols-3 gap-10">
        <div className=" sm:col-span-2 dark:bg-background/5 rounded-3xl">
          <ProfileGrid />
        </div>

        <div className="card_bg flex flex-col items-center justify-end overflow-hidden">
          <div className="flex rounded-3xl items-center">
            <Image
              src="/_DSC0001.png"
              alt="profile image"
              width="250"
              height="400"
              className=" scale-125 opacity-80 z-50"
            />
            <Ripple className=" opacity-70" />
          </div>
        </div>
      </div>
      {/* second col */}
      <div className="grid sm:grid-cols-6 gap-10">
        <div className="grid sm:col-span-2 sm:grid-rows-4 gap-4 w-full">
          <div className="dark:bg-background/5  card_bg rounded-full flex items-center justify-center overflow-hidden ">
            <VelocityScroll className=" uppercase">
              <i className=" font-thin"> Portfólio </i>
              <b>Pessoal ⭐ </b>
            </VelocityScroll>
          </div>
          <div className="dark:bg-background/5  card_bg rounded-full flex items-center justify-between px-10 overflow-hidden ">
            <div className="flex flex-col uppercase">
              <span className=" opacity-50">CV 2025</span>
              <h1 className=" font-bold text-2xl">Resumo</h1>
            </div>

            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/felipe-suknaic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium"
              >
                <EyeIcon />
              </a>

              <a href={cv} download>
                <DownloadIcon />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:row-span-3  gap-6">
            <div className="dark:bg-background/5 rounded-3xl p-4 card_bg grid grid-rows-3 gap-y-4">
              <div className="grid row-span-2 items-center justify-center">
                <Image
                  src="/bg1.png"
                  width={130}
                  height={150}
                  alt="cover"
                  className=""
                />
              </div>
              <Link href="/credential" className="cursor-pointer">
                <div>
                  <h2 className="text-sm font-normal uppercase opacity-50">
                    Sobre Min
                  </h2>
                  <h1 className=" text-lg font-medium">Experiências</h1>
                </div>
              </Link>
            </div>
            <div className="dark:bg-background/5 rounded-3xl p-4 card_bg grid grid-rows-3 gap-y-4 z-auto">
              <div className="grid row-span-2 items-center justify-center gap-y-4">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-xl font-semibold leading-none text-transparent dark:from-white dark:to-black ">
                  <AuroraText>Projetos</AuroraText>
                </span>
                <Image
                  src="/Graphic-Web-Design.png"
                  width={300}
                  height={200}
                  alt="project image"
                />
              </div>
              <Link href="/projects">
                <div>
                  {/* <Image src={`/bg1.png`} width={100} height={100} alt="cover" /> */}
                  <h2 className="text-sm font-normal uppercase opacity-50">
                    vitrine
                  </h2>
                  <h1 className=" text-lg font-medium">Projetos</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" sm:col-span-4">
          {/* <MagicCard
            className="cursor-pointer flex flex-col items-center justify-center overflow-hidden"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          > */}
          <div className="card_bg">
            <div className="grid sm:grid-cols-5 p-10 gap-6">
              <div className="grid col-span-2 gap-4">
                <span>Estou sempre buscando melhorar a mim mesmo.</span>
                <h1 className=" text-5xl font-semibold">
                  Atualmente estou usando
                </h1>

                <p className=" opacity-50 ">
                  {" "}
                  Também estou aprendendo D3.js. Além disso, também pratico web
                  design.
                </p>
              </div>
              {/* skills column */}
              <div className="col-span-3">
                <div>
                  <OribitingSkillsCircles />
                </div>
              </div>
            </div>
          </div>
          {/* </MagicCard> */}
        </div>
      </div>
    </div>
  );
}
