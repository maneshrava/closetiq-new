import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import DashboardLayout from "../layouts/DashboardLayout";

function History() {

  const [history, setHistory] =
    useState([]);

  const [showFavoritesOnly, setShowFavoritesOnly] =
    useState(false);

  useEffect(() => {

    let ignore =
      false;

    async function fetchHistory() {

      try {

        const res =
          await fetch(

            "http://localhost:5000/api/history",

            {

              headers: {

                Authorization:
                  `Bearer ${localStorage.getItem("token")}`,

              },

            }

          );

        const data =
          await res.json();

        if (!ignore) {

          setHistory(
            data.history ||
            data.data ||
            []
          );

        }

      } catch (error) {

        console.log(error);

      }

    }

    fetchHistory();

    return () => {

      ignore =
        true;

    };

  }, []);

  const toggleFavorite =
    async (item) => {

      try {

        const res =
          await fetch(

            `http://localhost:5000/api/history/${item._id}/favorite`,

            {

              method: "PATCH",

              headers: {

                "Content-Type": "application/json",

                Authorization:
                  `Bearer ${localStorage.getItem("token")}`,

              },

              body:
                JSON.stringify({

                  isFavorite:
                    !item.isFavorite,

                }),

            }

          );

        const data =
          await res.json();

        if (!res.ok) {

          throw new Error(
            data.message ||
            "Failed to update favorite"
          );

        }

        setHistory((items) =>
          items.map((historyItem) =>
            historyItem._id === item._id
              ? data.outfit
              : historyItem
          )
        );

      } catch (error) {

        console.log(error);

        alert(
          error.message ||
          "Failed to update favorite"
        );

      }

    };

  const visibleHistory =
    showFavoritesOnly
      ? history.filter((item) => item.isFavorite)
      : history;

  return (

    <DashboardLayout>

      <div>

        <div className="flex items-center justify-between gap-6 mb-10">

          <h1 className="page-title">

            Outfit History

          </h1>

          <button
            onClick={() =>
              setShowFavoritesOnly((value) => !value)
            }
            className="premium-button-secondary hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600"
          >

            <FaHeart className="text-red-400" />

            {showFavoritesOnly
              ? "Show All"
              : "Favorites"}

          </button>

        </div>

        <div className="space-y-6">

          {visibleHistory.length === 0 && (

            <div className="premium-card muted-text">

              {showFavoritesOnly
                ? "No favorite outfits yet."
                : "No outfit history yet."}

            </div>

          )}

          {visibleHistory.map((item) => (

            <div
              key={item._id}
              className="premium-card"
            >

              <div className="flex items-start justify-between gap-6">

                <p className="whitespace-pre-line text-lg leading-8 text-zinc-700 dark:text-zinc-300">

                  {item.suggestion}

                </p>

                <button
                  onClick={() => toggleFavorite(item)}
                  className="premium-button-secondary shrink-0 px-4 py-3 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600"
                >

                  {item.isFavorite
                    ? <FaHeart className="text-red-400" />
                    : <FaRegHeart />}

                  {item.isFavorite
                    ? "Favorited"
                    : "Favorite"}

                </button>

              </div>

              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">

                {new Date(
                  item.createdAt
                ).toLocaleString()}

              </p>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>

  );

}

export default History;
