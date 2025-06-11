import { HeroUIProvider, ToastProvider } from "@heroui/react";

export default function HeroUIProviders({ children }: any) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
