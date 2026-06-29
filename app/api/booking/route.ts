import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { email, variables } = await req.json();

        const { data, error } = await resend.emails.send({
            from: "VersionOne Consultation <booking@umesi.xyz>",
            to: email,
            template: {
                id: "consultation-confirmation",
                variables,
            },
        });

        if (error) return Response.json({ error: error.message }, { status: 400 });
        return Response.json({ ok: true, id: data?.id });
    } catch (err) {
        console.error("Booking email error:", err);
        return Response.json({ error: "Failed to send" }, { status: 500 });
    }
}