import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

type InfiniteReelsProps = {
  reels: string[]; // you can replace with a real Reel type later
};

const InfiniteReels = ({ reels }: InfiniteReelsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const cards = Array.from(track.children) as HTMLElement[];

      const gap = 32; // matches Tailwind gap-8
      const totalWidth =
        cards.reduce((acc, el) => acc + el.offsetWidth + gap, 0) / 2;

      gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[80vh] w-full overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-8 h-full w-max"
      >
        {[...reels, ...reels].map((_, idx) => (
          <div
            key={idx}
            className="h-4/5 w-[16rem] flex-shrink-0 bg-[#111111] border-2 border-white rounded-3xl flex justify-end"
          >
            <div className="text-white flex flex-col py-4 gap-4 justify-end items-center text-3xl h-full w-1/5">
              <FaRegHeart />
              <IoMdShareAlt />
              <FaRegComment />
              <HiOutlineDotsVertical />
            </div>
          </div>
        ))}
      </div>

      {/* optional gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

export default InfiniteReels;
