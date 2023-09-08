// ------ components --------
import DownloadButton from "@/app/components/DownloadButton";

// -------- images -----------
import heroImg from "public/assets/hero-img.png";
import elipse from "public/assets/elipse.png";
import appleLogo from "public/assets/apple-logo.png";
import googleLogo from "public/assets/google-logo.png";

export default function TopSection() {
  return (
    <section className="flex sm:flex-row flex-col justify-evenly items-center md:mt-16 sm:mt-16 xs:mt-6 md:mx-10">
      <div className="md:w-1/2 sm:w-[35%] w-[80%] md:mr-5 wd-[100px] mt-8">
        <h1 className="font-Gelica md:text-5xl sm:text-3xl font-thin xs:text-2xl xs:mt-4 text-2xl">
          Share the <span className="font-bold text-slate-purple">Health</span>
        </h1>
        <p className="text-base md:mt-4 sm:mt-2 sm:text-sm xs:text-sm mt-2">
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
          className="md:w-96 md:pb-2 sm:w-64 w-48 mt-8"
          src={heroImg.src}
          alt="hero-img"
        />
        <img
          className="w-96 h-8 absolute bottom-0 z-[-1] hidden sm:block"
          src={elipse.src}
          alt="elipse"
        />
      </div>
    </section>
  );
}
