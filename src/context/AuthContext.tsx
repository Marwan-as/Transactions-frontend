import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type User = {};

interface AuthContextProps {
  user?: User | null;
  isAuthenticated?: boolean;
  token?: string | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  setToken: Dispatch<SetStateAction<string | null>>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({ user: null, isAuthenticated: false, token: null, setUser: () => {}, setToken: () => {} });

export const useAuthContext = () => {
  const context = useContext<AuthContextProps>(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  return <AuthContext.Provider value={{ token, user, isAuthenticated, setUser, setToken }}>{children}</AuthContext.Provider>;
};
