import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

import DashboardLayout from "../layouts/DashboardLayout";

function Favorites() {

  const [favorites, setFavorites] =
    useState([]);

  useEffect(() => {

    let ignore =
      false;

    async function fetchFavorites() {

      try {

        const res =
          await fetch(

            `${import.meta.env.VITE_API_URL}/api/history/favorites",

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

          setFavorites(
            data.favorites ||
            []
          );

        }

      } catch (error) {

        console.log(error);

      }

    }

    fetchFavorites();

    return () => {

      ignore =
        true;

    };

  }, []);

  const removeFavorite =
    async (item) => {

      try {

        const res =
          await fetch(

            `${import.meta.env.VITE_API_URL}/api/history/${item._id}/favorite`,

            {

              method: "PATCH",

              headers: {

                "Content-Type": "application/json",

                Authorization:
                  `Bearer ${localStorage.getItem("token")}`,

              },

              body:
                JSON.stringify({

                  isFavorite: false,

                }),

            }

          );

        const data =
          await res.json();

        if (!res.ok) {

          throw new Error(
            data.message ||
            "Failed to remove favorite"
          );

        }

        setFavorites((items) =>
          items.filter((favorite) =>
            favorite._id !== item._id
          )
        );

      } catch (error) {

        console.log(error);

        alert(
          error.message ||
          "Failed to remove favorite"
        );

      }

    };

  return (

    <DashboardLayout>

      <div>

        <h1 className="page-title mb-10">

          Favorite Outfits

        </h1>

        <div className="space-y-6">

          {favorites.length === 0 && (

            <div className="premium-card muted-text">

              Favorite AI-generated outfits will appear here.

            </div>

          )}

          {favorites.map((item) => (

            <div
              key={item._id}
              className="premium-card"
            >

              <div className="flex items-start justify-between gap-6">

                <p className="whitespace-pre-line text-lg leading-8 text-zinc-700 dark:text-zinc-300">

                  {item.suggestion}

                </p>

                <button
                  onClick={() => removeFavorite(item)}
                  className="premium-button-danger shrink-0 px-4 py-3"
                >

                  <FaHeart className="text-red-400" />

                  Remove

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

export default Favorites;
