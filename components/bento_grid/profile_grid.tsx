import { UserRound } from "lucide-react";
import { useTheme } from "next-themes";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedIn";
import Mail from "../icons/mail";
import { TypingAnimation } from "../magicui/typing-animation";
import { MagicCard } from "../ui/magic-card";
export default function ProfileGrid() {
  const { theme } = useTheme();

  return (
    <div>
      <MagicCard
        className=" flex flex-col items-center justify-center"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex flex-col items-center justify-center card_bg">
          <div className="grid p-6">
            <div className=" flex flex-col justify-center p-4 gap-10 ">
              <div className="grid sm:grid-cols-5 items-center">
                <div className="col-span-4 flex items-center gap-4">
                  <UserRound />
                  <div className="flex flex-col">
                    <TypingAnimation className="text-sm">
                      Eu sou Felipe Suknaic
                    </TypingAnimation>
                    <span className="text-sm uppercase opacity-50">
                      Form. Sistemas para Internet
                      <br />
                      Backend | Especialista em Frontend e UI/UX
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-self-auto gap-4">
                  <div className="flex justify-center items-center mt-2">
                    <a
                      href="https://github.com/suknaic"
                      className=" bg-card border   rounded-xl p-1"
                    >
                      <GithubIcon width={28} height={28} />
                    </a>
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <a
                      href="https://www.linkedin.com/in/felipe-suknaic/"
                      className="bg-card border   rounded-xl p-1"
                    >
                      <LinkedInIcon width={28} height={28} />
                    </a>
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <a
                      href="mailto:fsuknaic@hotmail.com"
                      className="bg-card border   rounded-xl p-1"
                    >
                      <Mail width={28} height={28} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5">
                <div className="grid col-span-4 gap-4">
                  <h2 className=" text-4xl sm:text-6xl font-bold">
                    Apaixonado por tecnologia.
                  </h2>
                  <p className=" opacity-50">
                    Gosto de aprender coisas novas e de superar desafios, sempre
                    analisando como evoluí por meio deles. 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}
