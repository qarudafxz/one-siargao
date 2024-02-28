import { create } from 'zustand'

interface ToggleState {
 isLoading: boolean
 toggleLoading: (isLoading: boolean) => void
}

export const useToggleStore = create<ToggleState>((set) => ({
 isLoading: true,
 toggleLoading: (isLoading) => set({ isLoading })
}))
