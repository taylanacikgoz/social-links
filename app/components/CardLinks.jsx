import React from "react";
import ButtonLinks from "./ButtonLinks";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Profile from "@/public/avatar-jessica.jpeg";

export const CardLinks = () => {
  return (
    <div>
      <Card className="bg-[#1F1F1F] p-3 sm:p-6">
        <CardHeader className="flex-col gap-6 px-6 sm:px-12">
          <Image
            alt="my_profile_picture"
            src={Profile}
            className="object-cover rounded-full"
            width={100}
            height={100}
          />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Jessica Randall</h1>
            <h3 className="text-[#C5F82A] text-sm font-bold mt-1">
              London, United Kingdom
            </h3>
          </div>

          <p className="text-sm">"Front-end developer and avid reader."</p>
        </CardHeader>
        <CardBody className="">
          <ButtonLinks />
        </CardBody>
      </Card>
    </div>
  );
};
