import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import LiveRate from "@/app/Assets/LiveRate.svg";
import HourSeven from "@/app/Assets/24uphour.svg";
import Security from "@/app/Assets/security.svg";
import Updated from "@/app/Assets/updatedtx.svg";

interface FeatureCardProps {
  title: string;
  description: string;
  featureImage: string;
  showLiveRate?: boolean;
  titleColor: string;
  hoverBgColor: string;
  actionText: string;
  isLastCard?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  featureImage,
  titleColor,
  hoverBgColor,
  actionText,
  isLastCard = false
}) => {
  return (
    <div className={`bg-purple-50 pl-12 pt-12 rounded-3xl transition-colors duration-300 ${hoverBgColor} group relative overflow-hidden`}>
      <h2 className={`${titleColor} font-[600] text-3xl group-hover:text-white mb-[0.5em]`}>
        {title}
      </h2>
      <p className="w-[312px] text-base font-normal text-black group-hover:text-white">
        {description}
      </p>
      <div className="flex justify-between gap-4">
        <div className={`flex justify-center items-end gap-[1em] ${!isLastCard ? 'pb-12' : 'pb-2'}`}>
          <ArrowRight className={`${titleColor} group-hover:text-white w-6 h-6`} />
          <h3 className={`${titleColor} group-hover:text-white font-[400] text-[16px]`}>
            {actionText}
          </h3>
        </div>
        <div className="pr-4 pt-16 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <Image src={featureImage} alt="feature illustration" />
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const featureItems = [
    {
      id: 1,
      title: "Real Live Rate",
      description: "Get Real-Time each 24/7 of your currency's equivalence of any crypto currency or fiat all in one place without stress.",
      featureImage: LiveRate,
      titleColor: "text-blue-500",
      hoverBgColor: "hover:bg-blue-500",
      actionText: "Real-Time"
    },
    {
      id: 2,
      title: "24hr uptime anytime",
      description: "Wherever you are in the world, you can save • transfer • manage • organise • and withdraw your money at any time.",      
      featureImage: HourSeven,
      titleColor: "text-pink-600",
      hoverBgColor: "hover:bg-pink-600",
      actionText: "You are safe with us"
    },
    {
      id: 3,
      title: "Security using world ID",
      description: "All you have to do is input your password known by you alone (that you can remember), save and be sure that it's private to you alone.",      
      featureImage: Security,
      titleColor: "text-blue-800",
      hoverBgColor: "hover:bg-blue-800",
      actionText: "100% Security"
    },
    {
      id: 4,
      title: "Ease of transactions",
      description: "Monitor all your transactions from your comfort zone with just one click. 24/7 we're always available with updated records of your transactions.",      
      featureImage: Updated,
      titleColor: "text-green-400",
      hoverBgColor: "hover:bg-green-400",
      actionText: "Updated Transactions"
    }
  ];

  return (
    <div className="flex flex-col items-center py-[2em] gap-[1em]">
      <h1 className="text-purple-700 text-3xl text-center">
        Features
      </h1>
      <p className="text-black font-normal text-sm text-center w-[21%]">
        Why using Transverse Pay is a MUST for anyone that wants to live a happy
        life.
      </p>
      <div className="grid grid-cols-2 gap-[4em] mt-[2em]">
        {featureItems.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            featureImage={feature.featureImage}
            titleColor={feature.titleColor}
            hoverBgColor={feature.hoverBgColor}
            actionText={feature.actionText}
            isLastCard={index === featureItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;