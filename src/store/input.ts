import { create } from 'zustand'

interface InputProps {
 starting_point?: string
 time?: string
 startData: {
  starting_point: string
  time: string
 }
 setStartData: (startData: { starting_point: string; time: string }) => void
}

export const useInput = create<InputProps>((set) => ({
 starting_point: '',
 time: '',
 startData: {
  starting_point: '',
  time: ''
 },
 setStartData: (startData) => set({ startData })
}))
