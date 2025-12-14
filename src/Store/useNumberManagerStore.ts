import { create } from "zustand";

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
  deleteNumber: (id: number) => void; // ✅ NOVO
  setSearchTerm: (term: string) => void;
};

/* ================== STORE ================== */
export const useNumberStore = create<State>((set, get) => ({
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
      // salva histórico
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

      // limpa o número (volta a ficar disponível)
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

  /* ================== DELETE DEFINITIVO ================== */
  deleteNumber: (id) =>
    set((state) => ({
      activeNumbers: state.activeNumbers.filter(
        (item) => item.id !== id
      ),
    })),
}));
