import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const INTERNAL_NOTIFY_EMAIL = process.env.INTERNAL_NOTIFY_EMAIL ?? "";
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "";

async function verifyTurnstile(token: string): Promise<boolean> {
    const res = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                secret: process.env.TURNSTILE_SECRET_KEY,
                response: token,
            }),
        },
    );
    const data = await res.json();
    return data.success === true;
}

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

        const { data, error } = await resend.batch.send([
            {
                // 1. Client-facing confirmation
                from: RESEND_FROM_EMAIL,
                to: email,
                template: { id: "consultation-confirmation", variables, },
            },
            {
                // 2. Internal alert
                from: RESEND_FROM_EMAIL,
                to: INTERNAL_NOTIFY_EMAIL,
                replyTo: email,
                subject: `New consultation alert from ${variables.client_name}`,
                template: { id: "new-consultation-internal-alert", variables },
            }
        ]);

        if (error) return Response.json({ error: error.message }, { status: 400 });
        return Response.json({ ok: true, id: data?.id });
    } catch (err) {
        console.error("Booking email error:", err);
        return Response.json({ error: "Failed to send" }, { status: 500 });
    }
}