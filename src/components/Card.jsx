import { AiFillEye } from "react-icons/ai";

export function Card() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src="https://i.pravatar.cc/300"
            alt=""
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">Juse</div>
          <div className="text-sm text-gray-500">Teste</div>
        </div>
        <div className="ml-auto flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full text-green-800 bg-green-100">
          <AiFillEye size={20} className="ml-4 text-gray-500" />
          <span className="ml-1 text-sm text-gray-500">100 views</span>
        </div>
      </div>
      <div className="mt-6">
        <img
          className="w-full "
          src="https://static.valorantzone.gg/news/2020/04/27150238/BIND.png"
          alt=""
        />
      </div>
    </div>
  );
}
