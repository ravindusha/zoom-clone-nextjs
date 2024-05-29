'use server';
import { StreamClient } from '@stream-io/node-sdk';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const recordDelete = async () => {
  if (!apiKey) throw new Error('No API key');
  if (!apiSecret) throw new Error('No API secret');

  const client = new StreamClient(apiKey, apiSecret);

  const callsRes = await client.video.queryCalls({
    sort: [{ field: 'starts_at', direction: -1 }],
  });

  console.log('RES', callsRes);

  console.log(callsRes.calls.map((c) => c.call));

  const call = callsRes.calls.find((call) => call.call.recording)?.call;

  console.log('===Call===', call);

  if (!call) return;
  const callE = await client.video
    .call('default', call?.id || '')
    .deleteRecording({
      session: call?.current_session_id || '',
      filename:
        'rec_default_92d67511-f499-4c8d-8202-3bc277e15df6_720p_1716905394461.mp4',
    });

  return null;
};
