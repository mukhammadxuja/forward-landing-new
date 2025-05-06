"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppContextType {
  setOpenContactDialog: (open: boolean) => void;
  openContactDialog: boolean;
  openMobileNav: boolean;
  setOpenMobileNav: (value: boolean) => void;
  favorites: any[];
  setFavorites: (favorites: any[]) => void;
  addToFavorites: (billboard: any) => void;
  removeFromFavorites: (id: number) => void;
  removeAllFavorites: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [openContactDialog, setOpenContactDialog] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [favorites, setFavorites] = useState<any[]>([]);

  // console.log(favorites, "favorites");

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addToFavorites = (billboard: any) => {
    if (favorites.some((item) => item.id === billboard.id)) {
      return;
    }
    const updatedFavorites = [...favorites, billboard];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (id: number) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // localStorage'ga saqlash
  };

  const removeAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
    <AppContext.Provider
      value={{
        openContactDialog,
        setOpenContactDialog,
        openMobileNav,
        setOpenMobileNav,
        favorites,
        setFavorites,
        addToFavorites,
        removeFromFavorites,
        removeAllFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
