import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;
  const { "nextauth.token": token } = parseCookies();
  const [loading, setLoading] = useState(false);
  // const isAdmin = user?.role === "ROLE_ADMIN";

  const router = useRouter();

  async function register({ email, password, firstName, lastName }) {
    setLoading(true);

    try {
      const { data } = await axios.post(
        process.env.BASE_URL + "/auth/register",
        {
          email,
          password,
          firstName,
          lastName,
        }
      );

      const { accessToken } = data;

      setCookie(undefined, "nextauth.token", accessToken, {
        maxAge: 60 * 60 * 1, // 1 hour
      });
    } catch (err) {
      console.log("errooo", err.message);
      setLoading(false);
      toast.error("Erro ao efetuar cadastro!");
    }

    setTimeout(() => {
      setLoading(false);
      router.push("/login");
      toast.success("Cadastro efetuado com sucesso!");
    }, 1000);
  }

  async function signIn({ email, password }) {
    setLoading(true);

    try {
      const { data } = await axios.post(process.env.BASE_URL + "/auth/login", {
        email,
        password,
      });

      const { accessToken } = data;

      setCookie(undefined, "nextauth.token", accessToken, {
        maxAge: 60 * 60 * 24, // 24 hours
      });

      setLoading(false);
      router.push("/");
      toast.success("Login efetuado com sucesso!");
    } catch (err) {
      console.log("errooo", err.message);
      setLoading(false);
      toast.error("Erro ao efetuar login!");
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
    router.push("/login");

    setUser(null);
    destroyCookie(undefined, "nextauth.token");
  }

  useEffect(() => {
    if (token) {
      handleGetToken();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
        handleGetToken,
        register,
        loading,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
