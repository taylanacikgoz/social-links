import React from "react";
import { Button } from "@nextui-org/react";

const ButtonLinks = () => {
  const buttonTitles = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <div className="flex flex-col gap-4">
      {buttonTitles.map((buttonTitle) => (
        <Button className="p-6 text-white font-bold bg-[#333333] active:bg-[#C5F82A] active:text-black">
          {buttonTitle}
        </Button>
      ))}
    </div>
  );
};

export default ButtonLinks;
