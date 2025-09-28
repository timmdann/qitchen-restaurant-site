function SocialLogo({ img, to }: { img: string; to: string }) {
  return (
    <a href={to} target="_blank">
      <img
        src={img}
        alt="arrow"
        className="w-5 h-5 transform-gpu transition-transform duration-300 ease-in-out hover:scale-125"
      />
    </a>
  );
}

export default SocialLogo;
