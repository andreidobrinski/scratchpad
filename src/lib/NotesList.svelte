<script lang="ts">
	import { Heading, Card, P, GradientButton } from 'flowbite-svelte';
	import { noteStore, type Note } from './noteStore';

	export let handleEditNote: (note: Note) => void;
	export let handleAddNote: () => void;

	$: notes = Object.values($noteStore);
</script>

<main class="p-2">
	<div class="flex justify-between items-end pb-2">
		<Heading>All Notes</Heading>
		<GradientButton type="button" on:click={handleAddNote} color="cyanToBlue" size="sm" outline>
			Add
		</GradientButton>
	</div>
	{#each notes as note}
		<button on:click={() => handleEditNote(note)}>
			<Card>
				<P>
					{note.text}
				</P>
			</Card>
		</button>
	{/each}
</main>
