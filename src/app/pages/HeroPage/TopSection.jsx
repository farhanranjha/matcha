// ------ components --------
import DownloadButton from "@/app/components/DownloadButton";

// -------- images -----------
import heroImg from "public/assets/hero-img.png";
import elipse from "public/assets/elipse.png";
import appleLogo from "public/assets/apple-logo.png";
import googleLogo from "public/assets/google-logo.png";

export default function TopSection() {
  return (
    <section className="flex flex-row justify-evenly items-center md:mt-28 sm:mt-20">
      <div className="md:w-1/2 w-[35%]">
        <h1 className="font-Gelica md:text-5xl sm:text-3xl font-thin">
          Share the <span className="font-bold text-slate-purple">Health</span>
        </h1>
        <p className="text-base md:mt-4 sm:mt-2 sm:text-sm">
          Ask, Answer and Connect: find info you need from licensed
          professionals and people who have been there before.
        </p>
        <div className="flex flex-row md:mt-8 sm:mt-4">
          <DownloadButton
            imgSrc={appleLogo.src}
            helperText="Download on the"
            innerText="Apple Store"
          />
          <DownloadButton
            imgSrc={googleLogo.src}
            helperText="Get it on"
            innerText="Google Play"
          />
        </div>
      </div>
      <div className="relative">
        <img
          className="md:w-96 md:pb-2 sm:w-64"
          src={heroImg.src}
          alt="hero-img"
        />
        <img
          className="w-96 h-8 absolute bottom-0 z-[-1]"
          src={elipse.src}
          alt="elipse"
        />
      </div>
    </section>
  );
}
