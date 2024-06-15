import { createContext } from "react";
import useSqliteManager, { initialState } from "./useSqliteManager";

type UseSqliteManager = ReturnType<typeof useSqliteManager>;

export const DatabaseContext = createContext<UseSqliteManager>({
  states : initialState,
  handleInsertCustomData: () => {},
  handleGetAllCustomData: () => {}
});

export const DatabaseContextProvider: React.FC<PropsType> = ({ children }) => {
  const sqliteManager = useSqliteManager();
  
  return (
    <DatabaseContext.Provider value={sqliteManager}>
      {children}
    </DatabaseContext.Provider>
  );
};


interface PropsType {
  children: React.ReactNode;
}
