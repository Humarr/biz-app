/* eslint-disable @typescript-eslint/no-explicit-any */
// File: /app/api/get-download-url/route.ts

import {  NextResponse } from 'next/server';
import axios from 'axios';

const B2_KEY_ID = process.env.B2_KEY_ID;
const B2_APPLICATION_KEY = process.env.B2_APPLICATION_KEY;
const B2_BUCKET_NAME = 'digital-products';
const B2_FILE_PATH = 'The Female Code How to Talk, Flirt, and Make Women Addicted to You.pdf';

export async function GET() {
    // const fileName = new URL(req.url).searchParams.get('file') || 'Cashology.pdf';

  if (!B2_KEY_ID || !B2_APPLICATION_KEY || !B2_BUCKET_NAME) {
    console.error('Missing Backblaze environment variables');
    return NextResponse.json(
      { error: 'Server configuration error: Missing Backblaze credentials' },
      { status: 500 }
    );
  }

  try {
    // Step 1: Authenticate
    const authResponse = await axios.post(
      'https://api.backblazeb2.com/b2api/v2/b2_authorize_account',
      {},
      {
        auth: {
          username: B2_KEY_ID,
          password: B2_APPLICATION_KEY,
        },
      }
    );

    const { authorizationToken, apiUrl, downloadUrl, accountId } = authResponse.data;
    console.log("downloadUrl: ", downloadUrl)

    // Step 2: Confirm bucket exists
    const listBucketsResponse = await axios.post(
      `${apiUrl}/b2api/v2/b2_list_buckets`,
      { accountId },
      { headers: { Authorization: authorizationToken } }
    );

    const bucket = listBucketsResponse.data.buckets.find(
      (b: any) => b.bucketName === B2_BUCKET_NAME
    );

    if (!bucket) {
      console.error(`Bucket ${B2_BUCKET_NAME} not found`);
      return NextResponse.json(
        { error: `Bucket ${B2_BUCKET_NAME} does not exist` },
        { status: 404 }
      );
    }

    // Step 3: Confirm file exists
    const listFilesResponse = await axios.post(
      `${apiUrl}/b2api/v2/b2_list_file_names`,
      {
        bucketId: bucket.bucketId,
        startFileName: B2_FILE_PATH,
        maxFileCount: 1,
      },
      {
        headers: { Authorization: authorizationToken },
      }
    );

    const fileExists = listFilesResponse.data.files.find(
      (f: any) => f.fileName === B2_FILE_PATH
    );

    if (!fileExists) {
      console.error(`File ${B2_FILE_PATH} not found in bucket ${B2_BUCKET_NAME}`);
      return NextResponse.json(
        { error: `File ${B2_FILE_PATH} not found` },
        { status: 404 }
      );
    }

    // Step 4: Generate download auth token
    const downloadAuthResponse = await axios.post(
      `${apiUrl}/b2api/v2/b2_get_download_authorization`,
      {
        bucketId: bucket.bucketId,
        fileNamePrefix: B2_FILE_PATH,
        validDurationInSeconds: 3600, // 1-hour expiry
      },
      {
        headers: { Authorization: authorizationToken },
      }
    );

    const downloadAuthorizationToken = downloadAuthResponse.data.authorizationToken;

    // Step 5: Build download URL
    const downloadUrlFinal = `https://f005.backblazeb2.com/file/${B2_BUCKET_NAME}/${B2_FILE_PATH}?Authorization=${downloadAuthorizationToken}`;

    return NextResponse.json({ downloadUrl: downloadUrlFinal });
  } catch (error: any) {
    console.error('Backblaze error:', error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data?.message || 'Failed to generate download URL' },
      { status: error.response?.status || 500 }
    );
  }
}
