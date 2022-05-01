import { UserType } from "../../contexts/Auth/AuthContext";

export interface ISidenav {
    isOpen?: boolean,
    setIsOpen: (isOpen: boolean) => void,
    user?: UserType
}