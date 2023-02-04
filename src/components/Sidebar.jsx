import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Sidebar() {
  const [games, setGames] = useState([]);

  async function getNameGames() {
    const res = await axios.get(process.env.BASE_URL + "/games");

    setGames(res.data?.content);
  }

  console.log(games);

  useEffect(() => {
    getNameGames();
  }, []);

  return (
    <aside
      className="md:sticky block top-10 h-full flex flex-col justify-between
        md:flex-shrink-0 md:w-64 bg-white rounded-lg shadow-lg
      min-h-[calc(100vh-7rem)]
    "
    >
      {" "}
      <div>
        <header className="py-2 px-3  bg-primary text-base text-sm font-medium">
          Games
        </header>
        <div
          className="flex flex-col
          p-2
        "
        >
          {games.map((item, key) => (
            <>
              <Link href={`/games/${item.name}/maps`}>
                <span key={key} className="flex-shrink-0">
                  {item.name}
                </span>
              </Link>
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col ">
        <header className="py-2 px-3  bg-primary text-base text-sm font-medium">
          Agents
        </header>
        <div className="flex flex-col p-2">
          <div className="flex-shrink-0">Mapa1</div>
          <div className="flex-shrink-0">Mapa2</div>
        </div>
      </div>
      <div>
        <header className="py-2 px-3  bg-primary text-base text-sm font-medium">
          {" "}
          Maps
        </header>
        <div className="flex flex-col p-2">
          <div className="flex-shrink-0">Mapa1</div>
          <div className="flex-shrink-0">Mapa2</div>
        </div>
      </div>
    </aside>
  );
}
