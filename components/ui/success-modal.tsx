"use client"

import { CheckCircle, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import Link from "next/link"

interface SuccessModalProps {
    open: boolean
    onClose: () => void
    calendlyUrl?: string
    name?: string
    className?: string
    redirectDelay?: number
}

const SuccessModal = ({
    open,
    onClose,
    calendlyUrl,
    name,
    className,
    redirectDelay = 5000,
}: SuccessModalProps) => {
    const [countdown, setCountdown] = useState(redirectDelay / 1000)

    // Reset countdown when modal opens
    useEffect(() => {
        if (!open) return
        setCountdown(redirectDelay / 1000)

        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(interval)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        // Redirect when countdown ends
        const timeout = setTimeout(() => {
            if (calendlyUrl) window.location.href = calendlyUrl
            onClose()
        }, redirectDelay)

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }
    }, [open, calendlyUrl, redirectDelay, onClose])

    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        if (open) document.addEventListener("keydown", handleKey)
        return () => document.removeEventListener("keydown", handleKey)
    }, [open, onClose])

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [open])

    if (!open) return null

    const progress = (countdown / (redirectDelay / 1000)) * 100

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div
                className={cn(
                    "relative z-10 w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-xl",
                    className
                )}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center text-center gap-4">
                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1.5">
                        <h2
                            id="success-modal-title"
                            className="text-xl font-semibold tracking-tight"
                        >
                            {name ? `Thank you, ${name.split(" ")[0]}!` : "Submission Received!"}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your booking request has been sent successfully. We'll review your details
                            and get back to you shortly. Redirecting you to book a time slot in{" "}
                            <span className="font-semibold text-foreground">{countdown}s</span>
                        </p>
                    </div>

                    {/* Countdown progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <hr className="w-full border-border" />

                    {/* Actions */}
                    <div className="flex w-full flex-col gap-3">
                        {calendlyUrl && (
                            <Button asChild size="lg" className="w-full rounded-full">
                                <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Book Now
                                </Link>
                            </Button>
                        )}
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={onClose}
                            className="w-full rounded-full"
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal