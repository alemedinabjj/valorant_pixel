import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { CardGames } from "../CardGames";
import { Pagination } from "../Pagination/Pagination";

export function Container({ label }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const getData = useCallback(async () => {
    const response = await axios.get(
      process.env.BASE_URL + `/games?size=10&page=${page}&sort=id`
    );
    const data = response.data.content;
    const totalPages = response.data.totalPages;
    const totalElements = response.data.totalElements;

    setTotalElements(totalElements);
    setTotalPages(totalPages);
    setData(data);
    console.log(response);
  }, [page]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
          {data?.map((item, key) => {
            return (
              <>
                <CardGames key={key} item={item} />
              </>
            );
          })}
        </div>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        totalElements={totalElements}
      />
    </>
  );
}
