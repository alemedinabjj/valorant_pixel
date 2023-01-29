import { useAuth } from "@/Contexts/AuthProvider";
import { LoadingSpinner } from "./LoadingSpinner";

export function Header() {
  const { user } = useAuth();

  const firstName = user?.firstName.slice(0, 1).toUpperCase();
  const lastName = user?.lastName.slice(0, 1).toUpperCase();

  return (
    <header className="bg-primary relative mb-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-lg font-semibold text-gray-100 hover:text-gray-200 "
              href="#"
            >
              Valorant pixel
            </a>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button
                className="relative z-10 block h-12 w-12 rounded-full overflow-hidden shadow focus:outline-none"
                onClick={() => {
                  console.log("click");
                }}
              >
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                    {!!user ? firstName + lastName : <LoadingSpinner />}
                  </span>
                </div>
              </button>
              <span className="absolute right-0 bottom-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-500 z-10"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
