import { useEffect, useState }
from "react";

import DashboardLayout
from "../layouts/DashboardLayout";

function Dashboard() {

  const [stats, setStats] =
    useState({

      totalClothes: 0,

      totalHistory: 0,

      totalCategories: 0,

      winterCount: 0,

    });

  const [outfit,
    setOutfit] =
    useState("");

  const [weather,
    setWeather] =
    useState("");

  const [temperature,
    setTemperature] =
    useState("");

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats =
    async () => {

      try {

        const clothesRes =
          await fetch(

            `${import.meta.env.VITE_API_URL}/api/clothes",

            {

              headers: {

                Authorization:
                  `Bearer ${localStorage.getItem("token")}`,

              },

            }

          );

        const clothesData =
          await clothesRes.json();

        const clothes =
          clothesData.clothes || [];

        const historyRes =
          await fetch(

            `${import.meta.env.VITE_API_URL}/api/ai/history",

            {

              headers: {

                Authorization:
                  `Bearer ${localStorage.getItem("token")}`,

              },

            }

          );

        const historyData =
          await historyRes.json();

        const history =
          historyData.history || [];

        const categories =
          new Set(

            clothes.map(
              (item) =>
                item.category
            )

          );

        const winterClothes =
          clothes.filter(

            (item) =>

              item.season
                ?.toLowerCase()
                .includes(
                  "winter"
                )

          );

        setStats({

          totalClothes:
            clothes.length,

          totalHistory:
            history.length,

          totalCategories:
            categories.size,

          winterCount:
            winterClothes.length,

        });

      } catch (error) {

        console.log(error);

      }

    };

  const generateOutfit =
    async () => {

      try {

        const res =
          await fetch(

            `${import.meta.env.VITE_API_URL}/api/ai/generate",

            {

              method: "POST",

              headers: {

                Authorization:
                  `Bearer ${localStorage.getItem("token")}`,

              },

            }

          );

        const data =
          await res.json();

        setOutfit(
          data.outfit
        );

        setWeather(
          data.weather
        );

        setTemperature(
          data.temperature
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <DashboardLayout>

      <div>

        <h1 className="text-3xl md:text-5xl font-bold mb-10">

          Dashboard 📊

        </h1>

        {/* ANALYTICS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl">

            <h2 className="text-zinc-500 mb-3">

              Total Clothes

            </h2>

            <p className="text-5xl font-bold">

              {stats.totalClothes}

            </p>

          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl">

            <h2 className="text-zinc-500 mb-3">

              Outfit History

            </h2>

            <p className="text-5xl font-bold">

              {stats.totalHistory}

            </p>

          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl">

            <h2 className="text-zinc-500 mb-3">

              Categories

            </h2>

            <p className="text-5xl font-bold">

              {stats.totalCategories}

            </p>

          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl">

            <h2 className="text-zinc-500 mb-3">

              Winter Clothes

            </h2>

            <p className="text-5xl font-bold">

              {stats.winterCount}

            </p>

          </div>

        </div>

        {/* BUTTON */}

        <button

          onClick={generateOutfit}

          className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 md:px-8 py-4 rounded-3xl text-white font-bold text-lg md:text-xl hover:scale-105 transition-all"

        >

          Generate AI Outfit 🌦️

        </button>

        {/* RESULT */}

        {outfit && (

          <div className="bg-white dark:bg-zinc-900 mt-10 p-6 md:p-8 rounded-3xl shadow-xl">

            <h2 className="text-2xl md:text-3xl font-bold mb-5">

              AI Outfit Result ✨

            </h2>

            <p className="mb-3">

              <strong>
                Weather:
              </strong>
              {" "}
              {weather}

            </p>

            <p className="mb-5">

              <strong>
                Temperature:
              </strong>
              {" "}
              {temperature}°C

            </p>

            <p className="text-base md:text-lg leading-8 whitespace-pre-line">

              {outfit}

            </p>

          </div>

        )}

      </div>

    </DashboardLayout>

  );

}

export default Dashboard;
