import { creation } from "../../store/our-creation";
import CreationItem from "./Item";

const CreationList = () => {
  return (
    <div className="px-6 semi-xl:relative">
      <h2 className="pb-9 text-center font-josefin text-[2rem] uppercase semi-xl:pb-20 semi-xl:text-left semi-xl:text-5xl">
        our creations
      </h2>
      <div className="sm:flex sm:flex-wrap sm:justify-center sm:gap-x-4 semi-xl:gap-x-7">
        {creation.map((item, index) => {
          return <CreationItem {...item} key={index} />;
        })}{" "}
      </div>
      <div className="mt-9 flex justify-center semi-xl:absolute right-6 -top-8">
        <button className="border border-black px-9 py-[0.6rem] uppercase text-sm tracking-[0.25rem]">
          see all
        </button>
      </div>
    </div>
  );
};

export default CreationList;
