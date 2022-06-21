import React, { useContext } from "react";

type session = {
  userId: string | null;
  accounts: string[] | null;
  permissionAccounts: any[] | null;
};

const SessionContext = React.createContext<session>({
  userId: "id do usuário",
  accounts: [],
  permissionAccounts: [],
});

export const useSession = (): session => {
  const session = useContext(SessionContext);
  return session;
};

const sessionValue = {
  userId: null,
  accounts: [],
  permissionAccounts: [],
};

export const Session: React.FC<{ children: any }> = (props) => {
  return (
    <SessionContext.Provider value={sessionValue}>
      {props.children}
    </SessionContext.Provider>
  );
};

export const setSessionId = (userId: string) => {
  sessionValue.userId = userId;
};

const createSessionContext = () => {
  let SessionContext = React.createContext<session>({
    userId: null,
    accounts: null,
    permissionAccounts: null,
  });
  return { SessionContext };
};

export const Guard: React.FC<{ children: React.ReactNode }> = (props) => {
  const session = useContext(SessionContext);

  return session.userId === null ? (
    <h1>"Unauthorized"</h1>
  ) : (
    <>{props?.children}</>
  );
};

export default SessionContext;
