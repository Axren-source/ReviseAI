export type SendEmailPayload = {
  from: string;
  to: string[];
  subject: string;
  html: string;
};

/**
 * Lightweight Resend SDK-style client.
 *
 * Uses the official Resend REST endpoint and mirrors the `.emails.send()`
 * usage so this can be swapped with the npm SDK without route changes.
 */
export class Resend {
  constructor(private readonly apiKey: string) {}

  public readonly emails = {
    send: async (payload: SendEmailPayload) => {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(`Resend API error: ${details}`);
      }

      return response.json();
    },
  };
}
