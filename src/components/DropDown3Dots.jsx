import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import threedots from "../images/threedots.svg";
import saveIcon from "../images/save1Icon.svg";
import deleteIcon from "../images/deleteIcon.svg";
import editIcon from "../images/editIcon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({
  setShowDeleteJobModal,
  setShowJobModal,
  selectedJob,
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:shadow-sm hover:ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
                <Link
                  to={`/ai/${selectedJob.id}`}
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center gap-1 px-4 py-2 text-sm -ml-1 cursor-pointer "
                  )}
                >
                  <FontAwesomeIcon className="h-5" icon={faRobot} />
                  AI Tool
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  onClick={() => setShowJobModal(true)}
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
                  onClick={() => setShowDeleteJobModal(true)}
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center gap-1 px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  <img src={deleteIcon} alt="save icon" />
                  Delete Job
                </a>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
