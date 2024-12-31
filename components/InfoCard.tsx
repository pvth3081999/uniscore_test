import Image from "next/image";
import { Loading } from "./Loading";

interface InfoCardProps {
  label: string;
  value: string;
  additionalValue?: string;
  index: number;
  images: string;
  isLoading: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({
  label,
  value,
  additionalValue,
  index,
  images,
  isLoading,
}) => {
  const borderClasses: Record<number, string> = {
    1: "border-b border-r border-t md:border-t-0 md:border-l",
    2: "border-b border-t md:border-t-0",
    3: "border-b border-r md:border-l",
    4: "border-b",
    5: "border-r md:border-l",
  };

  const borderClass = borderClasses[index] || "";

  return (
    <div
      className={`${borderClass} h-[68px] border-[rgb(39,42,49)] border-opacity-100 flex flex-col justify-center pl-4`}
    >
      <p className="text-gray-400 text-[11px]] pb-1">{label}</p>
      <div
        className={`flex ${additionalValue ? "items-start" : "items-center"} `}
      >
        {isLoading ? (
          <>
            <Image
              src={images}
              alt="icons info"
              width={24}
              height={24}
              loading="lazy"
            />
            <div className="flex-col pl-3">
              <p className="font-bold text-[13px] line-clamp-1">{value}</p>

              {additionalValue && (
                <p className="text-sm text-gray-400 line-clamp-1">
                  {additionalValue}
                </p>
              )}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default InfoCard;
