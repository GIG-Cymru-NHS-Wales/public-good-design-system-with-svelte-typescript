<script lang="ts">
  import Image from './Image.svelte';
</script>

<div class="example-container">
  <h2>Image Examples</h2>
  
  <section class="example">
    <h3>Default Image</h3>
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      alt="Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin."
    />
  </section>

  <section class="example">
    <h3>Image with Caption</h3>
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      sizes="(max-width: 768px) 100vw, 66vw"
      srcset="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w"
      alt="Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin."
      caption="Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
    />
  </section>

  <section class="example">
    <h3>Multiple Images</h3>
    <p>When multiple images are placed consecutively, the top margin of subsequent images is removed:</p>
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      alt="First image showing stretch marks"
      caption="First image caption"
    />
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      alt="Second image showing stretch marks"
      caption="Second image caption"
    />
  </section>

  <section class="example">
    <h3>Image with Custom Classes</h3>
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      alt="Image with custom styling"
      classes="custom-image-class"
      caption="This image has custom classes applied"
    />
  </section>

  <section class="example">
    <h3>Image with Custom Attributes</h3>
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      alt="Image with data attributes"
      attributes={{
        'data-test': 'image-component',
        'data-module': 'image-gallery',
        'id': 'test-image'
      }}
      caption="This image has custom data attributes for testing"
    />
  </section>

  <section class="example">
    <h3>Responsive Image with Multiple Sources</h3>
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      sizes="(max-width: 450px) 100vw, (max-width: 768px) 75vw, 66vw"
      srcset="https://service-manual.nhs.uk/assets/image-example-stretch-marks-300w.jpg 300w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w"
      alt="Responsive image that loads different sizes based on viewport"
      caption="This image loads different resolutions based on screen size"
    />
  </section>

  <section class="example">
    <h3>Image with HTML Caption</h3>
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      alt="Image showing stretch marks with detailed caption"
      caption="Stretch marks are <strong>very common</strong> and do not cause any harm. They're often called <em>striae</em> in medical terms."
    />
  </section>

  <section class="example">
    <h3>Image without Caption</h3>
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      alt="Simple image without any caption text"
    />
  </section>

  <section class="example">
    <h3>Full Width Image on Mobile</h3>
    <p>On mobile devices, images display at full width. On desktop, they display at two-thirds width.</p>
    <Image 
      src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
      alt="Image demonstrating responsive width behavior"
      caption="This image is full width on mobile and two-thirds width on desktop"
    />
  </section>

  <section class="example">
    <h3>Image in Content Context</h3>
    <article class="content-example">
      <h4>Stretch marks</h4>
      <p>Stretch marks are very common. They're harmless and often get less visible over time.</p>
      
      <Image 
        src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg"
        alt="Example of stretch marks on skin"
        caption="Stretch marks often appear during or after pregnancy, or after a sudden change in weight"
      />
      
      <p>They can appear anywhere on the body, including the stomach, thighs, hips, breasts, upper arms, and lower back.</p>
    </article>
  </section>
</div>

<style>
  .example-container {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .example {
    margin-bottom: 64px;
    padding: 24px;
    background-color: #f4f4f4;
    border-radius: 4px;
  }

  .example h3 {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 24px;
  }

  .example h4 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 20px;
  }

  .example p {
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    line-height: 1.47368;
    margin-bottom: 16px;
  }

  /* Custom class for demonstration */
  :global(.custom-image-class) {
    border: 3px solid #007f3b;
    border-radius: 8px;
  }

  .content-example {
    background-color: white;
    padding: 24px;
    border-radius: 4px;
  }

  .content-example p {
    max-width: 44em;
  }
</style>
