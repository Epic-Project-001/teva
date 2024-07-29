import Image from "next/image";
import CoupleOnCouch from "/public/assets/couple-on-couch.webp";
import RGBCirclSmall from "/public/assets/rgb-circle-sm.webp";
import RGBCirclMedium from "/public/assets/rgb-circle-md.webp";
import { cn } from "@/helpers/cn";

export default function CoupleOnCouchImage({
  invertCircle = false,
}: {
  invertCircle?: boolean;
}) {
  return (
    <div className="relative h-fit shrink-0">
      <Image
        src={RGBCirclMedium}
        className={cn("size-[17.5rem] absolute", {
          "-bottom-10 -right-10 scale-x-[-1]": invertCircle,
          "-bottom-10 -left-10": !invertCircle,
        })}
        alt="Medium sized RGB circle"
      />
      <Image
        src={CoupleOnCouch}
        priority
        className="rounded-full object-cover relative size-[34.375rem]"
        alt="Couple on a couch"
      />
      <Image
        src={RGBCirclSmall}
        className={cn("size-[7.188rem] absolute", {
          "-left-14 top-1/2 -translate-y-1/2": invertCircle,
          "-right-5 top-20": !invertCircle,
        })}
        alt="Small sized RGB circle"
      />
    </div>
  );
}
