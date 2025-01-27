'use client';
import { useVad } from '../vad/use-vad';

export default function Home() {
  const { recording, processing } = useVad({
    onSpeechEnd: async ({ float32Array }) => {},
  });

  return (
    <div className="w-[100vw] h-[100vh] p-4 bg-black">
      <div className="rounded-2xl h-full ring-1 ring-zinc-800 px-8 py-8 flex flex-col">
        <div className='text-white'>{recording ? 'Recording' : 'Not Recording'}</div>
      </div>
    </div>
  );
}
