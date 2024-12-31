"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import InfoCard from "@/components/InfoCard";
import { convertTimestampToDate, calculateAge } from "@/utils/dateUtils";
import { Loading } from "@/components/Loading";

const PlayerInfo = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/json/phayerInfo.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData?.data?.player))
      .catch((error) => console.error("Error fetching JSON:", error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container flex flex-col md:flex-row bg-[#0E1B30] text-white mx-auto  pt-4 md:py-0 rounded-[8px]">
      {/* Left Section */}
      <div className="flex-1 flex items-center gap-3 w-full relative pl-4">
        <div className="absolute right-4 top-3 hidden sm:block">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              d="m10.19 5.345.117.236.26.038 4.897.711-3.544 3.455-.188.183.044.26.837 4.877-4.38-2.303L8 12.68l-.233.122-4.38 2.303.836-4.878.045-.259-.188-.183L.536 6.33l4.897-.711.26-.038.117-.236L8 .908l2.19 4.437Zm5.32.941ZM.472 6.34ZM8.028.85 8 .838l.028.014Zm-.056 0Z"
              stroke="#AAA"
            ></path>
          </svg>
        </div>

        <div className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] bg-white rounded-full overflow-hidden flex justify-center items-center">
          <Image
            className="rounded-full md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            src="https://img.uniscore.com/football/player/%7Bdecode(playerId)%7D/image/medium"
            alt="Player Image"
            width={80}
            height={80}
            loading="lazy"
          />
        </div>

        <div className="text-center md:text-left">
          {!isLoading ? (
            <h1 className="font-bold text-[24px] md:text-[32px] line-clamp-1">
              {data?.name}
            </h1>
          ) : (
            <Loading />
          )}

          <div className="flex">
            {!isLoading ? (
              <>
                <Image
                  className="rounded-full w-[30px] h-[30px] md:w-[35] md:h-[35]"
                  src="https://img.uniscore.com/football/team/$%7Bdecode(teamId)%7D/image/small"
                  alt="icon team"
                  width={35}
                  height={35}
                  loading="lazy"
                />
                <div className="pl-1 md:pl-3">
                  <p className="text-[13px] text-left">{data?.team?.slug}</p>
                  <p className="text-[11px] text-[#8D8E92] text-left line-clamp-1">
                    Contract until{" "}
                    {convertTimestampToDate(data?.contractUntilTimestamp)}
                  </p>
                </div>
              </>
            ) : (
              <Loading pt="4" />
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 grid grid-cols-2 mt-6 md:mt-0 md:ml-6 items-center">
        <InfoCard
          index={1}
          label="Nationality"
          value={data?.nationality?.name}
          images={
            "https://img.uniscore.com/football/team/$%7Bdecode(teamId)%7D/image/small"
          }
          isLoading={!isLoading}
        />
        <InfoCard
          index={2}
          label="Date of Birth"
          value={data ? convertTimestampToDate(data?.dateOfBirthTimestamp) : ""}
          additionalValue={`${
            data ? calculateAge(data?.dateOfBirthTimestamp) + "years old" : ""
          }`}
          images={"/Icons/tuổi.svg"}
          isLoading={!isLoading}
        />
        <InfoCard
          index={3}
          label="Height"
          value={`${data ? data?.height + "cm" : ""}`}
          images={"/Icons/Height.svg"}
          isLoading={!isLoading}
        />
        <InfoCard
          index={4}
          label="Preferred Foot"
          value={`${data?.preferredFoot ? data?.preferredFoot : "N/A"}`}
          images={"/Icons/Foot.svg"}
          isLoading={!isLoading}
        />
        <InfoCard
          index={5}
          label="Jersey Number"
          value={`${data?.jerseyNumber ? data?.jerseyNumber : "N/A"}`}
          images={"/Icons/Jersey.svg"}
          isLoading={!isLoading}
        />
        <InfoCard
          index={6}
          label="Position"
          value={data?.position}
          images={"/Icons/Football.svg"}
          isLoading={!isLoading}
        />
      </div>
    </div>
  );
};

export default PlayerInfo;
