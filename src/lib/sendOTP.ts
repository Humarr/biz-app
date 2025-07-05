import { transporter } from './mailer';

export async function sendOTP(email: string, otp: string) {
  await transporter.sendMail({
    from: '"Profits 24 Traders" <admin@profits24traders.com>',
    to: email,
    subject: 'Your OTP Code',
    html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
  });
}
