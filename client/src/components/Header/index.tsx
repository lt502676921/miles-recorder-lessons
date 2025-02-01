interface HeaderProps {
  recording: Boolean;
}

export default function Header({ recording }: HeaderProps) {
  return (
    <div className="w-full flex items-center justify-between pb-4">
      <div className="flex items-center text-2xl font-semibold leading-none tracking-tight text-white">
        Miles's Recorder
      </div>
      <div className="text-white">{recording ? 'Recording' : 'Not Recording'}</div>
    </div>
  );
}
