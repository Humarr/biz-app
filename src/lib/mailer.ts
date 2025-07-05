import nodemailer from 'nodemailer';
import { SESClient } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.AWS_SES_REGION,
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SES_SECRET_KEY!,
  },
});

export const transporter = nodemailer.createTransport({
  SES: { ses, aws: { SendRawEmailCommand: true } },
});
