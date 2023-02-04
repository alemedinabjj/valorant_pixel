import { useAuth } from "@/Contexts/AuthProvider";
import axios from "axios";

export function CardMaps({ item, getData, label, getAgent }) {
  const { token } = useAuth();
  async function deleteMap() {
    const res = await axios.delete(
      process.env.BASE_URL + `/${label}/` + item.id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    getData();
    getAgent();
    console.log(res);
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6 relative max-w-sm mx-auto flex-1 flex items-center justify-center">
        <div className="absolute top-0 right-0 bg-primary text-white px-2 py-1 rounded-bl-lg rounded-tr-lg">
          <span className="text-sm font-semibold">{item.name}</span>
        </div>
        <div className="flex items-center"></div>
        <div className="mt-6 mb-6">
          <img className="w-full " src={item.imageUrl} alt="" />
        </div>
        <button
          name="delete"
          className="bg-red-500 text-white p-2  absolute bottom-0 right-0 w-full"
          onClick={deleteMap}
        >
          Delete
        </button>
      </div>
    </>
  );
}
