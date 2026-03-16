'use client'
import Profile from "@/components/Profile/Profile";
import PixelSnow from '@/components/PixelSnow';
export default function Home() {
  return (
      <main className="relative w-full min-h-screen bg-black px-90">
        <div className="absolute inset-0 z-0 w-full h-full">
            <PixelSnow
                color="#bb58ff"
                flakeSize={0.007}
                minFlakeSize={1.25}
                pixelResolution={450}
                speed={0.8}
                density={0.7}
                direction={270}
                brightness={1.5}
                depthFade={7}
                farPlane={20}
                gamma={0.4545}
                variant="round"
            />
        </div>
        <div className="relative z-10 pt-40">
            <h1 className="text-primary font-light text-center text-5xl"><span className="font-bold">Hold tight!</span> New website Coming Soon</h1>
            <Profile />
        </div>
      </main>
  );
}
