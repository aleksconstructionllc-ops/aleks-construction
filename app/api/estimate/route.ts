import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      phone,
      email,
      address,
      address2,
      city,
      state,
      zip,
      service,
      budget,
      timeline,
      description,
    } = await req.json();

    const { error } = await resend.emails.send({
      from: "Aleks Construction <noreply@aleksconstructionllc.com>",
      to: ["aleksconstructionllc@gmail.com"],
      subject: `New Estimate Request - ${service}`,
      html: `
        <h2>New Estimate Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr/>

        <p><strong>Street Address:</strong> ${address}</p>
        <p><strong>Address 2:</strong> ${address2}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>ZIP:</strong> ${zip}</p>

        <hr/>

        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>

        <hr/>

        <h3>Project Description</h3>

        <p>${description}</p>
      `,
    });

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send estimate." },
      { status: 500 }
    );
  }
}