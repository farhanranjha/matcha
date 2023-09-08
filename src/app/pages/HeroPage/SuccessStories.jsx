import Carousel from "@/app/components/Carousel";

export default function SuccessStories() {
  return (
    <section className=" sm:mt-28 mt-12">
      <h1 className="font-Gelica md:text-5xl font-extralight text-center sm:text-3xl xs:text-2xl">
        Success Stories
      </h1>
      <p className="sm:mt-8 sm:w-2/3 m-auto text-center sm:text-sm mt-6 w-[80%] text-[14px]">
        These are just some of the thousands of people who’s lives have changed.
        We can’t show their faces due to ouractive protection of user privacy,
        but we can share their voices.
      </p>
      <Carousel />
    </section>
  );
}
