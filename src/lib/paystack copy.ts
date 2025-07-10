// lib/paystack.ts

import { FormData, PaystackPop } from '@/type'

export function launchPaystackModal(user: FormData, sessionId: string): void {
  const amountInKobo = 300000 // ₦3,000
  const paystackPop = (window as unknown as { PaystackPop: PaystackPop }).PaystackPop

  const handler = paystackPop.setup({
    key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    email: user.email,
    amount: amountInKobo,
    currency: 'NGN',
    ref: `${Date.now()}`,
    metadata: {
      custom_fields: [
        { display_name: 'Name', variable_name: 'name', value: user.name },
        { display_name: 'Phone', variable_name: 'phone', value: user.phone },
        { display_name: 'Session ID', variable_name: 'sessionId', value: sessionId },
      ],
    },
    callback: (response) => {
      window.location.href = `/thank-you?ref=${response.reference}`
    },
    onClose: () => {
      alert('Payment window closed.')
    },
  })

  handler.openIframe()
}
