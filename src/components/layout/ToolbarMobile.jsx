import {
  Home,
  Package,
  PhoneCall,
  Menu,
  X,
  FileText,
  Grid,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import zintermini from "@/assets/zintermini.png";
import SlideOverForm from "@/components/ui/SlideOverForm.jsx";
import Modal from "react";

const icons = {
  whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  telegram:
    "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
  gmail: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
  phone: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
};

export default function ToolbarMobile({ setMobileMenuOpen }) {
  const [showMessageMenu, setShowMessageMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMessageMenu = () => {
    setShowMessageMenu((prev) => !prev);
  };

  useEffect(() => {
    console.log("isOpen değişti:", isOpen);
  }, [isOpen]);

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t z-50 md:hidden">
      <ul className="flex justify-evenly items-center h-16 text-sm relative">
        <li>
          <Link to="/" className="flex flex-col items-center text-gray-600">
            <img src={zintermini} className="w-6" />
            <span>Главная</span>
          </Link>
        </li>

        <li>
          <button
            onClick={() => setIsOpen(true)}
            className="flex pl-2 flex-col items-center text-gray-600"
          >
            <svg
              width="24px"
              height="24px"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4z" />
            </svg>

            <span>Заявка</span>
          </button>
          <SlideOverForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </li>

        <li>
          <a
            href="tel:+79178899457"
            className="flex flex-col items-center text-gray-600"
          >
            <svg
              fill="#000000"
              height="24px"
              width="24px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 473.806 473.806"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path>{" "}
                    <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path>{" "}
                    <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <span>Звонок</span>
          </a>
        </li>

        <li className="bg-[#222d3f] bg-[length:100%_100%]">
          <button
            onClick={toggleMessageMenu}
            className="py-3 h-16 flex flex-col items-center text-gray-600"
          >
            <svg
              viewBox="0 0 24 24"
              width=""
              height="48"
              fill="#2f9df7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M19.4003 18C19.7837 17.2499 20 16.4002 20 15.5C20 12.4624 17.5376 10 14.5 10C11.4624 10 9 12.4624 9 15.5C9 18.5376 11.4624 21 14.5 21L21 21C21 21 20 20 19.4143 18.0292M18.85 12C18.9484 11.5153 19 11.0137 19 10.5C19 6.35786 15.6421 3 11.5 3C7.35786 3 4 6.35786 4 10.5C4 11.3766 4.15039 12.2181 4.42676 13C5.50098 16.0117 3 18 3 18H9.5"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>

            <p className=" w-24 text-[#2d9bf8]">Сообщение</p>
          </button>
        </li>

        <li className="py-2">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex flex-col items-center text-gray-600 "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M13 15C13 14.0572 13 13.5858 13.2929 13.2929C13.5858 13 14.0572 13 15 13H17C17.9428 13 18.4142 13 18.7071 13.2929C19 13.5858 19 14.0572 19 15V17C19 17.9428 19 18.4142 18.7071 18.7071C18.4142 19 17.9428 19 17 19H15C14.0572 19 13.5858 19 13.2929 18.7071C13 18.4142 13 17.9428 13 17V15Z"
                  stroke="#464455"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M13 7C13 6.05719 13 5.58579 13.2929 5.29289C13.5858 5 14.0572 5 15 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V9C19 9.94281 19 10.4142 18.7071 10.7071C18.4142 11 17.9428 11 17 11H15C14.0572 11 13.5858 11 13.2929 10.7071C13 10.4142 13 9.94281 13 9V7Z"
                  stroke="#464455"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M5 15C5 14.0572 5 13.5858 5.29289 13.2929C5.58579 13 6.05719 13 7 13H9C9.94281 13 10.4142 13 10.7071 13.2929C11 13.5858 11 14.0572 11 15V17C11 17.9428 11 18.4142 10.7071 18.7071C10.4142 19 9.94281 19 9 19H7C6.05719 19 5.58579 19 5.29289 18.7071C5 18.4142 5 17.9428 5 17V15Z"
                  stroke="#464455"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M5 7C5 6.05719 5 5.58579 5.29289 5.29289C5.58579 5 6.05719 5 7 5H9C9.94281 5 10.4142 5 10.7071 5.29289C11 5.58579 11 6.05719 11 7V9C11 9.94281 11 10.4142 10.7071 10.7071C10.4142 11 9.94281 11 9 11H7C6.05719 11 5.58579 11 5.29289 10.7071C5 10.4142 5 9.94281 5 9V7Z"
                  stroke="#464455"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>

            <span className="-mt-4 py-2">Меню</span>
          </button>
        </li>

        <AnimatePresence>
          {showMessageMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-[70px] left-[61%] transform -translate-x-1/2 bg-white border rounded-xl shadow-xl p-2 z-50 flex flex-col items-center gap-3"
            >
              <a
                href="https://wa.me/79178899457"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 455.731 455.731"
                  className="w-12 h-12 rounded-md"
                >
                  <g>
                    <rect
                      x="0"
                      y="0"
                      fill="#1BD741"
                      width="455.731"
                      height="455.731"
                    />
                    <g>
                      <path
                        fill="#FFFFFF"
                        d="M68.494,387.41l22.323-79.284c-14.355-24.387-21.913-52.134-21.913-80.638
          c0-87.765,71.402-159.167,159.167-159.167s159.166,71.402,159.166,159.167c0,87.765-71.401,159.167-159.166,159.167
          c-27.347,0-54.125-7-77.814-20.292L68.494,387.41z M154.437,337.406l4.872,2.975c20.654,12.609,44.432,19.274,68.762,19.274
          c72.877,0,132.166-59.29,132.166-132.167S300.948,95.321,228.071,95.321S95.904,154.611,95.904,227.488
          c0,25.393,7.217,50.052,20.869,71.311l3.281,5.109l-12.855,45.658L154.437,337.406z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M183.359,153.407l-10.328-0.563c-3.244-0.177-6.426,0.907-8.878,3.037
          c-5.007,4.348-13.013,12.754-15.472,23.708c-3.667,16.333,2,36.333,16.667,56.333c14.667,20,42,52,90.333,65.667
          c15.575,4.404,27.827,1.435,37.28-4.612c7.487-4.789,12.648-12.476,14.508-21.166l1.649-7.702c0.524-2.448-0.719-4.932-2.993-5.98
          l-34.905-16.089c-2.266-1.044-4.953-0.384-6.477,1.591l-13.703,17.764c-1.035,1.342-2.807,1.874-4.407,1.312
          c-9.384-3.298-40.818-16.463-58.066-49.687c-0.748-1.441-0.562-3.19,0.499-4.419l13.096-15.15
          c1.338-1.547,1.676-3.722,0.872-5.602l-15.046-35.201C187.187,154.774,185.392,153.518,183.359,153.407z"
                      />
                    </g>
                  </g>
                </svg>
              </a>

              <a
                href="https://t.me/yourtelegrambot"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-12 h-12 rounded-md"
                  aria-label="Telegram"
                  role="img"
                >
                  <rect width="512" height="512" rx="15%" fill="#37aee2" />
                  <path
                    fill="#c8daea"
                    d="M199 404c-11 0-10-4-13-14l-32-105 245-144"
                  />
                  <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
                  <path
                    fill="#f6fbfe"
                    d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
                  />
                </svg>
              </a>

              <a
                href="mailto:zinter@zinter.com"
                className="w-12 h-12 flex items-center justify-center shadow-lg transform transition-all hover:scale-110 hover:shadow-xl"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 rounded-md"
                >
                  <path
                    d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                    fill="white"
                  />
                  <path
                    d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                    fill="#34A853"
                  />
                  <path
                    d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                    fill="#C5221F"
                  />
                  <path
                    d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                    fill="#C5221F"
                  />
                  <path
                    d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                    fill="#C5221F"
                  />
                  <path
                    d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                    fill="#4285F4"
                  />
                </svg>
              </a>
              <a
                href="tel:+79178899457"
                className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg transform transition-all hover:scale-110 hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Phone"
                  role="img"
                  viewBox="0 0 512 512"
                  className="w-12 h-12 rounded-md"
                >
                  <rect width="512" height="512" rx="15%" fill="#FFC23E" />
                  <path
                    fill="#ffffff"
                    d="M395 338c-10-9-22-17-33-23-23-16-43-17-59 6-10 14-23 16-37 10-39-18-68-43-84-82-8-16-8-31 10-42 9-6 19-14 18-28-1-18-44-78-62-84-8-2-14-2-22 0-41 14-57 46-42 85a451 451 0 0 0 251 248l17 5c26 0 57-25 67-50 9-24-10-34-24-45z"
                  />
                  <path
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeWidth="17"
                    d="M268 138s41-1 72 30c31 30 27 74 27 74m-87-63s18-2 33 14c15 15 13 34 13 34M255 98s64-3 111 44c47 48 43 114 43 114"
                  />
                </svg>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
}
