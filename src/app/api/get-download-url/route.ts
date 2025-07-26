// app/api/get-download-url/route.ts

import {  NextResponse } from 'next/server';
import axios from 'axios';

const B2_KEY_ID = process.env.B2_KEY_ID;
const B2_APPLICATION_KEY = process.env.B2_APPLICATION_KEY;
const B2_BUCKET_NAME = process.env.B2_BUCKET_NAME;
const B2_BUCKET_ID = process.env.B2_BUCKET_ID;

export async function GET() {
    console.log(B2_KEY_ID)
    console.log(B2_APPLICATION_KEY)
    console.log(B2_BUCKET_NAME)
    console.log(B2_BUCKET_ID)

  try {
    // Step 1: Authenticate with Backblaze B2
    const authResponse = await axios.post(
      'https://api.backblazeb2.com/b2api/v2/b2_authorize_account',
      {},
      {
        auth: {
          username: B2_KEY_ID!,
          password: B2_APPLICATION_KEY!,
        },
      }
    );

    const { authorizationToken, apiUrl } = authResponse.data;

    // Step 2: Generate download authorization token
    const downloadResponse = await axios.post(
      `${apiUrl}/b2api/v2/b2_get_download_authorization`,
      {
        bucketId: B2_BUCKET_ID,
        fileNamePrefix: 'cashology.pdf',
        validDurationInSeconds: 3600,
      },
      {
        headers: {
          Authorization: authorizationToken,
        },
      }
    );

    const downloadAuthorizationToken = downloadResponse.data.authorizationToken;

    // Step 3: Construct download URL
    const downloadUrl = `https://f000.backblazeb2.com/file/${B2_BUCKET_NAME}/cashology.pdf?Authorization=${downloadAuthorizationToken}`;

    return NextResponse.json({ downloadUrl });
  } catch (error) {
    console.error('Backblaze error:', error);
    return NextResponse.json(
      { error: 'Failed to generate download URL' },
      { status: 500 }
    );
  }
}
