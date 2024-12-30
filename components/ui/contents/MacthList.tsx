"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { convertTimestampToDayMonthFormat } from "@/utils/dateUtils";
import { SpinnerLoading } from "@/components/Loading";

const MacthList = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/json/matchList.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData?.data?.events))
      .catch((error) => console.error("Error fetching JSON:", error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container bg-[#0E1B30] text-white mx-auto md:mt-6 mt-4 p-4 rounded-[8px]">
      <div className="pb-4 font-bold uppercase">MATCHES</div>
      {!isLoading ? (
        data?.map((item: any, index: number) => {
          return (
            <div
              className={`flex justify-between bg-blue-custom p-2.5 rounded-[8px] ${
                index !== data.length - 1 ? "mb-2" : ""
              }`}
              key={item.id}
            >
              <div className="flex items-center">
                <div className="text-center pr-3">
                  <div className="pb-1.5 text-[#8D8E92] text-[13px]">
                    {convertTimestampToDayMonthFormat(item.startTimestamp)}
                  </div>
                  <div className="text-[#8D8E92] text-[13px]">
                    {item.status.type}
                  </div>
                </div>
                <div className="text-center items-center">
                  <div className="pb-1.5 flex text-[13px]">
                    <Image
                      className="rounded-full w-[15px] h-[15px] md:w-[20] md:h-[20]"
                      src="https://img.uniscore.com/football/team/$%7Bdecode(teamId)%7D/image/small"
                      alt="Player Image"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    <span className="pl-1.5 line-clamp-1">
                      {item.homeTeam.shortName}
                    </span>
                  </div>
                  <div className="flex items-center text-[13px]">
                    <Image
                      className="rounded-full w-[15px] h-[15px] md:w-[20] md:h-[20]"
                      src="https://img.uniscore.com/football/team/$%7Bdecode(teamId)%7D/image/small"
                      alt="Player Image"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    <span className="pl-1.5 line-clamp-1">
                      {item.awayTeam.shortName}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-[52px]">
                <div className="mr-2">
                  <div
                    className={`${
                      item.homeScore.current === item.awayScore.current ||
                      item.homeScore.current < item.awayScore.current
                        ? "bg-blue-lose"
                        : "bg-blue-win"
                    } px-[7px] py-1 leading-[16px] text-[11px] rounded-tl-[4px] rounded-tr-[4px]`}
                  >
                    {item.homeScore.current}
                  </div>
                  <div
                    className={`${
                      item.homeScore.current === item.awayScore.current ||
                      item.homeScore.current > item.awayScore.current
                        ? "bg-blue-lose"
                        : "bg-blue-win"
                    } px-[7px] py-1 leading-[16px] text-[11px] rounded-bl-[4px] rounded-br-[4px]`}
                  >
                    {item.awayScore.current}
                  </div>
                </div>
                <div>
                  {item.homeScore.current === item.awayScore.current && (
                    <Image
                      src="/Icons/chair.svg"
                      alt="Uniscore Logo"
                      width={20}
                      height={10}
                    />
                  )}
                  {item.homeScore.current > item.awayScore.current && (
                    <div className="bg-green-custom text-[18px] leading-[21px] px-[3px] py-[1.5px]">
                      8.2
                    </div>
                  )}
                  {item.homeScore.current < item.awayScore.current && (
                    <div className="bg-yellow-custom text-[18px] leading-[21px] px-[3px] py-[1.5px]">
                      6.1
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <SpinnerLoading />
      )}
    </div>
  );
};

export default MacthList;
