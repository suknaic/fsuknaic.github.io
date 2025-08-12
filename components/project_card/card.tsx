import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectCard {
  imageUrl?: string;
  title: string;
  description: string;
  link?: string | null;
  live?: string | null;
}

export default function ProjectCard({
  imageUrl,
  title,
  description,
  link = null,
  live = null,
}: ProjectCard) {
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const displayImage = imageUrl || screenshotUrl;

  useEffect(() => {
    let isMounted = true;

    async function fetchScreenshot() {
      if (live && !imageUrl) {
        setIsLoading(true);
        try {
          // Usar Microlink.io diretamente
          const microlinkUrl = new URL("https://api.microlink.io");
          microlinkUrl.searchParams.set("url", live);
          microlinkUrl.searchParams.set("screenshot", "true");
          microlinkUrl.searchParams.set("meta", "false");
          microlinkUrl.searchParams.set("viewport.width", "1920");
          microlinkUrl.searchParams.set("viewport.height", "1080");
          microlinkUrl.searchParams.set("viewport.deviceScaleFactor", "1");
          microlinkUrl.searchParams.set("waitFor", "2000");

          const response = await fetch(microlinkUrl.toString(), {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            const jsonResponse = await response.json();

            if (
              jsonResponse.status === "success" &&
              jsonResponse.data?.screenshot?.url
            ) {
              if (isMounted) {
                setScreenshotUrl(jsonResponse.data.screenshot.url);
              }
            } else {
              console.error("Screenshot não foi gerado:", jsonResponse);
            }
          } else {
            console.error("Erro na API Microlink:", response.status);
          }
        } catch (error) {
          console.error("Erro ao capturar screenshot:", error);
        } finally {
          if (isMounted) setIsLoading(false);
        }
      }
    }

    fetchScreenshot();

    return () => {
      isMounted = false;
    };
  }, [live, imageUrl]);

  return (
    <div className="card_bg p-4 gap-4">
      <div className="relative">
        {isLoading ? (
          <div className="w-full h-48 bg-gray-200 rounded-3xl flex items-center justify-center">
            <span className="text-gray-500">Carregando screenshot...</span>
          </div>
        ) : displayImage ? (
          <img
            src={displayImage}
            alt="Project Screenshot"
            className="w-full object-cover rounded"
            onError={(e) => {
              console.error("Erro ao carregar imagem:", e);
              setScreenshotUrl(null);
            }}
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded-3xl flex items-center justify-center">
            <span className="text-gray-500">Imagem não disponível</span>
          </div>
        )}
      </div>
      <div className="flex gap-6 items-center py-2">
        <h2 className=" text-2xl">{title}</h2>
      </div>

      <p className=" opacity-50">{description}</p>

      <div className="flex gap-2 items-center">
        <div className="flex gap-6 items-center py-2">
          {link != null ? (
            <a
              href={link}
              className="flex items-center gap-2 text-green-600 hover:underline"
            >
              Ler estudo de caso <ArrowRight width={15} />
            </a>
          ) : (
            <span className="uppercase text-xs bg-green-600 rounded-3xl py-1 px-2 text-background">
              em andamento
            </span>
          )}
          {live != null ? (
            <a
              href={live}
              className="flex items-center gap-2 text-green-600 hover:underline"
            >
              Ver projeto <ExternalLink width={15} />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
