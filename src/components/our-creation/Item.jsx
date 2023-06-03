const CreationItem = ({ mobileImg, desktopImg, title }) => {
  return (
    <div className="group relative mb-6 grid grid-cols-1 grid-rows-1 hover:cursor-pointer hover:grayscale-50">
      <picture className="col-span-full row-span-full">
        <source srcSet={mobileImg} media="(max-width: 639px)" />
        <source srcSet={desktopImg} media="(min-width: 640px)" />
        <img src={mobileImg} alt={title} />
      </picture>
      <div className="absolute bottom-4 left-5 col-span-full row-span-full break-all font-josefin text-2xl uppercase text-white group-hover:text-black semi-xl:bottom-9 semi-xl:left-11 semi-xl:text-3xl">
        {title.split("\n").map((item, index) => (
          <h2 key={index} className="leading-7 semi-xl:leading-8">
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default CreationItem;
