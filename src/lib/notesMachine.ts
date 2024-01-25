import { createMachine, assign } from 'xstate';

export const notesMachine = createMachine({
	id: 'notes',
	initial: 'addNote',
	context: {
		currentNote: null
	},
	states: {
		addNote: {
			on: { SUBMIT: 'notesList' }
		},
		editNote: {
			on: { SUBMIT: 'notesList' }
		},
		notesList: {
			on: {
				ADD_NOTE: 'addNote',
				EDIT_NOTE: {
					target: 'editNote',
					actions: assign({
						currentNote: ({ event }) => event.value
					})
				}
			}
		}
	}
});
