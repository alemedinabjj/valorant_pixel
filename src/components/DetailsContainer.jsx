import Link from "next/link";
import ReactPlayer from "react-player";

export function DetailsContainer({ cardMap }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="flex-1">
          <ReactPlayer className="w-full" url={cardMap.image} controls />
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                {cardMap.map_name}
              </h2>
              <p className="text-gray-500">{cardMap.description}</p>

              <div className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="flex-1">
                  <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                    Enviado por:
                  </h1>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">
                    {cardMap.name}
                  </h2>
                  <p className="text-gray-500">{cardMap.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-primary text-white block ml-auto px-2 py-1 rounded-bl-lg rounded-tr-lg">
        <span className="text-sm font-semibold">
          <Link href="/">Voltar</Link>
        </span>
      </button>
    </>
  );
}
