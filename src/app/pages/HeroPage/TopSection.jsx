// ------ components --------
import DownloadButton from "@/app/components/DownloadButton";

// -------- images -----------
import heroImg from "public/assets/hero-img.png";
import elipse from "public/assets/elipse.png";
import appleLogo from "public/assets/apple-logo.png";
import googleLogo from "public/assets/google-logo.png";

export default function TopSection() {
  return (
    <section className="flex flex-row justify-evenly items-center mt-28">
      <div className="w-1/3">
        <h1 className="font-Gelica text-5xl font-thin">
          Share the <span className="font-bold text-slate-purple">Health</span>
        </h1>
        <p className="text-base mt-4">
          Ask, Answer and Connect: find info you need from licensed
          professionals and people who have been there before.
        </p>
        <div className="flex flex-row mt-8">
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
        <img className="w-96 pb-2" src={heroImg.src} alt="hero-img" />
        <img
          className="w-96 h-8 absolute bottom-0 z-[-1]"
          src={elipse.src}
          alt="elipse"
        />
      </div>
    </section>
  );
}
