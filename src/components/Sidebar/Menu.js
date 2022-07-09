import { Icon } from "../../Icons";
import { NavLink } from "react-router-dom";

function Menu() {
  let activeClassName =
    "bg-active text-white h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded gap-x-4";
  let notActiveClassName =
    "h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded gap-x-4";

  return (
    <nav className="px-2 mt-2">
      <ul className="flex flex-col gap-y-2">
        <li>
          <NavLink
            to={"/"}
            exact
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            <span>
              <Icon name="home" size="24" />
            </span>
            Anasayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"search"}
            activeClassName="bg-active text-white"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            <span>
              <Icon name="search" size="24" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"library"}
            activeClassName="bg-active text-white"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            <span>
              <Icon name="library" size="24" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
