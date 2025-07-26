// app/api/paystack/initialize/route.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY; // Store in .env.local
const CALLBACK_URL = 'http://localhost:3000/success'; // Update this in production

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, amount } = body;

    if (!email || !amount) {
      return NextResponse.json(
        { error: 'Email and amount are required' },
        { status: 400 }
      );
    }

    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: amount * 100, // Convert to kobo
        callback_url: CALLBACK_URL,
        metadata: {
          product: 'Cash-o-logy',
        },
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const { authorization_url, access_code, reference } = response.data.data;

    return NextResponse.json({
      authorization_url,
      access_code,
      reference,
    });
  } catch (error) {
    console.error('Paystack error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize transaction' },
      { status: 500 }
    );
  }
}
