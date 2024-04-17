"use client";
import { useForm } from "react-hook-form";

export default function FormRegistr() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 m-0 m-auto mt-56">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          First name
        </label>
        <input
          {...register("firstName")}
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
          placeholder="Name..."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Phone number
        </label>
        <input
          {...register("phoneNumber")}
          type="tel"
          id="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="380-444-4444"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="adress"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Address
        </label>
        <input
          {...register("Address")}
          type="text"
          id="adress"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            {...register("Priority")}
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          Want to yo give your order priority?
        </label>
      </div>
      <button
        type="submit"
        className="text-black px-3 py-4 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
      >
        Order now for €39.00
      </button>
    </form>
  );
}
