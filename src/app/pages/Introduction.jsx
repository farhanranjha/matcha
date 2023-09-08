// ------ components --------
import Header from "@/app/components/Header";
import DownloadButton from "@/app/components/DownloadButton";
import PortfolioParagraph from "@/app/components/PortfolioParagrapgh";

// -------- images -----------
import heroImg from "public/assets/hero-img.png";
import elipse from "public/assets/elipse.png";
import appleLogo from "public/assets/apple-logo.png";
import googleLogo from "public/assets/google-logo.png";
import portfolio2 from "public/assets/portfolio2.png";
import portfolio1 from "public/assets/portfolio1.png";

export default function Introduction() {
  return (
    <>
      <Header />
      <section className="flex flex-row justify-evenly items-center mt-28">
        <div className="w-1/3">
          <h1 className="font-Gelica text-5xl font-thin">
            Share the{" "}
            <span className="font-bold text-slate-purple">Health</span>
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

      <section className=" mt-28">
        <h1 className="font-Gelica text-5xl font-extralight text-center">
          About Us
        </h1>
        <PortfolioParagraph
          styling="flex-row"
          heading="Take the therapy quiz"
          imgSrc={portfolio1.src}
          btnText="Quiz Time!"
          innerText="We offer specialized therapy tailored to you. We, along with
              master clinicians and tech gurus around the country, built a
              powerful and fun therapy quiz so you can learn about your perfect
              therapy match. It takes about 4 minutes to complete and you get a
              free therapy session at the end!"
        />
        <PortfolioParagraph
          styling="flex-row-reverse"
          heading="Let’s talk about it"
          imgSrc={portfolio2.src}
          btnText="Get The App"
          innerText="Do you ever find yourself endlessly looking online for 
          answers to your health questions and you can’t get a 
          clear understanding, let alone find someone who you feel comfortable with. We’ve built a space where you can learn about anything and meet people who understand you. This is your space to start and continue your health journey."
        />
      </section>
      <section className=" mt-28">
        <h1 className="font-Gelica text-5xl font-extralight text-center">
          Success Stories
        </h1>
        <p className="mt-8 w-2/3 m-auto text-center">
          These are just some of the thousands of people who’s lives have
          changed. We can’t show their faces due to ouractive protection of user
          privacy, but we can share their voices.
        </p>
      </section>
    </>
  );
}
