const Underline = ({ isFull }) => {
  const width = isFull ? "w-full" : "w-1/2";
  return (
    <div
      className={`ml-auto mr-auto h-[2px] bg-transparent transition-all duration-1000 group-hover:bg-white ${width}`}
    />
  );
};

export default Underline;
