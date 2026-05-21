import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/petnearly.png"
      alt="PetNearly Logo"
      width={60}
      height={60}
      className="object-center"
    />
  );
};

export default Logo;
