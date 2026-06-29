"use client";

import { Calendar, CheckCircle, RotateCcw, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModalProps {
  onClose: () => void;
  calendlyUrl?: string;
  name?: string;
  variant?: "success" | "error";
  duration?: number;
}

const variantStyles = {
  success: {
    icon: CheckCircle,
    iconClassName: "text-green-600 bg-green-100",
    titleClassName: "text-green-700",
  },
  error: {
    icon: X,
    iconClassName: "text-red-600 bg-red-100",
    titleClassName: "text-red-700",
  },
} as const;

export default function Modal({
  onClose,
  calendlyUrl,
  name,
  variant = "success",
  duration = 3000,
}: ModalProps) {
  const [openModal, setOpenModal] = React.useState(true);
  const initialCount = duration / 1000;
  const [countdown, setCountdown] = React.useState(initialCount);

  React.useEffect(() => {
    if (!openModal) return;
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [openModal]);

  const v = variantStyles[variant];
  const Icon = v.icon;

  const isRedirect = variant === "success" && !!calendlyUrl;
  const hasAction = isRedirect || variant === "error";

  const title =
    variant === "error"
      ? "Something went wrong"
      : name
        ? `Thank you, ${name.split(" ")[0]}!`
        : "Submission Received!";

  const description =
    variant === "error" ? (
      "We couldn't send your request. Please try again."
    ) : isRedirect ? (
      <>
        Request sent! Taking you to book a time slot in{" "}
        <span className="font-semibold text-foreground">{countdown}s</span>{" "}
      </>
    ) : (
      "Your request has been received — we'll be in touch shortly."
    );

  // Closes the modal — and, in the redirect case, navigates first.
  const closeModal = React.useCallback(() => {
    if (isRedirect && calendlyUrl)
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    onClose();
  }, [isRedirect, calendlyUrl, onClose]);

  React.useEffect(() => {
    if (!openModal) return;
    const timeout = setTimeout(closeModal, duration);
    return () => clearTimeout(timeout);
  }, [openModal, duration, closeModal]);

  const handleOpenChange = (open: boolean) => {
    if (open) return;
    setOpenModal(false);
    closeModal();
  };

  if (!openModal) return null;

  return (
    <Dialog open={openModal} onOpenChange={handleOpenChange}>
      <DialogContent className="flex flex-col items-center text-center gap-4 p-4">
        <DialogDescription className="sr-only">
          form {variant} modal
        </DialogDescription>

        {/* Icon */}
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full",
            v.iconClassName,
          )}
        >
          <Icon className="h-8 w-8" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1.5">
          <DialogTitle
            className={cn(
              "text-xl font-semibold tracking-tight",
              v.titleClassName,
            )}
          >
            {title}
          </DialogTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Auto-close countdown bar — shown for every variant, animated in CSS */}
        {isRedirect && (
          <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-primary rounded-full origin-left countdown-shrink"
              style={{ animationDuration: `${duration}ms` }}
            />
          </div>
        )}

        {/* Actions */}
        {hasAction && (
          <>
            <hr className="w-full border-border" />
            <div className="flex w-full flex-col gap-3">
              {isRedirect && calendlyUrl && (
                <Button asChild size="xl" className="w-full rounded-full">
                  <Link
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Link>
                </Button>
              )}

              {variant === "error" && (
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full rounded-full"
                  onClick={() => handleOpenChange(false)}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
