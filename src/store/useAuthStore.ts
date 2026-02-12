import {create} from 'zustand';

type AuthState = {
    isLogged: boolean
    setIsLogged: (value:boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLogged: false,
    setIsLogged: (value) => set({isLogged: value})
}));