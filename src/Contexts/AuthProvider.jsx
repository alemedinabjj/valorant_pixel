import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import axios from "axios";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;
  const { "nextauth.token": token } = parseCookies();

  const router = useRouter();

  async function signIn({ email, password }) {
    try {
      const { data } = await axios.post(process.env.BASE_URL + "/auth/login", {
        email,
        password,
      });

      const { accessToken } = data;

      setCookie(undefined, "nextauth.token", accessToken, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      // setCookie(undefined, "nextauth.user", JSON.stringify(user), {
      //   maxAge: 60 * 60 * 1, // 1 hour
      // });

      // axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      // setUser(user);

      router.push("/");
    } catch (err) {
      console.log("errooo", err);
    }
  }

  async function handleGetToken() {
    const response = await axios.get(process.env.BASE_URL + "/users/token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    setUser(response.data);
  }

  function signOut() {
    setUser(null);
    destroyCookie(undefined, "nextauth.token");
    destroyCookie(undefined, "nextauth.user");

    router.push("/");
  }

  useEffect(() => {
    handleGetToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, handleGetToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
