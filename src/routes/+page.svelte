<script lang="ts">
	import { useMachine } from '@xstate/svelte';
	import { notesMachine } from '$lib/notesMachine';
	import NoteDetail from '$lib/NoteDetail.svelte';
	import NotesList from '$lib/NotesList.svelte';
	import type { Note } from '$lib/noteStore';

	const { snapshot, send } = useMachine(notesMachine);

	export function handleNoteSubmit() {
		send({ type: 'SUBMIT' });
	}

	export function handleAddNote() {
		send({ type: 'ADD_NOTE' });
	}

	export function handleEditNote(note: Note) {
		send({ type: 'EDIT_NOTE', value: note });
	}
</script>

{#if $snapshot.matches('addNote')}
	<NoteDetail {handleNoteSubmit} currentNote={null} />
{/if}

{#if $snapshot.matches('editNote')}
	<NoteDetail {handleNoteSubmit} currentNote={$snapshot.context.currentNote} />
{/if}

{#if $snapshot.matches('notesList')}
	<NotesList {handleEditNote} {handleAddNote} />
{/if}
