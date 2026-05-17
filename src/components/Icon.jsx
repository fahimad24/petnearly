import Image from "next/image";
import React from "react";

const Icon = ({ src, alt, width = 30, height = 30 }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-center"
    />
  );
};

export default Icon;
