"use client";
import Image from "next/image";
import { useState } from "react";
import { PawPrint } from "lucide-react";
import { images } from "@/data/images";

/** Red circular badge. Put your elephant artwork (white or light, transparent PNG) at public/images/footer/elephant.png */
export function FooterBadge() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="mx-auto flex h-44 w-44 items-center justify-center bg-white shadow-[0_1px_6px_rgba(0,0,0,0.12)]">
      <div className="relative flex h-[8.5rem] w-[8.5rem] items-center justify-center rounded-full bg-[#E3010C]">
        {failed ? (
          <PawPrint className="h-14 w-14 text-white/80" aria-label="Badge image coming soon" />
        ) : (
          <Image src={images.footer.badge} alt="Safari Kenya emblem" width={90} height={90} className="h-[5.6rem] w-[5.6rem] object-contain" onError={() => setFailed(true)} />
        )}
      </div>
    </div>
  );
}