"use client";

import { useState } from "react";
import RoseBouquetScreen from "@/components/screens/RoseBouquetScreen";
import EnvelopeLetterScreen from "@/components/screens/EnvelopeLetterScreen";
import type { BouquetSubStep, StepScreenProps } from "@/types";

export default function BouquetLetterScreen({ onContinue }: StepScreenProps) {
  const [subStep, setSubStep] = useState<BouquetSubStep>("bouquet");

  if (subStep === "bouquet") {
    return <RoseBouquetScreen onContinue={() => setSubStep("letter")} />;
  }

  return <EnvelopeLetterScreen onContinue={onContinue} />;
}
