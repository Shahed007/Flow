"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type ModalProps = {
    isOpen: boolean | undefined,
    closeModal: () => void,
    children: ReactNode,
}

export const Modal = ({isOpen, closeModal, children}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="flex w-full max-w-[500px] sm:mx-0 mx-3">
        {children}
      </DialogContent>
    </Dialog>
  );
};
