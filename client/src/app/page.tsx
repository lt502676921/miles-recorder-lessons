'use client';
import { useVad } from '../vad/use-vad';

export default function Home() {
  const { recording, processing } = useVad({
    onSpeechEnd: async ({ float32Array }) => {},
  });

  return (
    <div className="w-[100vw] h-[100vh] p-4 bg-black">
      <div className="rounded-2xl h-full ring-1 ring-zinc-800 px-8 py-8 flex flex-col">
        <div className="w-full flex items-center justify-between pb-4">
          <div className="flex items-center text-2xl font-semibold leading-none tracking-tight text-white">
            Miles's Recorder
          </div>
          <div className="text-white">{recording ? 'Recording' : 'Not Recording'}</div>
        </div>
      </div>
    </div>
  );
}
