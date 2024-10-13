import { useEffect, useRef, useState } from "react";
import { Input } from "./components/Input";
import { FiChevronsRight, FiChevronsLeft, FiZap } from "react-icons/fi";
import { BiLogoGithub } from "react-icons/bi";
import { Step } from "./components/Step";
import { GridPattern } from "./components/GridPattern";

function App() {
  const [rootFontSize, setRootFontSize] = useState(16);
  const [pixels, setPixels] = useState(16);
  const [rem, setRem] = useState(1);
  const lastChanged = useRef<string | null>(null);

  useEffect(() => {
    if (lastChanged.current === "pixels") {
      setRem(pixels / rootFontSize);
    }
  }, [pixels, rootFontSize]);

  useEffect(() => {
    if (lastChanged.current === "rem") {
      setPixels(rem * rootFontSize);
    }
  }, [rem, rootFontSize]);

  const handlePixelsChange = (newPixels: number) => {
    lastChanged.current = "pixels";
    setPixels(newPixels);
  };

  const handleRemChange = (newRem: number) => {
    lastChanged.current = "rem";
    setRem(newRem);
  };

  return (
    <div className="flex justify-center h-full p-4 sm:p-8 text-white min-h-dvh bg-gradient-to-br from-[#18183B] to-[#181F5F]">
      <GridPattern className="absolute bg-[171D51] opacity-65" size={92} />
      <div className="grid grid-rows-[auto,1fr,auto] w-full max-w-3xl relative z-10 gap-8">
        <header className="flex items-center justify-between">
          <a href="/">
            <h1 className="text-lg font-bold">px2rem</h1>
          </a>
          <a href="https://github.com/carlos-dubon/px2rem" target="_blank">
            <BiLogoGithub size={24} />
          </a>
        </header>
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <h2 className="text-3xl font-bold text-center">
            PX to REM Converter
          </h2>
          <div className="relative flex flex-col items-center w-full gap-5 sm:flex-row">
            <Input
              label="Pixels"
              smallLabel="px"
              value={pixels}
              onChange={handlePixelsChange}
              allowCopy
              footer={<FiChevronsRight className="hidden sm:block" size={24} />}
            />
            <div>
              <FiZap className="hidden sm:block" size={24} />
              <div className="flex items-center sm:hidden">
                <FiChevronsLeft className="-rotate-90" size={24} />
                <FiChevronsLeft className="rotate-90" size={24} />
              </div>
            </div>
            <Input
              label="REM"
              smallLabel="rem"
              value={rem}
              onChange={handleRemChange}
              allowCopy
              footer={<FiChevronsLeft className="hidden sm:block" size={24} />}
            />
          </div>

          <div className="w-full sm:w-fit">
            <Input
              size="sm"
              label="Root font size"
              smallLabel="px"
              value={rootFontSize}
              onChange={setRootFontSize}
            />
          </div>

          <h3 className="text-xl font-bold text-center">
            How to use the converter
          </h3>

          <div className="flex flex-col items-center w-full gap-4 sm:flex-row">
            <Step
              step={1}
              description={'Select the input field labeled "Pixels"'}
            />
            <Step step={2} description="Change the number in an input field" />
            <Step step={3} description="Converter will automatically convert" />
          </div>

          <h3 className="text-xl font-bold text-center ">
            Difference between PX and REM
          </h3>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 text-accent-2">
            <div>
              <p>
                <b className="text-white">PX (Pixels)</b>: Pixels are a fixed
                size. They don't change when the main font size or zoom level
                changes, so they're great when you need something to stay
                exactly the same size, like a small icon or a border.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p>
                <b className="text-white">REM (Root Em)</b>: This unit changes
                size based on the main font size of the webpage. If the main
                text size is adjusted (like when you zoom in), elements using
                rem will scale up or down to match. It helps make websites more
                flexible and responsive.
              </p>
              <p>
                In short, REM adjusts with the overall size settings of the
                page, while PX stays the same no matter what.
              </p>
            </div>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-between gap-2 sm:flex-row text-accent-2">
          <div>© {new Date().getFullYear()} All rights reserved.</div>
          <div>
            Created by{" "}
            <a
              href="https://carlosdubon.dev"
              className="font-bold transition-all hover:text-white"
              target="_blank"
            >
              Carlos Dubón
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
