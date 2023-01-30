import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { LoadingSpinner } from "./LoadingSpinner";

export function Card({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 relative cursor-pointer">
      <Link href={`/maps/${item.id}`}>
        <div className="absolute top-0 right-0 bg-primary text-white px-2 py-1 rounded-bl-lg rounded-tr-lg">
          <span className="text-sm font-semibold">{item.map_name}</span>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full" src={item.avatar} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{item.name}</div>
            <div className="text-sm text-gray-500">{item.description}</div>
          </div>
          <div className="ml-auto flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full text-green-800 bg-green-100">
            <AiFillEye size={20} className="ml-4 text-gray-500" />
            <span className="ml-1 text-sm text-gray-500">
              {item.views} views
            </span>
          </div>
        </div>
        <div className="mt-6">
          <ReactPlayer url={item.image} width="100%" height="100%" controls />
        </div>
      </Link>
    </div>
  );
}
