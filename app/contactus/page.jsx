"use client";

import { Card } from "flowbite-react";
import React from "react";
import { AspectRatio } from "@chakra-ui/react";
export default function Component() {
  return (
    <>
      <Card className="max-w-screen">
        <AspectRatio ratio={16 / 8}>
          {/*   <MapInteractionCSS
      // showControls
      // defaultValue={{
      //   scale: 1,
      //   translation: { x: 0, y: 20 }
      // }}
      // minScale={0.5}
      // maxScale={3}
      // translationBounds={{
      //   xMax: 400,
      //   yMax: 200
      // }}
    > */}

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248743.1716239267!2d80.10942567138771!3d13.06034780108987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666a3b499e4f%3A0x3ac8071a073e27cd!2sEnergy%20And%20Fuel%20Users%20Association%20Of%20India!5e0!3m2!1sen!2sin!4v1578505633263!5m2!1sen!2sin"></iframe>

          {/* </MapInteractionCSS> */}
        </AspectRatio>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ENERGY AND FUEL USERS’ ASSOCIATION OF INDIA
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          4B-1, JP TOWERS
          <br />
          7/2, NUNGAMBAKKAM HIGH ROAD
          <br />
          CHENNAI – 600 034.
          <br />
          TAMIL NADU. INDIA
          <br />
          PHONE : 91-44-28278604
          <br />
          FAX : 91-44-28205553
          <br />
        </p>
      </Card>
      <br />
      <br />
      <br />
    </>
  );
}
