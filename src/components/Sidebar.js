import logo from "../img/logo.svg";
import Menu from "./Sidebar/Menu";
import { Icon } from "../Icons";
import Playlists from "./Sidebar/Playlists";

function Sidebar() {
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <a href="#" className="mb-7 px-5">
        <img src={logo} className="h-10 px-1" />
      </a>
      <Menu></Menu>
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="group py-2 px-6 flex items-center text-sm text-link font-semibold hover:text-white"
            >
              <span
                className="w-6 h-6 flex items-center justify-center mr-4 bg-white 
                              rounded-sm text-black bg-opacity-60 group-hover:bg-opacity-100"
              >
                <Icon name="plus" size={12}></Icon>
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center text-sm text-link font-semibold group hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-900
                              to-indigo-300 text-white rounded-sm opacity-60 group-hover:opacity-100">
                <Icon name="like" size={12}></Icon>
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlists></Playlists>
    </aside>
  );
}

export default Sidebar;
