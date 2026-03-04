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

type UserState = {
  id: number | undefined;
  name: string | undefined;
  lastname: string | undefined;
  setId: (id: number) => void;
  setName: (name: string) => void;
  setLastname: (lastname: string) => void;
};

export const useIdUser = create<UserState>()(
  persist(
    (set) => ({
      id: undefined,
      name: undefined,
      lastname: undefined,
      setId: (id: number) => set({ id }),
      setName: (name: string) => set({ name }),
      setLastname: (lastname: string) => set({ lastname }),
    }),
    { name: 'user_id' }
  )
);