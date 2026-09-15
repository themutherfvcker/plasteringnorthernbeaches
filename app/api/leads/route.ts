import { captureLead } from '../../../lib/lead-pipeline';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request: Request): Promise<Response> {
  return captureLead(request);
}
