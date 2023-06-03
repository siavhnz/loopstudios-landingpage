const CreationItem = ({ mobileImg, desktopImg, title }) => {
 
  return (
    <div className="relative grid grid-cols-1 grid-rows-1 mb-6">
      <picture className="col-span-full row-span-full">
        <source srcSet={mobileImg} media="(max-width: 639px)" />
        <source srcSet={desktopImg} media="(min-width: 640px)" />
        <img src={mobileImg} alt={title} />
      </picture>
      <div className="absolute bottom-4 left-5 col-span-full row-span-full break-all font-josefin uppercase text-white text-2xl semi-xl:text-3xl semi-xl:left-11 semi-xl:bottom-9">
        {title.split("\n").map((item) => (
          <h2 className="leading-7 semi-xl:leading-8">{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default CreationItem;
