/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

type State = {
 shortestPath: any[]
 setShortestPath: (shortestPath: any[]) => void
}

export const useShortestPath = create<State>((set) => ({
 shortestPath: [],
 setShortestPath: (shortestPath) => set({ shortestPath })
}))
