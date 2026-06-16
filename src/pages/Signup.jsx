import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";

function Signup() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      name: "",
      email: "",
      password: "",

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const res =
          await API.post(

            "/auth/register",

            formData

          );

        localStorage.setItem(
          "token",
          res.data.token
        );

        localStorage.setItem(
          "user",

          JSON.stringify(
            res.data.user
          )
        );

        navigate(
          "/dashboard"
        );

      } catch (error) {

        alert(

          error.response?.data
            ?.message ||

          "Signup Failed"

        );

      }

    };

  return (

    <div className="premium-app-shell flex min-h-screen items-center justify-center bg-zinc-50 px-5 text-zinc-900 transition-all duration-300 dark:bg-zinc-950 dark:text-zinc-100">

      <form
        onSubmit={handleSubmit}
        className="premium-card w-full max-w-[420px] p-10"
      >

        <h1 className="page-title mb-10 text-center">

          Signup

        </h1>

        <div className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            className="premium-input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            className="premium-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            className="premium-input"
            required
          />

        </div>

        <button
          type="submit"
          className="premium-button-primary mt-8 w-full py-4 text-lg"
        >

          Signup

        </button>

        <p className="muted-text mt-6 text-center">

          Already have account?

          {" "}

          <Link
            to="/login"
            className="font-semibold text-violet-500 transition-all duration-300 hover:text-violet-400"
          >

            Login

          </Link>

        </p>

      </form>

    </div>

  );

}

export default Signup;
