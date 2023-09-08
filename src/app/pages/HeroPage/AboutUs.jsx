// ------ components --------
import PortfolioParagraph from "@/app/components/PortfolioParagrapgh";

// -------- images -----------
import portfolio2 from "public/assets/portfolio2.png";
import portfolio1 from "public/assets/portfolio1.png";

export default function AboutUs() {
  return (
    <section className="sm:mt-20 md:mt-28">
      <h1 className="font-Gelica md:text-5xl sm:text-3xl font-extralight text-center">
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
  );
}
