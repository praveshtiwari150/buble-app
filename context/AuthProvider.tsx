import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { auth } from "@/auth";
import { Session } from "next-auth";


type AuthContextType = {
    session: Session | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }:  {children: ReactNode} ) => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const sessionData = await auth();
            setSession(sessionData);
        }

        fetchSession();
    }, []);

    return (
        <AuthContext.Provider value={{ session }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider.")
    }

    return context;
}

export default AuthProvider;