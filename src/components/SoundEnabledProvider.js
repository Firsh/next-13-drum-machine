'use client';
import React from 'react';
export const SoundContext = React.createContext();
export default function SoundEnabledProvider({ children }) {
	const [soundEnabled, setSoundEnabled] = React.useState(true);
	return (
		<SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
			{children}
		</SoundContext.Provider>
	);
}
export function useSoundEnabled() {
	const context = React.useContext(SoundContext);
	if (!context) {
		throw new Error("Can't consume context without a SoundEnabledProvider!")
	}
	return context;
}