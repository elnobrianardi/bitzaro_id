import React from "react";
import Image from "next/image";
import tick from "../assets/Purple_check.svg";
import appView from "../assets/appview_1.png";

const Platform = () => {
  return (
    <div className="flex justify-between py-16 px-8 md:px-32 items-center bg-black text-white">
      <div className="flex-1 space-y-6 max-w-[1200px]">
        <h1 className="text-4xl font-bold">Trade anytime, anywhere</h1>
        <p className="text-[#a6a6a6]">
          Enjoy a professional experience with our platform
        </p>

        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <Image
              src={tick}
              alt="tick"
              width={24}
              height={24}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">Lightning fast performance</h2>
              <p className="text-[#a6a6a6]">
                We provide a wide range of transaction type selections and
                superior order speeds
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Image
              src={tick}
              alt="tick"
              width={24}
              height={24}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">Custom trading pane</h2>
              <p className="text-[#a6a6a6]">
                Freely define any trading layout of your preference
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Image
              src={tick}
              alt="tick"
              width={24}
              height={24}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">
                Easy, fast & secure asset transfers
              </h2>
              <p className="text-[#a6a6a6]">
                Easily transfer any digital asset in & out of your account with
                real-time asset overviews and military-grade security
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <Image
          src={appView}
          alt="appView"
          width={500}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Platform;
