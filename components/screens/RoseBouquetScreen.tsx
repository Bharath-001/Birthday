import Image from "next/image";
import type { StepScreenProps } from "@/types";

export default function RoseBouquetScreen({ onContinue }: StepScreenProps) {
  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#4A3B3B]">Your Rose Bouquet 🥂</h2>
        <p className="font-dancing-script text-[1.1rem] text-[#7A5C5C]">Just for you, Linda</p>
      </div>

      <div className="card animate-float w-full max-w-55 overflow-hidden rounded-[36px] p-3">
        <Image
          src="/images/rose-bouquet-v2.png"
          alt="A bouquet of red roses wrapped for Linda"
          width={1792}
          height={2390}
          priority
          sizes="220px"
          className="h-auto w-full rounded-3xl"
        />
      </div>

      <button className="btn-primary" onClick={onContinue}>
        Continue 💌
      </button>
    </div>
  );
}
