import React from "react";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import threedots from "../images/threedots.svg";
import deleteIcon from "../images/deleteIcon.svg";
import editIcon from "../images/editIcon.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CompanyDropDown3Dots({
  handleEditCompany,
  company,
  handleTrashIconClick,
}) {
  return (
    <Menu
      as="div"
      className="absolute top-4 right-12 md:right-6 lg:right-8  inline-block text-left"
    >
      <div>
        <MenuButton className="inline-flex w-full justify-center p-1 gap-x-1.5 rounded-md bg-transparent text-sm font-semibold text-gray-900 hover:shadow-sm hover:ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <img src={threedots} alt="three dots" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <a
                  onClick={() => handleEditCompany(company)}
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center gap-1 px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  <img src={editIcon} alt="save icon" className="h-5" />
                  Edit Job
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  onClick={() => handleTrashIconClick(company.id)}
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center gap-1 px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  <img src={deleteIcon} alt="save icon" />
                  Delete Company
                </a>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}

export default CompanyDropDown3Dots;
