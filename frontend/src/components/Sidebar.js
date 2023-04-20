// styles
import styles from "../index.css";

// icons
import { RxAvatar } from "react-icons/rx";
import { IoTimerOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { VscCalendar } from "react-icons/vsc";
import { CgNotes } from "react-icons/cg";
import { FiPaperclip } from "react-icons/fi";
import { BsBarChartLine } from "react-icons/bs";
import { TbAffiliate } from "react-icons/tb";
import { SlSettings } from "react-icons/sl";
import { BiHelpCircle } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div class="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
        <div class="flex items-center pl-6 h-20 border-b border-gray-800">
          <RxAvatar class="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 bg-white" />
          <div class="ml-1">
            <p class="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">
              Test User
            </p>
          </div>
        </div>
        <div class="overflow-y-auto overflow-x-hidden flex-grow">
          <ul class="flex flex-col py-6 space-y-1">
            <li>
              <a
                href="dashboard"
                class="relative flex flex-row items-center h-11 focus:ring-2 focus:outline-none  hover:bg-gray-700 text-gray-500 hover:text-gray-200 shadow active:hover-lg active:bg-gray-700  active:text-gray-200 border-l-4 border-transparent hover:gray-700 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <IoTimerOutline />
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  {" "}
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="messages"
                class="relative flex flex-row items-center h-11 focus:ring-2 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 shadow active:hover-lg active:bg-gray-700  active:text-gray-200 border-l-4 border-transparent hover:gray-700 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <RxEnvelopeClosed />
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Messages
                </span>
              </a>
            </li>
            <li>
              <a
                href="bookings"
                class="relative flex flex-row items-center h-11 focus:ring-2 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 shadow active:hover-lg active:bg-gray-700  active:text-gray-200 border-l-4 border-transparent hover:gray-700 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <VscCalendar />
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Bookings
                </span>
              </a>
            </li>
            <li>
              <a
                href="experiences"
                class="relative flex flex-row items-center h-11 focus:ring-2 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 shadow active:hover-lg active:bg-gray-700  active:text-gray-200 border-l-4 border-transparent hover:gray-700 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <CgNotes />
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Experiences
                </span>
              </a>
            </li>
            <li>
              <a
                href="resources"
                class="relative flex flex-row items-center h-11 focus:ring-2 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 shadow active:hover-lg active:bg-gray-700  active:text-gray-200 border-l-4 border-transparent hover:gray-700 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <FiPaperclip />
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Resources
                </span>
              </a>
            </li>
            <li class="px-5">
              <div class="flex flex-row items-center h-8">
                <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                  Atlas
                </div>
              </div>
            </li>
            <li>
              <a
                href="insights&reports"
                class="relative flex flex-row items-center h-11 focus:ring-2 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 shadow active:hover-lg active:bg-gray-700  active:text-gray-200 border-l-4 border-transparent hover:gray-700 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <BsBarChartLine />
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Insights & Reports
                </span>
              </a>
            </li>
            <li class="px-5">
              <div class="flex flex-row items-center h-8">
                <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                  Other
                </div>
              </div>
            </li>
            <li>
              <a
                href="affiliates"
                class="relative flex flex-row items-center h-11 focus:ring-2 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 shadow active:hover-lg active:bg-gray-700  active:text-gray-200 border-l-4 border-transparent hover:gray-700 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <TbAffiliate />
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Affiliates
                </span>
              </a>
            </li>
            <li>
              <a
                href="settings"
                class="relative flex flex-row items-center h-11 focus:ring-2 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 shadow active:hover-lg active:bg-gray-700  active:text-gray-200 border-l-4 border-transparent hover:gray-700 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <SlSettings />
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Settings
                </span>
              </a>
            </li>
            <li>
              <a
                href="help"
                class="relative flex flex-row items-center h-11 focus:ring-2 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 shadow active:hover-lg active:bg-gray-700  active:text-gray-200 border-l-4 border-transparent hover:gray-700 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <BiHelpCircle />
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Help
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
