/* This example requires Tailwind CSS v2.0+ */
import { useAuth } from "@/Contexts/AuthProvider";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Avatar } from "./Avatar";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "#", current: true },
  { name: "Pixels", icon: UsersIcon, href: "pixel", count: 3, current: false },
  { name: "Maps", icon: FolderIcon, href: "maps", count: 4, current: false },
  { name: "Games", icon: CalendarIcon, href: "games", current: false },
  { name: "Agents", icon: InboxIcon, href: "agents", current: false },
  {
    name: "Users",
    icon: ChartBarIcon,
    href: "users",
    count: 12,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Dashboard({ setCategory }) {
  const { user, signOut } = useAuth();

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-gray-800 max-w-[300px]">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          {user?.role === "ROLE_ADMIN" ? (
            <div className="flex flex-col ml-4">
              <span className="text-sm text-gray-300">Admin</span>
              <span className="text-sm text-gray-300">Dashboard</span>
            </div>
          ) : (
            <div className="flex flex-col ml-4">
              <span className="text-sm text-gray-300">User</span>
              <span className="text-sm text-gray-300">Dashboard</span>
            </div>
          )}
        </div>
        <nav
          className="mt-5 flex-1 space-y-1 bg-gray-800 px-2"
          aria-label="Sidebar"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
              )}
              onClick={() => setCategory(item.href)}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-300"
                    : "text-gray-400 group-hover:text-gray-300",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current
                      ? "bg-gray-800"
                      : "bg-gray-900 group-hover:bg-gray-800",
                    "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 bg-gray-700 p-4">
        <a href="#" className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <Avatar />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white group-hover:text-gray-300">
                {user?.firstName + " " + user?.lastName}
              </p>
              <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
