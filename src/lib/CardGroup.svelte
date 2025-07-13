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

<ul class="nhsuk-card-group{classes ? ` ${classes}` : ''}" {...attributes}>
  {@render children?.()}
</ul>

<!-- CardGroupItem.svelte -->
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

<li class="nhsuk-card-group__item{classes ? ` ${classes}` : ''}" {...attributes}>
  {@render children?.()}
</li>
