import { Menu } from "@headlessui/react";
import { Icon } from "../../Icons";

function Auth() {
  const user = {
    name: "Bilal Beygo",
    avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  };

  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl bg-black pr-2 ${
              open ? "bg-active" : "bg-black"
            } hover:bg-active`}
          >
            <img
              src={user.avatar}
              className={"w-8 h-8 rounded-full p-px mr-2"}
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open === true && 'rotate-180'}>
              <Icon size={16} name="downdir"></Icon>
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute top-full right-0 w-48 bg-active rounded translate-y-2 p-1"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="#"
                >
                  Account
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="#"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
