'use client';
import { useEffect } from 'react';
import { getLeadAttribution } from '@/lib/lead-attribution';

export default function AttributionBootstrap() {
  useEffect(() => { getLeadAttribution(); }, []);
  return null;
}
