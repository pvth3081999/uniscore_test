"use client";

import React from "react";
import Image from "next/image";
import svgIconFootball from "@/components/svg/svg_icon_football";
import logoImage from "public/Icons/logo+hamburger.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#091557] via-[#122690] to-[#203397] text-white px-4 md:px-8">
      <div className="container mx-auto flex sm:items-center justify-between py-3">
        <div className="logo gap-4 md:gap-10 items-center sm:flex">
          <div className="pb-1 ">
            <Image
              src={logoImage}
              alt="Uniscore Logo"
              priority={true}
              quality={50}
              className="w-[127px] h-auto"
            />
          </div>

          <div className="flex gap-1">
            <div
              className="flex justify-center sm:px-3 sm:py-2 py-1 px-2 w-auto max-w-full cursor-pointer items-center gap-1 rounded-[87px] 
            border-[1.5px] font-oswald  font-medium uppercase hover:brightness-125 border-solid border-[#1456FF] bg-gradient-to-tl from-[#0C1A4C] via-[#0C3089] to-[#1553EF] text-white"
            >
              <svg
                width="20"
                height="20"
                className="w-4 h-4 sm:w-[20px] sm:h-[20px]"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="1.66672"
                  y="1.75"
                  width="16.6667"
                  height="17.5"
                  fill="url(#pattern0_3_19363)"
                />
                <defs>
                  <pattern
                    id="pattern0_3_19363"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_3_19363"
                      transform="matrix(0.00244444 0 0 0.00232804 -0.05 -0.0510077)"
                    />
                  </pattern>
                  <image
                    id="image0_3_19363"
                    width="450"
                    height="450"
                    xlinkHref={svgIconFootball}
                  />
                </defs>
              </svg>

              <span className="text-[10px] sm:text-[12px]">Football</span>
            </div>
          </div>
        </div>
        <div className="Login">
          <svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
              fill="#02020F"
              fillOpacity={0.15}
            />
            <path
              d="M23.6284 22.5938C22.7955 21.1539 21.512 20.1214 20.0141 19.6319C20.7551 19.1908 21.3307 18.5187 21.6527 17.7188C21.9747 16.9189 22.0252 16.0354 21.7964 15.204C21.5677 14.3727 21.0724 13.6393 20.3865 13.1167C19.7007 12.5941 18.8623 12.311 18 12.311C17.1377 12.311 16.2993 12.5941 15.6134 13.1167C14.9276 13.6393 14.4323 14.3727 14.2036 15.204C13.9748 16.0354 14.0253 16.9189 14.3473 17.7188C14.6693 18.5187 15.2449 19.1908 15.9859 19.6319C14.488 20.1208 13.2044 21.1533 12.3716 22.5938C12.341 22.6436 12.3208 22.699 12.312 22.7568C12.3032 22.8145 12.3061 22.8734 12.3204 22.9301C12.3348 22.9867 12.3604 23.0399 12.3956 23.0865C12.4309 23.1331 12.4751 23.1721 12.5257 23.2013C12.5763 23.2306 12.6322 23.2494 12.6902 23.2566C12.7481 23.2639 12.807 23.2594 12.8632 23.2436C12.9194 23.2277 12.9719 23.2008 13.0176 23.1643C13.0632 23.1279 13.1011 23.0826 13.129 23.0313C14.1593 21.2506 15.9804 20.1875 18 20.1875C20.0196 20.1875 21.8407 21.2506 22.871 23.0313C22.8989 23.0826 22.9368 23.1279 22.9824 23.1643C23.0281 23.2008 23.0805 23.2277 23.1368 23.2436C23.193 23.2594 23.2518 23.2639 23.3098 23.2566C23.3678 23.2494 23.4237 23.2306 23.4743 23.2013C23.5249 23.1721 23.5691 23.1331 23.6044 23.0865C23.6396 23.0399 23.6652 22.9867 23.6796 22.9301C23.6939 22.8734 23.6968 22.8145 23.688 22.7568C23.6792 22.699 23.659 22.6436 23.6284 22.5938ZM14.9375 16.25C14.9375 15.6443 15.1171 15.0522 15.4536 14.5486C15.7901 14.045 16.2684 13.6524 16.828 13.4206C17.3876 13.1888 18.0034 13.1282 18.5975 13.2464C19.1915 13.3645 19.7372 13.6562 20.1655 14.0845C20.5938 14.5128 20.8855 15.0585 21.0036 15.6526C21.1218 16.2466 21.0612 16.8624 20.8294 17.422C20.5976 17.9816 20.2051 18.4599 19.7014 18.7964C19.1978 19.1329 18.6057 19.3125 18 19.3125C17.188 19.3117 16.4096 18.9887 15.8354 18.4146C15.2613 17.8404 14.9384 17.062 14.9375 16.25Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
