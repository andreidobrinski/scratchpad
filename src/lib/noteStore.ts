import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { v4 as uuidv4 } from 'uuid';

interface Notes {
	[key: string]: Note;
}

export interface Note {
	id: string;
	text: string;
}

const localStorageKey = 'scratchpad-notes';

const stored = browser && localStorage.getItem(localStorageKey);

const initialValue: Notes = stored ? JSON.parse(stored) : {};

export const noteStore = writable(initialValue);

noteStore.subscribe((value) => {
	if (browser) {
		localStorage.setItem(localStorageKey, JSON.stringify(value));
	}
});

export function addNote(text: string) {
	const newNoteId = uuidv4();
	noteStore.update((notes) => {
		return {
			[newNoteId]: {
				id: newNoteId,
				text
			},
			...notes
		};
	});
}

export function editNote(id: string, text: string) {
	noteStore.update((notes) => {
		const { [id]: editedNote, ...rest } = notes;
		return {
			[id]: {
				...editedNote,
				text
			},
			...rest
		};
	});
}

export function deleteNote(id: string) {
	noteStore.update((notes) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { [id]: deletedNote, ...rest } = notes;
		return rest;
	});
}
