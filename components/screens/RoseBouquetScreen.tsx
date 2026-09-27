import RoseBouquetSVG from "@/components/illustrations/RoseBouquetSVG";
import type { StepScreenProps } from "@/types";

export default function RoseBouquetScreen({ onContinue }: StepScreenProps) {
  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#4A3B3B]">Your Rose Bouquet 🍷</h2>
        <p className="font-dancing-script text-[1.1rem] text-[#7A5C5C]">Just for you, my dear Linda</p>
      </div>

      <div
        className="card animate-float flex h-[280px] w-[260px] items-center justify-center rounded-[36px]"
        style={{ background: "linear-gradient(145deg, #fff9fb, #fff0f5)" }}
      >
        <RoseBouquetSVG />
      </div>

      <button className="btn-primary" onClick={onContinue}>
        Continue 💌
      </button>
    </div>
  );
}
