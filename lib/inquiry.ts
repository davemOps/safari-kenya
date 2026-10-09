import emailjs from "@emailjs/browser";

export interface InquiryPayload {
  firstName: string; lastName: string; email: string; phone: string; travelers: string; month: string;
  duration: string; styles: string[]; destinations: string; budget: string; message: string;
}
export type InquiryResult = "sent" | "not-configured" | "error";


export async function submitInquiry(p: InquiryPayload): Promise<InquiryResult> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (!serviceId || !templateId || !publicKey) return "not-configured";

  const templateParams = {
    first_name: p.firstName,
    last_name: p.lastName,
    full_name: `${p.firstName} ${p.lastName}`.trim(),
    reply_to: p.email,
    phone: p.phone || "Not provided",
    travelers: p.travelers || "Not provided",
    travel_month: p.month || "Not provided",
    duration: p.duration || "Not provided",
    travel_style: p.styles.length ? p.styles.join(", ") : "Not provided",
    destinations: p.destinations || "Not provided",
    budget: p.budget || "Not provided",
    message: p.message || "No message",
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, { publicKey });
    return "sent";
  } catch (err) {
    console.error("EmailJS error:", err);
    return "error";
  }
}