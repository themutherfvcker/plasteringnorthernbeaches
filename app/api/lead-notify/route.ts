// /api/lead-notify — retired under LEADS-002 in favor of the central Supabase
// Edge Function `lead-ingest`. The forms now POST to /api/leads (durable
// capture path) in parallel with the existing browser-direct Web3Forms
// backup. This route no longer sends any notification and no longer holds any
// credentials.
export const runtime = 'nodejs';

export async function POST(): Promise<Response> {
  return Response.json(
    { ok: false, error: 'deprecated' },
    { status: 410, headers: { 'Cache-Control': 'no-store' } },
  );
}
