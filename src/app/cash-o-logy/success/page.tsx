import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Success() {
  const router = useRouter();
  const { reference } = router.query;

  useEffect(() => {
    if (reference) {
      verifyPayment(reference as string);
    }
  }, [reference]);

  const verifyPayment = async (ref: string) => {
    try {
      const response = await axios.get(`/api/verify-payment?reference=${ref}`);
      if (response.data.status === 'success') {
        // Payment verified, redirect to thank-you page or deliver product
        alert('Payment successful! You now have access to Cash-o-logy.');
        // TODO: Redirect to a thank-you page or trigger product delivery
      } else {
        alert('Payment verification failed. Please contact support.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert('An error occurred. Please contact support.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Processing Payment...
        </h2>
        <p className="text-lg text-gray-800">
          Please wait while we verify your payment.
        </p>
      </div>
    </div>
  );
}