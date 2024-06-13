import { useState, useContext, createContext, ReactNode } from 'react'

const UserDataCtx = createContext<{
    token?: string;
    user: unknown;
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>
    setUser: React.Dispatch<React.SetStateAction<unknown>>;

}>({
    token: undefined,
    user: {},
    setToken: () => null,
    setUser: () => null,
})

export const useUserDataCtx = () => useContext(UserDataCtx)

export default function UserDataProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | undefined>(undefined)
    const [user, setUser] = useState<unknown>({})
    return <UserDataCtx.Provider value={{ token, setToken, user, setUser }}>{children}</UserDataCtx.Provider>
}