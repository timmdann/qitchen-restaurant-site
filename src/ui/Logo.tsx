type LogoProps = React.ImgHTMLAttributes<HTMLImageElement>;

function Logo({ className, ...rest }: LogoProps) {
  return <img src="/qitchen.svg" alt="logo" className={className} {...rest} />;
}

export default Logo;
