import { ButtonLink } from "@/components/ui/Button";
export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-5xl text-forest md:text-6xl">Page not found</h1>
      <p className="mb-8 mt-4 text-xl text-charcoal/70">The page you&apos;re looking for doesn&apos;t exist.</p>
      <ButtonLink href="/" variant="dark">Back home</ButtonLink>
    </section>
  );
}
