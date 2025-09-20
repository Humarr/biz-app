/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function Congrats() {
  const searchParams = useSearchParams();
  const reference = searchParams.get('reference');
  const [status, setStatus] = useState<'verifying' | 'success' | 'failed'>('verifying');
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'failed'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  useEffect(() => {
    if (reference) {
      verifyPayment(reference);
    } else {
      setStatus('failed');
      setErrorMessage('No payment reference found. Please complete your purchase to access the Cash-o-logy eBook.');
    }
  }, [reference]);

  const verifyPayment = async (ref: string) => {
    try {
      const response = await axios.get(`/api/verify-payment?reference=${ref}`);
      if (response.data.status === 'success') {
        const downloadResponse = await axios.get('/api/get-download-url');
        if (downloadResponse.data.downloadUrl) {
          setDownloadUrl(downloadResponse.data.downloadUrl);
          setStatus('success');
        } else {
          setStatus('failed');
          setErrorMessage('Failed to generate eBook download link. Please contact support.');
        }
      } else {
        setStatus('failed');
        setErrorMessage('Payment verification failed. Please contact support.');
      }
    } catch (error: any) {
      console.error('Error:', error.response?.data || error.message);
      setStatus('failed');
      setErrorMessage(
        error.response?.data?.error || 'An error occurred while verifying your payment or generating the download link. Please contact support.'
      );
    }
  };

  const handleDownload = async () => {
    setDownloadStatus('downloading');
    try {
      const response = await axios.get(downloadUrl, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'cashology.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setDownloadStatus('idle');
    } catch (error) {
      console.error('Download error:', error);
      setStatus('failed');
      setDownloadStatus('idle');
      setErrorMessage('Failed to download the eBook. Please contact support.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center max-w-xl w-full">
        {status === 'verifying' && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-3">
              Processing Payment...
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Please wait while we verify your Cash-o-logy payment...
            </p>
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-green-600 mx-auto"></div>
          </>
        )}

        {status === 'success' && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-3">
              Congratulations! Payment Successful!
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              You’ve secured <span className="font-bold">Cash-o-logy</span> for ₦8,999! You’re now ready to transform your financial future with the system that took me from ₦100 to ₦500k+ monthly.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-bold">Your eBook is ready!</span> Click below to download Cash-o-logy instantly. Have issues? Contact <a href="mailto:thecashologists00@gmail.com" className="text-blue-600 underline">thecashologists00@gmail.com</a>.
            </p>
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-6">
              <p className="text-lg text-gray-700 font-semibold">
                Start your journey now—unlock the secrets to building a profitable business in record time!
              </p>
            </div>
            <button
              onClick={handleDownload}
              disabled={downloadStatus === 'downloading'}
              className={`bg-green-500 text-white py-4 px-8 rounded-full font-bold text-xl hover:bg-green-600 transform hover:scale-105 transition-all duration-200 inline-block mb-4 ${
                downloadStatus === 'downloading' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {downloadStatus === 'downloading' ? 'Downloading...' : 'Download Cash-o-logy eBook Now'}
            </button>
            {downloadStatus === 'downloading' && (
              <div className="animate-spin rounded-full h-10 w-10 border-2 border-green-600 mx-auto mt-4"></div>
            )}
            <p className="text-sm text-gray-600 mt-6">
              We’re thrilled to have you on board! Your success story starts today. Questions? Contact <a href="mailto:thecashologists00@gmail.com" className="text-blue-600 underline">thecashologists00@gmail.com</a>.
            </p>
          </>
        )}

        {status === 'failed' && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-3">
              Oops, Something Went Wrong
            </h2>
            <p className="text-lg text-gray-700 mb-6">{errorMessage}</p>
            <Link
              href="mailto:thecashologists00@gmail.com"
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