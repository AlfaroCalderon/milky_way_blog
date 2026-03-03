import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
    isLogged: boolean
    setIsLogged: (value:boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLogged: false,
    setIsLogged: (value) => set({isLogged: value})
}));

export const useIdUser = create(
  persist(
    (set) => ({
      id: undefined,
      setId: (id: number) => set({ id }),
    }),
    { name: 'user_id' }
  )
);