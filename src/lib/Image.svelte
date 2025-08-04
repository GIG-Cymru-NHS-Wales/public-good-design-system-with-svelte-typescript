<script lang="ts">
  import type { ImageProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';

  let {
    src,
    alt,
    caption,
    sizes,
    srcset,
    classes = '',
    attributes = {}
  }: ImageProps = $props();
</script>

<figure 
  class="nhsuk-image{classes ? ` ${classes}` : ''}"
  {...parseAttributes(attributes)}
>
  <img 
    class="nhsuk-image__img" 
    {src} 
    {alt}
    {sizes}
    {srcset}
  >
  {#if caption}
    <figcaption class="nhsuk-image__caption">
      {@html caption}
    </figcaption>
  {/if}
</figure>

<style>
  .nhsuk-image {
    background-color: #ffffff;
    border-bottom: 1px solid #d8dde0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 32px;
    margin-top: 32px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-image {
      margin-bottom: 48px;
      margin-top: 48px;
    }
  }

  @media (min-width: 61.875em) {
    .nhsuk-image {
      width: 66.6667%;
    }
  }

  @media print {
    .nhsuk-image {
      width: 50%;
    }
  }

  .nhsuk-image + .nhsuk-image {
    margin-top: 0;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-image + .nhsuk-image {
      margin-top: 0;
    }
  }

  .nhsuk-image__img {
    display: block;
    width: 100%;
  }

  .nhsuk-image__caption {
    padding: 24px;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-image__caption {
      font-size: 19px;
      font-size: 1.1875rem;
      line-height: 1.47368;
    }
  }
</style>
