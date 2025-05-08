import miniworldicon from "@/assets/miniworldicon.png";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import background2 from "@/assets/background2.png";

export default function CtaContact() {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [countryCode, setCountryCode] = useState("RU");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const dropdownRef = useRef(null);
  const sectionRef = useRef(null);
  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const countryCodes = {
    RU: { code: "+7", placeholder: "(917) 889-9457" },
    UZ: { code: "+998", placeholder: "99 123 45 67" },
    TR: { code: "+90", placeholder: "532 123 45 67" },
    KZ: { code: "+7", placeholder: "701 123 45 67" },
    AZ: { code: "+994", placeholder: "51 123 45 67" },
  };

  useEffect(() => {
    if (typeof window !== "undefined" && phoneInputRef.current) {
      const loadIntlTelInput = async () => {
        const utilsScript = document.createElement("script");
        utilsScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js";
        utilsScript.onload = () => {
          const iti = window.intlTelInput(phoneInputRef.current, {
            initialCountry: "auto",
            geoIpLookup: (callback) => {
              fetch("https://ipapi.co/json")
                .then((res) => res.json())
                .then((data) => {
                  callback(data.country_code);
                  setCountryCode(data.country_code);
                })
                .catch(() => {
                  callback("RU");
                  setCountryCode("RU");
                });
            },
            utilsScript:
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            preferredCountries: ["ru", "tr", "de", "cn"],
            separateDialCode: true,
          });
          itiRef.current = iti;
        };
        document.body.appendChild(utilsScript);
      };

      loadIntlTelInput();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "cta",
          name,
          email,
          phone,
          selectedOptions,
          countryCode: countryCodes[countryCode].code,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        resetForm();
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert("Ошибка при отправке заявки. Пожалуйста, попробуйте позже.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка. Пожалуйста, попробуйте позже.");
    }
  };

  const resetForm = () => {
    setSelectedOptions([]);
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleOptionToggle = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-20 mb-3 ">
        <h2 className="text-4xl sm:text-5xl font-semibold text-[#343434] ">
          Свяжитесь с нами!
        </h2>
      </div>

      <section
        ref={sectionRef}
        className="relative pt-12 text-center bg-white overflow-hidden"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-cover bg-center bg-no-repeat">
          <div className="w-full h-full">
            <div className="max-w-screen-xl mx-auto px-4 py-20 sm:py-28 relative z-10">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full bg-white bg-opacity-95 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 sm:p-10 space-y-8 -mt-36 sm:-mt-40 border-b-8 border-[#FFC23E]"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center space-x-4"
                >
                  <img
                    src={miniworldicon}
                    alt="icon"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Выберите вашу категорию
                  </h3>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="relative w-full sm:w-1/2" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setOpen((prev) => !prev)}
                      className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-full py-3 px-5 text-sm sm:text-base text-gray-600 focus:ring-2 focus:ring-blue-500"
                    >
                      <span>
                        {selectedOptions.length > 0
                          ? selectedOptions.join(", ")
                          : "Категория товара"}
                      </span>
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {open && (
                      <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-xl border border-gray-200 z-10 p-4 space-y-3">
                        {[
                          "Доставка из Китая",
                          "Доставка из Европы",
                          "Экспресс-доставка",
                          "Стандартная доставка",
                        ].map((option) => (
                          <div key={option} className="flex items-center">
                            <input
                              type="checkbox"
                              id={option}
                              value={option}
                              checked={selectedOptions.includes(option)}
                              onChange={() => handleOptionToggle(option)}
                              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                              htmlFor={option}
                              className="ml-2 text-sm text-gray-700"
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nikolay@mail.ru"
                    required
                    className="w-full sm:w-1/2 rounded-full border border-gray-300 py-3 px-5 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Елисеев Николай Артёмович"
                    required
                    className="sm:col-span-4 rounded-full border border-gray-300 py-3 px-5 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                  />

                  <div className="relative sm:col-span-5 bg-transparent">
                    <select
                      value={countryCode}
                      onChange={(e) => {
                        setCountryCode(e.target.value);
                        setPhone("");
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-sm sm:text-base text-gray-500 pr-2 focus:outline-none"
                    >
                      {Object.keys(countryCodes).map((key) => (
                        <option key={key} value={key}>
                          {key}
                        </option>
                      ))}
                    </select>

                    <div className="absolute left-16 top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-500">
                      {countryCodes[countryCode].code}
                    </div>

                    <input
                      type="text"
                      ref={phoneInputRef}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={countryCodes[countryCode].placeholder}
                      required
                      className="w-full rounded-r-full border border-gray-300 py-3 pl-28 pr-5 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <button
                      type="submit"
                      className="w-full bg-[#088EE3] text-white text-sm sm:text-base font-medium px-6 py-3 rounded-full hover:bg-[#066bb8] transition flex items-center justify-center space-x-2"
                    >
                      {success ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        "Отправить"
                      )}
                    </button>
                  </div>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
