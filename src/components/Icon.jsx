import { cn } from "@heroui/styles";
import Image from "next/image";
import React from "react";

const Icon = ({ src, alt, width = 30, height = 30, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-center", className)}
    />
  );
};

export default Icon;
