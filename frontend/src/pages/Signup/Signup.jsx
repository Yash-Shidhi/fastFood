import React from "react";
import { useForm } from "react-hook-form";
import Navbar2 from "../../components/Navbar/Navbar2";
import Footer from "../../components/Footer/Footer";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    alert(`Register succesfull ${data.username}`);
  }

  return (
    <>
      <Navbar2 />

      <div className="bg-orange-600 h-28 flex justify-center items-center text-4xl text-white rounded-lg mb-10">
        Sign up
      </div>
      <form
        class="w-full h-96 flex flex-col gap-4 justify-center items-center mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="flex items-start flex-col justify-start w-80">
          <label htmlFor="username" class="text-sm text-gray-700 mr-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-600"
            {...register("username", {
              required: { value: true, message: "required*" },
              minLength: { value: 3, message: "min length atleast 3" },
              maxLength: { value: 10, message: "max length atmost 10" },
            })}
          />
          {errors.username && (
            <p className="text-red-700">{errors.username.message}</p>
          )}
        </div>

        <div class="flex items-start flex-col justify-start w-80">
          <label htmlFor="email" class="text-sm text-gray-700 mr-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-600"
            {...register("email", {
              required: { value: true, message: "required*" },
            })}
          />
          {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}
        </div>

        <div class="flex items-start flex-col justify-start w-80">
          <label htmlFor="password" class="text-sm text-gray-700 mr-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-600"
            {...register("password", {
              required: { value: true, message: "required*" },
              minLength: { value: 3, message: "min length atleast 3" },
              maxLength: { value: 10, message: "max length atmost 10" },
            })}
          />
          {errors.password && (
            <p className="text-red-700">{errors.password.message}</p>
          )}
        </div>
        <div class="flex items-start flex-col justify-start w-80">
          <label htmlFor="password" class="text-sm text-gray-700 mr-2">
            Confirm Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
        </div>

        <button
          type="submit"
          class="bg-orange-600 hover:bg-orange-500 text-white font-medium py-2 px-4 rounded-full shadow-sm"
        >
          Register
        </button>
      </form>

      <Footer />
    </>
  );
};

export default Signup;
