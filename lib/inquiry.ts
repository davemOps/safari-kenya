export interface InquiryPayload {
  firstName: string; lastName: string; email: string; phone: string; travelers: string; month: string;
  duration: string; styles: string[]; destinations: string; budget: string; message: string;
}
/**
 * TODO: connect to a backend (e.g. a Next.js route handler that sends via Resend and/or stores in Supabase).
 * Until then this returns { ok: false, connected: false } and the UI says so honestly.
 */
export async function submitInquiry(payload: InquiryPayload): Promise<{ ok: boolean; connected: boolean }> {
  void payload;
  return { ok: false, connected: false };
}
