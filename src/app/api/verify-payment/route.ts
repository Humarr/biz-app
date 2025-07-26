// app/api/verify-payment/route.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');
    console.log("reference: ", reference)

    if (!reference) {
      return NextResponse.json(
        { error: 'Reference is required' },
        { status: 400 }
      );
    }

    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const { status, data } = response.data;
    console.log("status: ", status)
    console.log("data: ", data)

    if (status && data.status === 'success') {
      // TODO: Save transaction details to your database
      // TODO: Grant user access to Cash-o-logy (e.g., send download link)
      return NextResponse.json({ status: 'success', data });
    } else {
      return NextResponse.json(
        { error: 'Payment not successful' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { error: 'Failed to verify transaction' },
      { status: 500 }
    );
  }
}
