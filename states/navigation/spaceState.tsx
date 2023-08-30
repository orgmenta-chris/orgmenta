
import { create } from 'zustand';


export const spaceState = create(set => ({
    active: undefined,
    update: (e: any) => set((state: { active: string | undefined }) => ({ active: state.active === e ? undefined : e })),
}));