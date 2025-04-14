// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// // Validate environment variables
// if (!process.env.RESEND_API_KEY) {
//   throw new Error('RESEND_API_KEY environment variable is not set');
// }

// if (!process.env.FROM_EMAIL) {
//   throw new Error('FROM_EMAIL environment variable is not set');
// }

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);

//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       text: `Thank you for contacting us!\n\nNew message submitted:\n\n${message}`,
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
