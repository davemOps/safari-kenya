import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
const styles = {
  primary: "bg-terracotta text-white hover:bg-[#8f4e30] border-terracotta",
  light: "bg-white/0 text-white border-white/70 hover:bg-white hover:text-charcoal",
  dark: "bg-forest text-cream border-forest hover:bg-charcoal hover:border-charcoal",
  outline: "bg-transparent text-forest border-forest hover:bg-forest hover:text-cream",
};
export function ButtonLink({ href, children, variant = "primary", arrow, external, className = "" }: { href: string; children: ReactNode; variant?: keyof typeof styles; arrow?: boolean; external?: boolean; className?: string }) {
  const cls = `inline-flex items-center justify-center gap-2 border px-6 py-3.5 text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${styles[variant]} ${className}`;
  const inner = (<>{children}{arrow && <ArrowRight className="h-4 w-4" aria-hidden />}</>);
  return external ? <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{inner}</a> : <Link href={href} className={cls}>{inner}</Link>;
}
