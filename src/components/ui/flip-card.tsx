'use client'
import { cn } from "@/lib/utils";
import {motion} from "framer-motion";
import { BackgroundGradient } from "./background-gradient";
interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  salary: string;
  link:string;
  companyLogo:string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
}

export default function FlipCard({
  image,
  link,
  salary,
  title,
  companyLogo,
  description,
  subtitle,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <BackgroundGradient>
    <div className={cn("group h-[26rem] w-[20rem] [perspective:1000px]", className)} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0],
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <img
            src={image}
            alt="image"
            className="h-full w-full rounded-3xl object-cover shadow-2xl shadow-black/40"
          />
          <div className="absolute -bottom-12 left-4 text-xl font-bold text-white">{title}</div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-3xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]",
            self[1],
          )}
        >
          <div className="flex min-h-full flex-col gap-2">
            <span className="flex justify-between items-center gap-3">
            <h1 className="text-xl font-bold text-white">{subtitle}</h1>
            <img className="size-16 object-cover" src={companyLogo} alt="" />
            </span>
            <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
              {description}{" "}
            </p>
                     <span className='flex flex-col'>
          <h1 className='bg-[#EDEADE] text-black p-1 rounded-sm mt-5 w-28 h-8 font-mono'>{salary}</h1>
                    <motion.button onClick={() => window.location.href = link} whileHover={{scale:1.1}} className='mt-3 w-20 p-1 text-sm font-mono bg-[#0077B5] rounded-sm'>Linkedin</motion.button>
          </span>
          </div>
        </div>
      </div>
    </div>
    </BackgroundGradient>
  );
}

