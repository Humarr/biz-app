'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function Congrats() {
  const params = useSearchParams();
  const reference = params.get('reference');
  console.log("reference: ", reference)
  console.log(params)
  const [status, setStatus] = useState<'verifying' | 'success' | 'failed'>('verifying');
  const [errorMessage, setErrorMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  useEffect(() => {
    if (reference) {
      verifyPayment(reference);
    } else {
      setStatus('failed');
      setErrorMessage('No payment reference found. Please complete your purchase to access the eBook.');
    }
  }, [reference]);

  const verifyPayment = async (ref: string) => {
    try {
      const response = await axios.get(`/api/verify-payment?reference=${ref}`);
      if (response.data.status === 'success') {
        // Fetch Backblaze download URL
        const downloadResponse = await axios.get('/api/get-download-url');
        if (downloadResponse.data.downloadUrl) {
          setDownloadUrl(downloadResponse.data.downloadUrl);
          setStatus('success');
        } else {
          setStatus('failed');
          setErrorMessage('Failed to generate download link. Please contact support.');
        }
      } else {
        setStatus('failed');
        setErrorMessage('Payment verification failed. Please contact support.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('failed');
      setErrorMessage('An error occurred while verifying your payment or generating the download link. Please contact support.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl w-full">
        {status === 'verifying' && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Processing Your Purchase...
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Please wait while we verify your Cash-o-logy purchase and prepare your eBook download.
            </p>
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 mx-auto"></div>
          </>
        )}

        {status === 'success' && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Congratulations! Your Purchase Was Successful!
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              You’ve secured <span className="font-bold">Cash-o-logy</span> for ₦25,000! You’re now ready to transform your financial future with the system that took me from ₦100 to ₦2.5 million monthly.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              <span className="font-bold">Your eBook is ready!</span> Click below to download Cash-o-logy instantly. We’ve also sent access details to your email (check spam/junk). Can’t access it? Contact <a href="mailto:support@cashology.com" className="text-blue-600 underline">support@cashology.com</a>.
            </p>
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-6">
              <p className="text-lg text-gray-800 font-semibold">
                Start your journey now—unlock the secrets to building a profitable business in record time!
              </p>
            </div>
            <a
              href={downloadUrl}
              download="cashology.pdf"
              className="bg-green-500 text-white py-4 px-8 rounded-full font-bold text-xl hover:bg-green-600 transform hover:scale-105 transition-all duration-200 inline-block mb-4"
            >
              Download Cash-o-logy eBook Now
            </a>
            <Link
              href="/dashboard" // Replace with actual course access URL, if applicable
              className="bg-blue-500 text-white py-4 px-8 rounded-full font-bold text-xl hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Access Members’ Area
            </Link>
            <p className="text-sm text-gray-600 mt-6">
              We’re thrilled to have you on board! Your success story starts today. Questions? Contact <a href="mailto:support@cashology.com" className="text-blue-600 underline">support@cashology.com</a>.
            </p>
          </>
        )}

        {status === 'failed' && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Oops, Something Went Wrong
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              {errorMessage}
            </p>
            <Link
              href="/support" // Replace with actual support page URL
              className="bg-red-500 text-white py-4 px-8 rounded-full font-bold text-xl hover:bg-red-600 transform hover:scale-105 transition-all duration-200"
            >
              Contact Support
            </Link>
            <p className="text-sm text-gray-600 mt-6">
              Need to retry your purchase? <Link href="/" className="text-blue-600 underline">Go back to the sales page</Link>.
            </p>
          </>
        )}
      </div>
    </div>
  );
}