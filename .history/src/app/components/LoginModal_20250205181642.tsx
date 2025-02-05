/*@
this code belongs to THE AUTHOR : pawvan
using of this code without any access from the author can lead to prohibition
@*/
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#2a2a2a] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Login</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" className="bg-[#3a3a3a] border-gray-600" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="bg-[#3a3a3a] border-gray-600" />
          </div>
          <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9]">Login</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#2a2a2a] px-2 text-gray-400">Or continue with</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline" className="bg-[#3a3a3a] border-gray-600 hover:bg-[#4a4a4a]">
            <FaGoogle className="mr-2 h-4 w-4" /> Google
          </Button>
          <Button variant="outline" className="bg-[#3a3a3a] border-gray-600 hover:bg-[#4a4a4a]">
            <FaGithub className="mr-2 h-4 w-4" /> GitHub
          </Button>
          <Button variant="outline" className="bg-[#3a3a3a] border-gray-600 hover:bg-[#4a4a4a]">
            <FaTwitter className="mr-2 h-4 w-4" /> Twitter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

