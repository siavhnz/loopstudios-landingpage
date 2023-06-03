import Underline from "../ui/Underline";

const MenuItem = ({ menu }) => {
  return (
    <li key={menu} className="group font-josefin text-white">
      <a href="#">{menu}</a>
      <Underline isFull={false} />
    </li>
  );
};

export default MenuItem;
