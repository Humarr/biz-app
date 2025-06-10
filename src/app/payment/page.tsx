/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
// import Image from 'next/image';

const PaymentPage = () => {
  return (
    <section className="section-py bg-background min-h-screen">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline2 uppercase text-accent mb-4">
            ALMOST THERE, SOLDIER
          </h1>
          <p className="text-xl">
            One click stands between you and the business truth bomb that'll change everything.
          </p>
        </div>

        {/* Payment Options Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="p-6 bg-accent text-white">
            <h2 className="text-2xl font-headline2 uppercase">
              Pick Your Weapon:
            </h2>
          </div>

          <div className="p-6">
            {/* Selar Payment Option */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔥</span>
                <h3 className="text-xl font-bold">Instant Access (Recommended)</h3>
              </div>
              <p className="text-secondary mb-4">
                Pay with card or bank transfer and get the book + bonuses immediately.
              </p>
             
              <Link href="/payment" passHref>
                <button className="btn-primary w-full py-4 text-lg">
                  PAY ₦4,500 WITH SELAR (INSTANT DELIVERY)
                </button>
              </Link>
              {/* <div className="flex items-center justify-center mt-4">
                <Image 
                  src="/payment-logos.png" 
                  alt="Accepted payment methods" 
                  className="h-8"
                  width={200}
                  height={50}
                />
              </div> */}
            </div>

            {/* Bank Transfer Option */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🏦</span>
                <h3 className="text-xl font-bold">Direct Transfer</h3>
              </div>
              <p className="text-secondary mb-4">
                For those who prefer sending money directly. Delivery within 15 minutes after payment confirmation.
              </p>

              <div className="bg-note p-4 rounded-lg mb-4">
                <h4 className="font-bold text-primary mb-2">ACCOUNT DETAILS:</h4>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-secondary">Bank Name:</span>
                    <span className="font-bold">Moniepoint MFB</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-secondary">Account Name:</span>
                    <span className="font-bold">Throsell Media</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-secondary">Account Number:</span>
                    <span className="font-bold">1234567890</span>
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg border border-accent mb-4">
                <h4 className="font-bold text-primary mb-2">AFTER PAYMENT:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-secondary">
                  <li>Screenshot your payment receipt</li>
                  <li>WhatsApp it to <span className="font-bold">+234 812 345 6789</span></li>
                  <li>You'll get your book + bonuses within 15 minutes</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Instructions */}
        <div className="bg-note p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-headline2 uppercase text-primary mb-4">
            HOW YOU'LL GET THE BOOK:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">1</div>
              <h3 className="font-bold mb-2">Complete Payment</h3>
              <p className="text-secondary">Via Selar or direct transfer</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">2</div>
              <h3 className="font-bold mb-2">Instant Delivery</h3>
              <p className="text-secondary">PDF + bonuses sent to your email</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">3</div>
              <h3 className="font-bold mb-2">Start Building</h3>
              <p className="text-secondary">Apply the tactics immediately</p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mb-12">
          <h2 className="text-2xl font-headline2 uppercase text-center mb-6">
            WHAT PEOPLE SAY AFTER READING:
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic text-secondary mb-4">
                "I made ₦85k in 3 days after implementing Chapter 7. This book doesn't play."
              </p>
              <p className="font-bold">- Tunde, Lagos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic text-secondary mb-4">
                "Finally someone who cuts through the bullshit. Refund policy? Didn't need it."
              </p>
              <p className="font-bold">- Amina, Abuja</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-headline2 uppercase mb-6">
            STOP THINKING. START DOING.
          </h3>
          <p className="text-xl mb-8">
            Your future self will thank you for this.
          </p>
          <button className="btn-primary px-12 py-5 text-xl animate-float">
            GET THE BOOK NOW - ₦4,500
          </button>
          <p className="text-secondary mt-4">
            (Price increases to ₦7,500 after 50 more copies)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;