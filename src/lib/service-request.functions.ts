import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  industry: z.string().trim().min(1).max(120),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(20),
  location: z.string().trim().min(1).max(120),
  service: z.string().trim().min(1).max(160),
  message: z.string().trim().max(1000).optional().default(""),
});

export const submitServiceRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("service_requests").insert({
      industry: data.industry,
      name: data.name,
      email: data.email,
      phone: data.phone,
      location: data.location,
      service: data.service,
      message: data.message,
    });
    if (error) throw new Error("Could not save your request. Please try again.");

    try {
      const { notifyServiceRequest } = await import("./service-request-email.server");
      await notifyServiceRequest(data);
    } catch (e) {
      console.error("service request notification failed", e);
    }

    return { ok: true as const };
  });
