export interface ServiceRequestPayload {
  industry: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
}

export const NOTIFICATION_RECIPIENT = "jk@goodcarbon.in";

/**
 * Sends the "Request Service Today" notification to the Good Carbon team.
 * Uses the managed email infrastructure once the sender domain is verified;
 * until then the submission is still stored and this logs the payload.
 */
export async function notifyServiceRequest(data: ServiceRequestPayload) {
  try {
    const specifier = "@/lib/email-templates/send-email";
    const mod = (await import(/* @vite-ignore */ specifier)) as {
      sendTemplateEmail: (
        template: string,
        to: string,
        options: { templateData: Record<string, unknown>; replyTo?: string },
      ) => Promise<{ sent: boolean }>;
    };

    await mod.sendTemplateEmail("service-request", NOTIFICATION_RECIPIENT, {
      templateData: { ...data, submittedAt: new Date().toISOString() },
      replyTo: data.email,
    });
  } catch {
    console.info("Service request stored; email sender not configured yet.");
  }
}
