import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../imgs/google.png";
import InputContainer from "../components/input.component";
import AnimationWrapper from "../common/page-animation";
const UserAuthForm = ({ type }) => {
  return (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center">
        <form className="w-[80%] sm:p-4 p-1 max-w-[400px] gap-y-4 flex flex-col items-center">
          <h1 className="font-gelasio text-[36px] mb-16">
            {type === "signup" ? "Join Us Today" : "Welcome Back"}
          </h1>

          {type === "signup" ? (
            <InputContainer
              type="text"
              name="fullname"
              placeholder="Full Name"
              icon="fi-rr-user"
            />
          ) : (
            ""
          )}
          <InputContainer
            type="email"
            name="email"
            placeholder="Email"
            icon="fi-rr-envelope"
          />
          <InputContainer
            type="password"
            name="password"
            placeholder="Password"
            icon="fi-rr-key"
          />

          <button className="btn-dark center mt-6" type="submit">
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>

          <div className="flex w-full items-center gap-x-2 bg-opacity-50 mt-5">
            <div className="bg-grey h-[2px] flex-1"></div>
            <p className="text-sm text-grey">OR</p>
            <div className="bg-grey h-[2px] flex-1"></div>
          </div>

          <button className="btn-dark mt-5 w-[85%] py-2 flex justify-center items-center gap-x-2">
            <img src={googleIcon} alt="Google" className="w-5" />
            <p className="text-md">Continue With Google</p>
          </button>

          {type == "signup" ? (
            <p className="mt-6 text-dark-grey text-xl text-center ">
              Already a member ?
              <Link to="/signin" className="underline text-black text-xl ml-1">
                Sign in here
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center ">
              Don't have an account ?{" "}
              <Link to="/signup" className="underline text-black text-xl ml-1">
                Join us today
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
