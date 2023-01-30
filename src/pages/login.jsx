import { InputUsage } from "@/components/Input";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useAuth } from "@/Contexts/AuthProvider";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, loading } = useAuth();

  return (
    <div
      className="grid max=width-7xl md:px-28 mx-auto h-screen  bg-slate-900 w-full
      grid-cols-[1fr,300px] relative
    "
    >
      <div>
        <img
          src="/images/bg-login.jpg"
          alt="Login"
          className="h-screen w-full object-cover
          absolute top-0 left-0 z-0
          "
        />
      </div>
      <div
        className="flex flex-col gap-5 align-center justify-center w-full
        bg-slate-900 p-10 shadow-2xl z-10
      "
      >
        <h1 className="text-center text-3xl font-bold text-primary ">Login</h1>
        <InputUsage
          type="email"
          placeholder="example@example.com"
          value={email}
          name="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputUsage
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-primary text-white rounded-md p-2 hover:brightness-110 transition duration-200 flex items-center justify-center"
          onClick={() => signIn({ email, password })}
        >
          {loading ? <LoadingSpinner /> : "Login"}
        </button>

        <div className="flex  items-center gap-2 justify-between ">
          <span className="text-sm text-gray-200">Dont have an account?</span>
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </div>
        <div className="flex  items-center gap-2 justify-between">
          <span className="text-sm text-gray-200">Forgot your password?</span>
          <Link href="/forgot-password" className="text-primary">
            Reset
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
