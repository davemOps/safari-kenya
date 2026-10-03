"use client";
import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface Props { src: string; alt: string; label?: string; sizes?: string; priority?: boolean; className?: string; objectPosition?: string; quiet?: boolean; }

/** Renders a local image; if the file is missing, shows a tasteful placeholder instead of breaking. */
export function SmartImage({ src, alt, label, sizes = "100vw", priority, className = "", objectPosition, quiet }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed && quiet) return <div aria-hidden className="absolute inset-0 bg-black" />;
  if (failed) {
    return (
      <div role="img" aria-label={`${alt} (image coming soon)`} className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sand/70 to-sand/30 p-4 text-center text-forest/70">
        <ImageIcon className="h-5 w-5" aria-hidden />
        <span className="text-lg tracking-wide">{label ?? alt}</span>
        <span className="text-xs uppercase tracking-[0.25em]">Image coming soon</span>
      </div>
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={objectPosition ? { objectPosition } : undefined} onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}
