import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import Joi from "@hapi/joi";
import classNames from "classnames";

function Form() {
  const schema = Joi.object({
    username: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9/*-+,./<>?]{3,30}$"), "Password Rule")
      .required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => console.log("submit", data);

  console.log(errors);

  const usernameClassName = classNames(
    "w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",
    { "border-red-500": errors.username && errors.username.message }
  );

  const passwordClassName = classNames(
    "w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",
    { "border-red-500": errors.password && errors.password.message }
  );

  return (
    <div>
      <h3>Form</h3>
      <div className="w-full max-w-xs">
        <form
          noValidate
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={usernameClassName}
              id="username"
              type="email"
              name="username"
              placeholder="Username"
              ref={register}
            />
            {errors.username ? (
              <p className="text-xs italic text-red-500">
                {errors.username && errors.username.message}
              </p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={passwordClassName}
              id="password"
              type="password"
              name="password"
              placeholder="******************"
              ref={register}
            />
            {errors.password ? (
              <p className="text-xs italic text-red-500">
                {errors.password && errors.password.message}
              </p>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              href="no"
              className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-xs text-center text-gray-500">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Form;
