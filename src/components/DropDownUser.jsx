/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { LoadingSpinner } from "./LoadingSpinner";
import Link from "next/link";
import { Avatar } from "./Avatar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function DropDownUser({ user, signOut, firstName, lastName }) {
  const isAdmin = user?.role === "ROLE_ADMIN";

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          {!!user ? (
            <Avatar />
          ) : (
            <div className="flex items-center gap-2 justify-between ">
              <div className="flex items-center gap-2 justify-between ">
                <Link href="/register">
                  <span className="text-gray-100 hover:text-gray-200">
                    Register
                  </span>
                </Link>

                <span className="text-gray-100 hover:text-gray-200">|</span>
              </div>

              <Link href="/login">
                <span className="text-gray-100 hover:text-gray-200">Login</span>
              </Link>
            </div>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <Link href={isAdmin ? "/dashboard/admin" : "/dashboard/user"}>
                    Dashboard
                  </Link>
                </span>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>

            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                    onClick={signOut}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
