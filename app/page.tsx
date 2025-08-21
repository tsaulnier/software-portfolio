import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center bg-black text-white overflow-hidden">
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="absolute -top-12 text-xl font-mono font-thin tracking-widest z-20 pointer-events-none">
          THOM SAULNIER
        </h1>
        <Link
          href="/resume"
          className="absolute -bottom-17 text-small font-mono font-thin tracking-widest z-20 pointer-events-none">
          RESUME
        </Link>
        <Link
          href="/projects"
          className="absolute -bottom-25 text-med font-mono font-thin tracking-widest z-20 pointer-events-none">
          PROJECTS
        </Link>
        <Link
          href="/about"
          className="absolute -bottom-33 text-med font-mono font-thin tracking-widest z-20 pointer-events-none">
          ABOUT ME
        </Link> 

        <Image
          src="/thom.png"
          alt="thom"
          width={192}
          height={192}
          className="rounded-full border border-white z-10"
          priority
        />
      </div>
      <div
        className="absolute w-[600px] h-[600px] rounded-full border border-white/50 opacity-25 hover:opacity-100 transition-all duration-300 z-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)"
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full border border-white/50 opacity-25 hover:opacity-100 transition-all duration-300 z-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)"
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full border border-white/50 opacity-25 hover:opacity-100 transition-all duration-300 z-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)"
        }}
      />
      <div
        className="absolute w-[260px] h-[260px] rounded-full border border-white/50 opacity-50 transition-all duration-300 z-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          clipPath: "polygon(0% 20%, 100% 20%, 100% 100%, 0% 100%)"
        }}
      />
    </main>
  );
}