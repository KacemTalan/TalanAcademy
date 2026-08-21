import { createClient } from '@supabase/supabase-js';

const BUCKET = 'videos';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('FATAL: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required for video uploads.');
  process.exit(1);
}

// Service-role client: bypasses RLS, server-side only, never expose to the browser.
const admin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

let bucketReady = null;

export async function ensureBucket() {
  if (!bucketReady) {
    bucketReady = (async () => {
      const { data: existing } = await admin.storage.getBucket(BUCKET);
      if (!existing) {
        const { error } = await admin.storage.createBucket(BUCKET, {
          public: false,
          fileSizeLimit: '50MB',
          allowedMimeTypes: ['video/mp4', 'video/webm']
        });
        if (error && !/already exists/i.test(error.message)) throw error;
      }
    })();
  }
  return bucketReady;
}

export async function uploadVideoBuffer(path, buffer, contentType = 'video/mp4') {
  await ensureBucket();
  const { error } = await admin.storage.from(BUCKET).upload(path, buffer, {
    contentType,
    upsert: true
  });
  if (error) throw error;
}

export async function createSignedUploadUrl(path) {
  await ensureBucket();
  const { data, error } = await admin.storage.from(BUCKET).createSignedUploadUrl(path, { upsert: true });
  if (error) throw error;
  return data; // { signedUrl, path, token }
}

export async function createSignedPlaybackUrl(path, expiresIn = 6 * 60 * 60) {
  const { data, error } = await admin.storage.from(BUCKET).createSignedUrl(path, expiresIn);
  if (error) throw error;
  return data.signedUrl;
}

export async function removeVideo(path) {
  const { error } = await admin.storage.from(BUCKET).remove([path]);
  if (error) throw error;
}
