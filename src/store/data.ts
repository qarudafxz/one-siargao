import { create } from 'zustand'

interface Time {
 starting_time: number
 end_time: number
}

interface Coordinates {
 location_name: string
 coordinates: number[]
}

interface DataProps {
 time_travel?: Time
 starting_points?: Coordinates[]
 mode_of_transportation?: string
 speed?: number
}

interface DataState {
 data: DataProps
 setData: (data: DataProps) => void
}

export const useDataStore = create<DataState>((set) => ({
 data: {},
 setData: (data) => set({ data })
}))
