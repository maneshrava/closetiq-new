import {

  Link,

  useNavigate,

} from "react-router-dom";

import {

  useContext,

} from "react";

import {

  ThemeContext,

} from "../context/ThemeContext";

function DashboardLayout({

  children,

}) {

  const navigate =
    useNavigate();

  const {

    darkMode,

    setDarkMode,

  } = useContext(
    ThemeContext
  );

  const logout =
    () => {

      localStorage.removeItem(
        "token"
      );

      navigate("/login");

    };

  return (

    <div

      className={

        darkMode

          ? "min-h-screen bg-zinc-950 text-white px-4 md:px-8 py-6"

          : "min-h-screen bg-[#f3f4f6] text-black px-4 md:px-8 py-6"

      }

    >

      {/* NAVBAR */}

      <div

        className={

          darkMode

            ? "bg-zinc-900 rounded-3xl px-4 md:px-8 py-5 mb-10 flex flex-col md:flex-row justify-between items-center gap-5"

            : "bg-white rounded-3xl px-4 md:px-8 py-5 mb-10 flex flex-col md:flex-row justify-between items-center gap-5 shadow-md"

        }

      >

        <h1 className="text-2xl md:text-4xl font-bold text-purple-500">

          ClosetIQ 🚀

        </h1>

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">

          <Link
            to="/dashboard"
            className="hover:text-purple-500 transition-all"
          >

            Dashboard

          </Link>

          <Link
            to="/wardrobe"
            className="hover:text-purple-500 transition-all"
          >

            Wardrobe

          </Link>

          <Link
            to="/history"
            className="hover:text-purple-500 transition-all"
          >

            History

          </Link>

          <button

            onClick={() =>
              setDarkMode(
                !darkMode
              )
            }

            className={

              darkMode

                ? "bg-zinc-800 px-5 py-2 rounded-2xl"

                : "bg-zinc-200 px-5 py-2 rounded-2xl"

            }

          >

            {darkMode
              ? "☀️ Light"
              : "🌙 Dark"}

          </button>

          <button

            onClick={logout}

            className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-2xl text-white"

          >

            Logout

          </button>

        </div>

      </div>

      {/* CONTENT */}

      {children}

    </div>

  );

}

export default DashboardLayout;
