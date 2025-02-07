import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="space-y-10">
      <h1 className="text-5xl font-bold leading-tight">
        Learn To Code
        <br />
        && Have Fun
        <br />
        <span className="relative inline-block">
          Doing It
          <svg
            className="absolute -bottom-2 left-0 w-full"
            viewBox="0 0 300 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 15 Q 75 0, 150 15 Q 225 30, 300 15" stroke="#7C3AED" strokeWidth="4" fill="none" />
          </svg>
        </span>
      </h1>

      <p className="text-xl text-gray-400">Build beautiful apps & websites with easy-to-follow tutorials</p>

      <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-lg px-8 py-4 rounded-md">
        Get Started
      </Button>

      <div className="flex items-center gap-6">
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <Avatar key={i} className="border-2 border-[#1a1a1a] w-12 h-12">
              <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-gray-400">Join 455 improved developers!</p>
      </div>

      {session && (
        <div className="mt-8 p-6 border border-gray-700 rounded-lg bg-gray-800">
          <h2 className="text-2xl font-semibold">Your Profile</h2>
          <div className="flex items-center gap-4 mt-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={session.user?.image || "/placeholder.svg"} />
              <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xl">{session.user?.name}</p>
              <p className="text-gray-400">{session.user?.email}</p>
            </div>
          </div>

          <h3 className="mt-6 text-lg font-medium">Your Contributions</h3>
          <ul className="mt-3 text-gray-400">
            <li>🚀 Built 3 projects</li>
            <li>📚 Completed 5 courses</li>
            <li>🔥 Active since {new Date(session.user?.createdAt).getFullYear()}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
