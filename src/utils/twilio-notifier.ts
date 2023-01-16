import { Twilio } from "twilio";

export async function sendSMS(content: string) {
  const {
    FROM_PHONE_NUMBER,
    TO_PHONE_NUMBER,
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
  } = process.env;

  if (
    !FROM_PHONE_NUMBER ||
    !TO_PHONE_NUMBER ||
    !TWILIO_ACCOUNT_SID ||
    !TWILIO_AUTH_TOKEN
  ) {
    throw new Error(`Required environment variable missing`);
  }
  const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

  await client.messages.create({
    body: content,
    to: TO_PHONE_NUMBER,
    from: FROM_PHONE_NUMBER,
  });
}
