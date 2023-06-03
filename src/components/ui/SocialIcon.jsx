import Underline from "./Underline";

const SocialIcon = ({ platform, icon }) => {
  return (
    <div className="group">
      <a href="#" aria-label={`visit our ${platform}`} className="mb-2 block">
        {icon}
      </a>
      <Underline isFull={true} />
    </div>
  );
};

export default SocialIcon;
