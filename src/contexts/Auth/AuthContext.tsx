import React, { createContext, ReactNode, useContext, useState } from "react";
import CalegariHttpClient from "../../services/HttpClients/CalegariHttpClient/CalegariHttpClient";
import CalegariLocalDataService from "../../services/LocalData/CalegariLocalDataService/CalegariLocalDataService";

export interface UserType {
    id                  : number,
    firstName           : string,
    lastName            : string,
    email               : string,
    login               : string,
    password?           : string,
    avatar?             : string,
    created?            : Date,
    tokenCreatedAt      : Date,
    tokenExpirationAt   : Date,
    token               : string
}

export interface AuthContextType {
    user        : UserType;
    signin      : (user: string, pass: string) => Promise<void>;
    signout     : () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState<UserType>(getUserLocal());

    const signin = async (login: string, pass: string): Promise<void> => {

        let userLogin       = {} as UserType;
        const client        = CalegariHttpClient.getInstance();
        const localService  = CalegariLocalDataService.getInstance();

        const { statusCode, data } = await client.post(`/auth/login`, {
            user    : login,
            password: pass
        });

        if (statusCode >= 200 && statusCode <= 299) {

            userLogin   = data.user;

            client.setToken(userLogin.token );
            localService.insert('user', userLogin);

            setUser(userLogin);
        }
    };

    const signout = (): void => {

        const localService = CalegariLocalDataService.getInstance();
        localService.delete('user');
        setUser({} as UserType);
    };

    const value = { user, signin, signout };

    return <AuthContext.Provider value={ value }>{ children }</AuthContext.Provider>;
}

export function useAuth() {

    return useContext(AuthContext);
}

function getUserLocal(): UserType {

    const localService = CalegariLocalDataService.getInstance();
    let user = localService.get('user') as UserType;

    if (!isAnUserType(user)) {

        user = {} as UserType;
    }

    return user;
}

function isAnUserType(obj: UserType): boolean {

    return 'id' in obj && 'firstName' in obj && 'lastName' in obj
        && 'email' in obj && 'login' in obj && 'tokenCreatedAt' in obj
        && 'tokenExpirationAt' in obj && 'token' in obj
    ;
}