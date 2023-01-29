import { FiGithub, FiFacebook, FiTwitter } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-primary mt-2 h-full px-2 w-full md:px-16 py-10">
      <div className="flex justify-between items-center  container mx-auto px-6 py-3">
        <div>
          <h2 className="text-xl font-semibold text-gray-100 mb-1">
            Valorant pixel
          </h2>
          <ul className="flex gap-1 text-lg text-gray-100 ">
            <li className="hover:text-gray-300 cursor-pointer">
              <FiGithub />
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <FiFacebook />
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <FiTwitter />
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-1 md:gap-3 text-lg text-gray-200 ">
          <a className="hover:text-gray-300" href="">
            Home
          </a>
          <a className="hover:text-gray-300" href="">
            Maps
          </a>
          <a className="hover:text-gray-300" href="">
            Agentes
          </a>
          <a className="hover:text-gray-300" href="">
            Pixel
          </a>
        </div>
      </div>
    </footer>
  );
}
