<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { GradientButton, Textarea } from 'flowbite-svelte';
	import { addNote, editNote, deleteNote, type Note } from './noteStore';

	export let handleNoteSubmit: () => void;
	export let currentNote: Note | null;

	let value = currentNote?.text ?? '';

	function handleSubmit(e: SubmitEvent) {
		if (currentNote) {
			editNote(currentNote.id, value);
		} else {
			addNote(value);
		}
		handleNoteSubmit();
	}

	function handleDelete() {
		if (currentNote) {
			deleteNote(currentNote.id);
		}
		handleNoteSubmit();
	}
</script>

<form
	on:submit|preventDefault={handleSubmit}
	in:fly={{ duration: 300, x: 0, y: -80, opacity: 0.5, easing: quintOut }}
>
	<Textarea
		id="textarea-id"
		placeholder="Add your note"
		rows="18"
		name="message"
		aria-label="add your note"
		wrappedClass="block w-full text-m border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 resize-none"
		unWrappedClass="p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
		innerWrappedClass="py-2 px-4 bg-white dark:bg-gray-800"
		bind:value
	>
		<div class="flex justify-between" slot="header">
			<GradientButton type="button" on:click={handleDelete} color="pinkToOrange" size="sm" outline>
				Delete
			</GradientButton>
			<GradientButton type="submit" disabled={!value} color="cyanToBlue" size="sm" outline>
				Save
			</GradientButton>
		</div>
	</Textarea>
</form>
