"use client"
import { useRouter } from "next/router"
import { useState } from "react
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import LoginModal from "./Components/LoginModal"
import { useSession, signOut } from "next-auth/react"
import { Router } from "lucide-react"
export default function Page() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const { data: session } = useSession()
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-12 py-6">
        <Link href="/" className="text-2xl font-semibold">
          Pawvan.com
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/courses" className="hover:text-gray-300 text-lg">
            Courses
          </Link>
          {!session ? (
            <Button
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-md px-6 py-2 text-lg"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Login
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src={session.user?.image || "/placeholder.svg"} />
                <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
              </Avatar>
              <Button
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-md px-6 py-2 text-lg"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </nav>
      <main className="container mx-auto px-12 py-20 grid md:grid-cols-2 gap-16 items-center">
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
          <Button
          onClick={()=> R
          className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-lg px-8 py-4 rounded-md">
            Get Started
          </Button>
          <div className="flex items-center gap-6">
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20 border border-gray-800 shadow-lg">
          <div className="absolute top-0 left-0 right-0 h-10 bg-[#2a2a2a] flex items-center gap-2 px-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="mt-10 w-full h-[calc(100%-2.5rem)] bg-gray-900">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(831)-eTbFo0q4RbXqcci5upH0ctgAAM8MXW.png"
              alt="Tutorial video preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  )
}
