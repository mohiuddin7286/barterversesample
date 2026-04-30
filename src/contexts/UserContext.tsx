import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  coins: number;
  username: string;
  setCoins: (coins: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [coins, setCoins] = useState(250);
  const username = 'TraderOne';

  return <UserContext.Provider value={{ coins, username, setCoins }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
}