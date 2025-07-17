<!-- DetailsGroup.svelte -->
<script lang="ts">
  interface Props {
    classes?: string;
    attributes?: Record<string, string>;
    children?: any;
  }

  let {
    classes = '',
    attributes = {},
    children
  }: Props = $props();
</script>

<div class="nhsuk-expander-group{classes ? ` ${classes}` : ''}" {...attributes}>
  {@render children?.()}
</div>