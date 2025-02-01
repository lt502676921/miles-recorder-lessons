export default function List() {
  return (
    <ul className="flex flex-col items-center flex-1 space-y-2 text-white overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500">
      {new Array(100).fill(0).map((item, index) => {
        return (
          <li key={index} className="w-full p-3 bg-gray-800 rounded-md">
            {index}
          </li>
        );
      })}
    </ul>
  );
}
