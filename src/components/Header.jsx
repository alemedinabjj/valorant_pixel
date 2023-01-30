import { useAuth } from "@/Contexts/AuthProvider";
import Link from "next/link";
import { DropDownUser } from "./DropDownUser";
import { LoadingSpinner } from "./LoadingSpinner";

export function Header() {
  const { user, signOut } = useAuth();

  const firstName = user?.firstName.slice(0, 1).toUpperCase();
  const lastName = user?.lastName.slice(0, 1).toUpperCase();

  return (
    <header className="bg-primary relative">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="images/logo.png" alt="logo" className="w-20 h-14" />
            <span className="text-lg font-semibold text-gray-100 hover:text-gray-200 ">
              <Link href="/">
                FPS <span className="text-slate-900">Pixel</span>
              </Link>
            </span>
          </div>
          <DropDownUser
            user={user}
            signOut={signOut}
            firstName={firstName}
            lastName={lastName}
          />
        </div>
      </div>
    </header>
  );
}
