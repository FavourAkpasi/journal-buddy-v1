import { create } from "zustand";
import { LoginType, RegisterType, UserType } from "../type/auth";
import { toast } from "react-toastify";
import authService from "../services/authServises";

type UserState = {
  user: UserType | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setUser: (user: UserType) => void;
  register: (payload: RegisterType) => void;
  login: (payload: LoginType) => void;
  resetPassword: (payload: {email: string}) => void;
  logout: () => void;
};

const savedUser: string | null = localStorage.getItem("user");
const parsedUser: UserType | undefined = savedUser
  ? JSON.parse(savedUser)
  : undefined;

const useAuth = create<UserState>((set) => ({
  user: parsedUser || null,
  loading: false,
  setUser: (user: UserType) => {
    set((state) => ({ user: (state.user = user) }));
  },
  setLoading: (loading: boolean) => {
    set((state) => ({ loading: (state.loading = loading) }));
  },

  register: async (payload: RegisterType) => {
    const { setUser, setLoading } = useAuth.getState();
    setLoading(true);
    try {
      const user = await authService.register(payload);
      setUser(user);
      setLoading(false);
      toast.success("Account created successfully");
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  },
  login: async (payload: LoginType) => {
    const { setUser, setLoading } = useAuth.getState();
    setLoading(true);
    try {
      const user = await authService.login(payload);
      setUser(user);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  },
  resetPassword: async (payload: {email: string}) => {
    const { setUser, setLoading } = useAuth.getState();
    setLoading(true);
    try {
      const user = await authService.updatePassword(payload);
      setUser(user);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  },
  logout: () => set({ user: null }),
}));

export default useAuth;
