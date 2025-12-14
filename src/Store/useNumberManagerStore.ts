import { create } from "zustand";
import { persist } from "zustand/middleware";

/* ================== TIPOS ================== */
export type NumberItem = {
  id: number;
  number: string;
  nameGym: string;
  cnpj: string;
  deployer: string;
  linkedAt?: Date;
};

export type CompletedGym = {
  id: number;
  nameGym: string;
  cnpj: string;
  deployer: string;
  unlinkedAt: Date;
};

type State = {
  activeNumbers: NumberItem[];
  completedGyms: CompletedGym[];
  searchTerm: string;

  addNumber: (data: NumberItem) => void;
  editInfo: (id: number, data: Partial<NumberItem>) => void;
  unlinkNumber: (id: number) => void;
  deleteNumber: (id: number) => void;
  setSearchTerm: (term: string) => void;
};

/* ================== STORE ================== */
export const useNumberStore = create<State>()(
  persist(
    (set, get) => ({
      activeNumbers: [],
      completedGyms: [],
      searchTerm: "",

      setSearchTerm: (term) => set({ searchTerm: term }),

      addNumber: (data) =>
        set((state) => ({
          activeNumbers: [...state.activeNumbers, data],
        })),

      editInfo: (id, data) =>
        set((state) => ({
          activeNumbers: state.activeNumbers.map((item) =>
            item.id === id ? { ...item, ...data } : item
          ),
        })),

      unlinkNumber: (id) => {
        const item = get().activeNumbers.find((n) => n.id === id);
        if (!item) return;

        set((state) => ({
          completedGyms: [
            ...state.completedGyms,
            {
              id: item.id,
              nameGym: item.nameGym,
              cnpj: item.cnpj,
              deployer: item.deployer,
              unlinkedAt: new Date(),
            },
          ],

          activeNumbers: state.activeNumbers.map((n) =>
            n.id === id
              ? {
                  ...n,
                  nameGym: "",
                  cnpj: "",
                  deployer: "",
                  linkedAt: undefined,
                }
              : n
          ),
        }));
      },

      deleteNumber: (id) =>
        set((state) => ({
          activeNumbers: state.activeNumbers.filter(
            (item) => item.id !== id
          ),
        })),
    }),
    {
      name: "number-manager-storage", // chave do localStorage
    }
  )
);
