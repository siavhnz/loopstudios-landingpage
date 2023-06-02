import Hero from "../components/Hero";
import Layout from "../components/layout/Layout";

const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="mt-24 px-6 lg:ml-auto lg:mr-auto lg:mt-40 lg:grid lg:max-w-289 lg:grid-cols-10 lg:grid-rows-3 lg:px-0">
        <div className="lg:col-start-1 lg:col-end-8 lg:row-span-full">
          <picture>
            <source
              media="(max-width: 599px)"
              srcSet="./images/mobile/image-interactive.jpg"
            />
            <source
              media="(min-width: 600px)"
              srcSet="./images/desktop/image-interactive.jpg"
            />
            <img
              className="ml-auto mr-auto lg:ml-5"
              alt="The leader in interactive VR"
              src="./images/mobile/image-interactive.jpg"
            />
          </picture>
        </div>
        <div className="px-6 text-center lg:col-start-6 lg:col-end-11 lg:row-start-2 lg:row-end-4 lg:bg-white lg:pl-20 lg:pt-20 semi-xl:pl-28 semi-xl:pt-28 lg:text-left">
          <h2 className="mt-12 font-josefin text-[2rem] uppercase leading-none lg:mt-0 lg:text-5xl">
            The leader in interactive VR
          </h2>
          <p className="mt-4 font-alata text-[0.9375rem] leading-relaxed text-dark-gray lg:mt-6">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <div className="mt-24"></div>
    </Layout>
  );
};

export default LandingPage;
