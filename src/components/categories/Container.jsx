import axios from "axios";
import { useCallback, useEffect, useState } from "react";
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
        <div>{label}</div>
        {data?.map((item, key) => {
          return (
            <>
              <div key={key}>{item.name}</div>
              <div key={key}>{item.company}</div>
            </>
          );
        })}
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
