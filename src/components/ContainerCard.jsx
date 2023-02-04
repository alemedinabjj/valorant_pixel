import { Card } from "./Card";
import { NamePage } from "./NamePage";
import { SelectUsage } from "./Select";
import { cardInfos } from "../data/api";
import { CardMaps } from "./CardMaps";

export function ContainerCard({ game, isGame = false }) {
  const cardMap = cardInfos.map((item, key) => <Card item={item} key={key} />);
  const cardGames = game?.map((item, key) => (
    <CardMaps item={item} key={key} />
  ));

  console.log(cardGames);

  return (
    <section className="flex-1">
      <NamePage label="All Pixels" />
      <SelectUsage />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
        {!isGame && cardMap}
        {isGame && cardGames}
        {cardGames?.length === 0 && isGame && (
          <div className="flex justify-center items-center w-full">
            <h1 className="text-2xl font-bold text-gray-500 ">
              No maps found for this game
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
