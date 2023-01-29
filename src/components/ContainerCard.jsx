import { Card } from "./Card";
import { NamePage } from "./NamePage";

const cardInfos = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/300",
    name: "Juse",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/300",
    name: "Domo",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/300",
    name: "Evandro",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/300",
    name: "Nandinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/300",
    name: "leozinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/300",
    name: "alesurf13",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 1,
    avatar: "https://i.pravatar.cc/300",
    name: "Juse",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/300",
    name: "Domo",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/300",
    name: "Evandro",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/300",
    name: "Nandinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/300",
    name: "leozinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/300",
    name: "alesurf13",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 1,
    avatar: "https://i.pravatar.cc/300",
    name: "Juse",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/300",
    name: "Domo",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/300",
    name: "Evandro",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/300",
    name: "Nandinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/300",
    name: "leozinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/300",
    name: "alesurf13",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 1,
    avatar: "https://i.pravatar.cc/300",
    name: "Juse",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/300",
    name: "Domo",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/300",
    name: "Evandro",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/300",
    name: "Nandinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/300",
    name: "leozinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/300",
    name: "alesurf13",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 1,
    avatar: "https://i.pravatar.cc/300",
    name: "Juse",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/300",
    name: "Domo",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/300",
    name: "Evandro",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/300",
    name: "Nandinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/300",
    name: "leozinhe",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/300",
    name: "alesurf13",
    description: "Teste",
    views: 100,
    image: "https://static.valorantzone.gg/news/2020/04/27150238/BIND.png",
  },
];

export function ContainerCard() {
  const cardMap = cardInfos.map((item, key) => <Card item={item} key={key} />);

  return (
    <section className="flex-1">
      <NamePage label="All Pixels" />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {cardMap}
      </div>
    </section>
  );
}
