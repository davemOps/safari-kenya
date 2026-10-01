"use client";
import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface Props { src: string; alt: string; label?: string; sizes?: string; priority?: boolean; className?: string; }

/** Renders a local image; if the file is missing, shows a tasteful placeholder instead of breaking. */
export function SmartImage({ src, alt, label, sizes = "100vw", priority, className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={`${alt} (image coming soon)`} className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sand/70 to-sand/30 p-4 text-center text-forest/70">
        <ImageIcon className="h-5 w-5" aria-hidden />
        <span className="text-lg tracking-wide">{label ?? alt}</span>
        <span className="text-xs uppercase tracking-[0.25em]">Image coming soon</span>
      </div>
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}
