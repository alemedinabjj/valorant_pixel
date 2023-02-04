import axios from "axios";
import { useEffect, useState } from "react";
import { ModalUsage } from "../Modal/Modal";
import { Container } from "./Container";

export function Category({
  label,
  token,
  data,
  getData,
  page,
  setPage,
  totalPages,
  totalElements,
  dataMaps,
  getDataMaps,
  agent,
  getAgent,
}) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [nameMap, setNameMap] = useState("");
  const [getGameId, setGetGameId] = useState(0);
  const [loading, setLoading] = useState(false);

  async function sendRequest(e) {
    const formData = new FormData();
    formData.append("file", e);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(formData);

    try {
      const response = await axios.post(
        process.env.BASE_URL + `/upload/file/fps-project`,
        formData,
        config
      );

      console.log(response);

      setFileUrl(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  }

  async function sendImage() {
    setLoading(true);
    const params = {
      name: nameMap,
      imageUrl: fileUrl,
      game: {
        id: getGameId,
      },
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      process.env.BASE_URL + `/${label.toLowerCase()}`,
      params,
      config
    );

    console.log(response);

    setFileUrl(null);
    getDataMaps();
    getAgent();
    setLoading(false);
  }

  console.log(fileUrl);

  return (
    <>
      <div className="flex flex-col gap-10 items-start">
        <ModalUsage
          open={open}
          setOpen={setOpen}
          label={label}
          token={token}
          data={data}
          setFile={setFile}
          sendRequest={sendRequest}
          fileUrl={fileUrl}
          setNameMap={setNameMap}
          setGetGameId={setGetGameId}
          sendImage={sendImage}
          getData={getData}
          loading={loading}
          getDataMaps={getDataMaps}
        />
        <div className="flex flex-col gap-5 p-5 bg-gray-800 rounded-md w-full">
          <h1 className="text-2xl font-bold text-base">{label}</h1>
        </div>

        {label !== "Users" && (
          <button
            className="bg-gray-800 text-white p-2 rounded-md"
            onClick={() => setOpen(true)}
          >
            Create a new {label.replace("s", "")}
          </button>
        )}
      </div>
      {label === "Games" && (
        <Container
          label="games"
          data={data}
          getData={getData}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          totalElements={totalElements}
          getDataMaps={getDataMaps}
        />
      )}
      {label === "Maps" && (
        <Container
          label="maps"
          data={dataMaps}
          getData={getData}
          getDataMaps={getDataMaps}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          totalElements={totalElements}
        />
      )}
      {label === "Agents" && (
        <Container
          label="agents"
          data={dataMaps}
          getData={getData}
          getDataMaps={getDataMaps}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          totalElements={totalElements}
          agent={agent}
          getAgent={getAgent}
        />
      )}
    </>
  );
}
