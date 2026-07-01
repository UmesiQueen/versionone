import { Resend } from "resend";
import { verifyTurnstile } from "@/lib/turnstile";

const resend = new Resend(process.env.RESEND_API_KEY);
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "";
const INTERNAL_NOTIFY_EMAIL = process.env.INTERNAL_NOTIFY_EMAIL ?? "";

export async function POST(req: Request) {
    try {
        const { email, variables, turnstileToken } = await req.json();

        if (!turnstileToken) {
            return Response.json({ error: "Missing bot check token" }, { status: 400 });
        }

        const isHuman = await verifyTurnstile(turnstileToken);
        if (!isHuman) {
            return Response.json({ error: "Bot check failed" }, { status: 403 });
        }

        const { error } = await resend.emails.send({
            // 1. Both client and user get this email for easy reply
            from: RESEND_FROM_EMAIL,
            to: email,
            bcc: INTERNAL_NOTIFY_EMAIL,
            replyTo: email,
            template: { id: "contact-confirmation", variables, },
        });

        if (error) return Response.json({ error: error.message }, { status: 400 });
        return Response.json({ ok: true });
    } catch (err) {
        console.error("Contact email error:", err);
        return Response.json({ error: "Failed to send" }, { status: 500 });
    }
}
