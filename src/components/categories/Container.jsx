import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { CardGames } from "../CardGames";
import { CardMaps } from "../CardMaps";
import { Pagination } from "../Pagination/Pagination";

export function Container({
  label,
  data,
  getData,
  page,
  setPage,
  totalPages,
  totalElements,
  getDataMaps,
  agent,
  getAgent,
}) {
  console.log(data);
  return (
    <>
      <div>
        {label === "games" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
            {label === "games" &&
              data?.map((item, key) => {
                return (
                  <>
                    <CardGames
                      key={key}
                      item={item}
                      getData={getData}
                      getDataMaps={getDataMaps}
                    />
                  </>
                );
              })}
          </div>
        )}

        {label === "maps" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {label === "maps" &&
              data?.map((item, key) => {
                return (
                  <>
                    <CardMaps
                      key={key}
                      item={item}
                      getData={getDataMaps}
                      label={label}
                    />
                  </>
                );
              })}
          </div>
        )}
        {label === "agents" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {label === "agents" &&
              agent?.map((item, key) => {
                return (
                  <>
                    <CardMaps
                      key={key}
                      item={item}
                      getData={getDataMaps}
                      label={label}
                      getAgent={getAgent}
                    />
                  </>
                );
              })}
          </div>
        )}
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
