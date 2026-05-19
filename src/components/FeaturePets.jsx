import { sec } from "better-auth/plugins";
import React from "react";

const FeaturePets = () => {
  const featurePets = async () => {
    const data = await getAllPets();
    return data.slice(0, 3);
  };
  return <section></section>;
};

export default FeaturePets;
