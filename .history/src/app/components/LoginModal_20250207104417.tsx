import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#2a2a2a] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Login with GitHub</DialogTitle>
        </DialogHeader>
        <Button
          onClick={() => signIn("github")}
          className="w-full bg-[#3a3a3a] border-gray-600 hover:bg-[#4a4a4a]"
        >
          <FaGithub className="mr-2 h-4 w-4" /> Sign in with GitHub
        </Button>
      </DialogContent>
    </Dialog>
  );
}
