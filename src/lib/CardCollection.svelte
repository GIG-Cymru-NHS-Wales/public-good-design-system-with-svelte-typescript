<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import type { CardProps } from '$lib/types';

  interface Props {
    cards: CardProps[];
    variant?: 'grid' | 'list' | 'group';
    classes?: string;
    onCardClick?: (card: CardProps, index: number) => void;
  }

  let {
    cards,
    variant = 'list',
    classes = '',
    onCardClick
  }: Props = $props();

  function handleCardClick(card: CardProps, index: number) {
    return (event: CustomEvent<MouseEvent>) => {
      onCardClick?.(card, index);
    };
  }
</script>

<div class="card-collection card-collection--{variant}{classes ? ` ${classes}` : ''}">
  {#each cards as card, index}
    <Card
      {...card}
      on:click={handleCardClick(card, index)}
    >
      {#if card.children}
        {@render card.children()}
      {/if}
    </Card>
  {/each}
</div>

<style>
  .card-collection--grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .card-collection--group {
    @apply nhsuk-card-group;
  }

  .card-collection--list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
