import Image, { StaticImageData } from "next/image";
import RGBCirclSmall from "/public/assets/rgb-circle-sm.webp";
import RGBCirclMedium from "/public/assets/rgb-circle-md.webp";
import { cn } from "@/helpers/cn";

export default function SectionPictureImage({
  src,
  alt,
  invertCircle = false,
}: {
  src: StaticImageData;
  alt: string;
  invertCircle?: boolean;
}) {
  return (
    <div className="relative h-fit shrink-0">
      <Image
        src={RGBCirclMedium}
        className={cn("size-[7.986rem] xl:size-[17.5rem] absolute", {
          "-bottom-3 xl:-bottom-10 -right-10 scale-x-[-1]": invertCircle,
          "-bottom-3 xl:-bottom-10 -left-10": !invertCircle,
        })}
        alt="Medium sized RGB circle"
      />
      <Image
        src={src}
        priority
        className="rounded-full object-cover relative size-[17.625rem] xl:size-[34.375rem]"
        alt={alt}
      />
      <Image
        src={RGBCirclSmall}
        className={cn("size-[3.28rem] xl:size-[7.188rem] absolute", {
          "-left-6 xl:-left-14 top-1/2 -translate-y-1/2": invertCircle,
          "-right-2 xl:-right-5 top-12 xl:top-20": !invertCircle,
        })}
        alt="Small sized RGB circle"
      />
    </div>
  );
}
