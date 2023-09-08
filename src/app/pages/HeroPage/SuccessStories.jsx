import Carousel from "@/app/components/Carousel";

export default function SuccessStories() {
  return (
    <section className=" mt-28">
      <h1 className="font-Gelica text-5xl font-extralight text-center">
        Success Stories
      </h1>
      <p className="mt-8 w-2/3 m-auto text-center">
        These are just some of the thousands of people who’s lives have changed.
        We can’t show their faces due to ouractive protection of user privacy,
        but we can share their voices.
      </p>
      <Carousel />
    </section>
  );
}
