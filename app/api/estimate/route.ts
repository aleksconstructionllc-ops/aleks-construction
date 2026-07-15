import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();

    const name = escapeHtml(body.name);
    const phone = escapeHtml(body.phone);
    const email = escapeHtml(body.email);
    const address = escapeHtml(body.address);
    const address2 = escapeHtml(body.address2);
    const city = escapeHtml(body.city);
    const state = escapeHtml(body.state);
    const zip = escapeHtml(body.zip);
    const service = escapeHtml(body.service);
    const budget = escapeHtml(body.budget);
    const timeline = escapeHtml(body.timeline);
    const description = escapeHtml(body.description);

    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !city ||
      !state ||
      !zip ||
      !service ||
      !budget ||
      !timeline ||
      !description
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Aleks Construction <noreply@aleksconstruction.com>",
      to: ["aleksconstructionllc@gmail.com"],
      replyTo: email,
      subject: `New Estimate Request - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #0f172a;">
          <div style="background: #f97316; padding: 24px; color: white;">
            <h1 style="margin: 0; font-size: 26px;">
              New Estimate Request
            </h1>
            <p style="margin: 8px 0 0;">
              Submitted through the Aleks Construction website
            </p>
          </div>

          <div style="padding: 28px; background: #ffffff; border: 1px solid #e2e8f0;">
            <h2 style="margin-top: 0;">Customer Information</h2>

            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Email Address:</strong> ${email}</p>

            <hr style="margin: 28px 0; border: 0; border-top: 1px solid #e2e8f0;" />

            <h2>Project Address</h2>

            <p><strong>Street Address:</strong> ${address}</p>
            <p>
              <strong>Apartment / Suite:</strong>
              ${address2 || "Not provided"}
            </p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>ZIP Code:</strong> ${zip}</p>

            <hr style="margin: 28px 0; border: 0; border-top: 1px solid #e2e8f0;" />

            <h2>Project Details</h2>

            <p><strong>Requested Service:</strong> ${service}</p>
            <p><strong>Estimated Budget:</strong> ${budget}</p>
            <p><strong>Desired Timeline:</strong> ${timeline}</p>

            <h3 style="margin-top: 28px;">Project Description</h3>

            <div style="white-space: pre-wrap; line-height: 1.7; background: #f8fafc; padding: 18px; border-radius: 10px;">
              ${description}
            </div>
          </div>
        </div>
      `,
      text: `
New Estimate Request

CUSTOMER INFORMATION

Full Name: ${name}
Phone Number: ${phone}
Email Address: ${email}

PROJECT ADDRESS

Street Address: ${address}
Apartment / Suite: ${address2 || "Not provided"}
City: ${city}
State: ${state}
ZIP Code: ${zip}

PROJECT DETAILS

Requested Service: ${service}
Estimated Budget: ${budget}
Desired Timeline: ${timeline}

PROJECT DESCRIPTION

${description}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: error.message || "Resend rejected the email request.",
        },
        { status: 500 }
      );
    }

    console.log("Estimate email sent successfully:", data?.id);

    return NextResponse.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Estimate route error:", error);

    return NextResponse.json(
      { error: "Failed to send the estimate request." },
      { status: 500 }
    );
  }
}