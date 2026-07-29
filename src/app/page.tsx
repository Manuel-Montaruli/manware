'use client'
import Profile from "@/components/Profile/Profile";
import Terminal from "@/components/Loading/Terminal";
export default function Home() {
  return (
      <div>
          <Terminal/>
          <main className="relative w-full min-h-screen bg-black px-90">
            <div className="relative z-10 pt-30">
                <h1 className="text-primary font-light text-center text-5xl mb-45"><span className="font-bold">Hold tight!</span> New website Coming Soon</h1>
                <Profile />
            </div>
          </main>
      </div>
  );
}
