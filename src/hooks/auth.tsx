import { createContext, ReactNode, useContext, useState } from 'react';

type User = {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
}

type AuthContextData = {
    user: User | null;
    isSigning: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider ({ children }: AuthProviderProps) {
    const [ isSigning, setIsSigning ] = useState(false);
    const [ user, setUser ] = useState<User | null>(null);

    async function signIn(){
        
    }

    async function signOut(){
        
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user,
            isSigning
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }