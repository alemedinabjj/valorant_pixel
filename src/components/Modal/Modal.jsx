/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Select } from "../Inputs/Select";

export function ModalUsage({
  open,
  setOpen,
  label,
  token,
  data,
  sendRequest,
  fileUrl,
  setNameMap,
  setGetGameId,
  sendImage,
  getData,
  loading,
}) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  console.log(data);

  useEffect(() => {
    setNameMap(name);
  }, [name]);

  async function handleSubmit(e) {
    const response = await axios.post(
      process.env.BASE_URL + "/games",
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

    setOpen(false);
    console.log(response);
    getData();
  }

  const optionLabel = ["Maps", "Agents"];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create a new {label.replace("s", "")}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to create a new {label}? All of your
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:black-shadows focus:black-shadows sm:text-sm mb-3"
                      onChange={(e) => setName(e.target.value)}
                    />
                    {label === "Games" && (
                      <input
                        type="text"
                        placeholder="Company"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    )}

                    {optionLabel.includes(label) && (
                      <>
                        <Select data={data} setGetGameId={setGetGameId} />
                      </>
                    )}

                    {optionLabel.includes(label) && (
                      <>
                        <label>
                          <input
                            type="file"
                            className="text-sm text-grey-500
                              file:mr-5 file:py-2 file:px-6
                              file:rounded-full file:border-0
                              file:text-sm file:font-medium
                              file:bg-blue-50 file:text-blue-700
                              hover:file:cursor-pointer hover:file:bg-primary
                              hover:file:text-cultured transition file:duration-500 mt-4
                               "
                            onChange={(e) => sendRequest(e.target.files[0])}
                          />
                        </label>
                      </>
                    )}
                    {optionLabel.includes(label) && (
                      <div className="mt-5">
                        <div className="flex items-center mt-2">
                          <p className="py-2.5 px-3 text-gray-500 bg-gray-100  border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
                            https://
                          </p>
                          <input
                            type="text"
                            placeholder="merakiui.com"
                            className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   dark:text-gray-300 dark:focus:border-blue-300"
                            value={fileUrl?.replace("https://", "")}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className={`inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:primary sm:text-sm ${
                        label === "Maps" && !fileUrl
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={() =>
                        label === "Games"
                          ? handleSubmit()
                          : optionLabel.includes(label)
                          ? sendImage() && setOpen(false)
                          : null
                      }
                      disabled={optionLabel.includes(label) ? !fileUrl : false}
                    >
                      {loading ? "Carregando..." : "Create"}
                    </button>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Go back to dashboard
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
