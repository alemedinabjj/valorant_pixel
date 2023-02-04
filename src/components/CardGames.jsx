/* This example requires Tailwind CSS v2.0+ */
import { useAuth } from "@/Contexts/AuthProvider";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useState } from "react";
import { ModalUsage } from "./Modal/Modal";
import { ModalCategory } from "./Modal/ModalCategory";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function CardGames({ item, getData, getDataMaps }) {
  const [open, setOpen] = useState(false);
  const { token, user } = useAuth();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const isAdmin = user?.role === "ROLE_ADMIN";

  function getInitials(name) {
    const words = name?.split(" ");
    let initials = "";

    for (const word of words) {
      initials += word[0]?.toUpperCase();
    }

    return initials;
  }

  async function deleteGame() {
    console.log(process.env.BASE_URL + "/games/" + item.id);

    try {
      const response = await axios.delete(
        process.env.BASE_URL + "/games/" + item.id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getData();
      getDataMaps();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function editGame() {
    try {
      const response = await axios.put(
        process.env.BASE_URL + "/games/" + item.id,
        {
          name,
          company,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getData();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <ModalCategory
        open={open}
        setOpen={setOpen}
        item={item}
        label={`Do you want to delete the game ${item.name} ?`}
        type="Delete"
        deleteFunction={deleteGame}
        setName={setName}
        setCompany={setCompany}
        editFunction={editGame}
      />
      <ul role="list" className="mt-3">
        <li key={item.name} className="col-span-1 flex rounded-md shadow-sm">
          <div
            className={classNames(
              "bg-primary flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
            )}
          >
            {getInitials(item.company)}
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
              <a className="font-medium text-gray-900 hover:text-gray-600">
                {item.name}
              </a>
              <p className="text-gray-500">@{item.company.split(" ")}</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              {isAdmin && (
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
