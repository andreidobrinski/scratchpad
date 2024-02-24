<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Heading, Card, P, GradientButton } from 'flowbite-svelte';
	import { noteStore, type Note } from './noteStore';

	export let handleEditNote: (note: Note) => void;
	export let handleAddNote: () => void;

	$: notes = Object.values($noteStore);
</script>

<main class="p-2" in:fly={{ duration: 300, x: 0, y: -80, opacity: 0.5, easing: quintOut }}>
	<div class="flex items-end justify-between pb-2">
		<Heading>All Notes</Heading>
		<GradientButton type="button" on:click={handleAddNote} color="cyanToBlue" size="sm" outline>
			Add
		</GradientButton>
	</div>
	{#each notes as note, i}
		<button
			on:click={() => handleEditNote(note)}
			in:fly|global={{
				duration: 400,
				delay: i * 100,
				x: 80,
				y: 80,
				easing: quintOut
			}}
		>
			<Card>
				<P>
					{note.text}
				</P>
			</Card>
		</button>
	{/each}
</main>
