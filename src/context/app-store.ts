import { create } from 'zustand'

type AppState = {
	loaded: boolean
	setLoaded: (loaded: boolean) => void
}

const useStore = create<AppState>((set) => ({
	loaded: false,
	setLoaded: (loaded) => set({ loaded })
}))

export default useStore
