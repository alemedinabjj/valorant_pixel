import { Card } from "./Card";
import { NamePage } from "./NamePage";
import { SelectUsage } from "./Select";
import { cardInfos } from "../data/api";

export function ContainerCard() {
  const cardMap = cardInfos.map((item, key) => <Card item={item} key={key} />);

  return (
    <section className="flex-1">
      <NamePage label="All Pixels" />
      <SelectUsage />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
        {cardMap}
      </div>
    </section>
  );
}
