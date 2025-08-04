<script lang="ts">
  import Header from './Header.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    // Add the nhsuk-frontend-supported class to enable JavaScript features
    document.body.classList.add('nhsuk-frontend-supported');
  });
</script>

<div class="example-container">
  <h2>Header Examples</h2>
  
  <section class="example">
    <h3>Default Header</h3>
    <div class="example-wrapper">
      <Header 
        logo={{ href: '#' }}
        search={true}
        navigation={{
          items: [
            { href: '#', text: 'Health A to Z' },
            { href: '#', text: 'Live Well' },
            { href: '#', text: 'Mental health' },
            { href: '#', text: 'Care and support' },
            { href: '#', text: 'Pregnancy' },
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Header with Navigation</h3>
    <div class="example-wrapper">
      <Header 
        logo={{ href: '#' }}
        navigation={{
          items: [
            { href: '#', text: 'Health A to Z' },
            { href: '#', text: 'Live Well' },
            { href: '#', text: 'Mental health' },
            { href: '#', text: 'Care and support' },
            { href: '#', text: 'Pregnancy' },
            { href: '#', text: 'NHS services' }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Header with White Navigation</h3>
    <div class="example-wrapper">
      <Header 
        logo={{ href: '#' }}
        navigation={{
          classes: 'nhsuk-header__navigation--white',
          items: [
            { href: '#', text: 'Health A to Z' },
            { href: '#', text: 'Live Well' },
            { href: '#', text: 'Mental health' },
            { href: '#', text: 'Care and support' },
            { href: '#', text: 'Pregnancy' },
            { href: '#', text: 'NHS services' }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Header with Search</h3>
    <div class="example-wrapper">
      <Header 
        logo={{ href: '#' }}
        search={true}
      />
    </div>
  </section>

  <section class="example">
    <h3>Header with Account (Logged In)</h3>
    <div class="example-wrapper">
      <Header 
        service={{
          href: '#',
          text: 'Manage patients'
        }}
        account={{
          items: [
            {
              href: '#',
              text: 'florence.nightingale@nhs.net',
              icon: true
            },
            {
              action: '#',
              text: 'Log out'
            }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Header with Account (Logged Out)</h3>
    <div class="example-wrapper">
      <Header 
        service={{
          href: '#',
          text: 'Manage patients'
        }}
        account={{
          items: [
            {
              href: '#',
              text: 'Log in'
            }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Complex Header with Account, Search, and Navigation</h3>
    <div class="example-wrapper">
      <Header 
        service={{
          href: '#',
          text: 'Manage patients'
        }}
        search={{
          placeholder: 'Name or NHS number',
          visuallyHiddenLabel: 'Search patients by name or NHS number'
        }}
        account={{
          items: [
            {
              href: '#',
              text: 'Florence Nightingale',
              icon: true
            },
            {
              text: 'Regional Manager, Hull and East Yorkshire Hospitals NHS Trust'
            },
            {
              href: '#',
              text: 'Change role'
            },
            {
              action: '#',
              text: 'Log out'
            }
          ]
        }}
        navigation={{
          items: [
            { href: '#', text: 'Home' },
            { href: '#', text: 'Create user' },
            { href: '#', text: 'Find user' }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Header with Service Name and Current Page</h3>
    <div class="example-wrapper">
      <Header 
        logo={{ href: '#' }}
        service={{
          text: 'Digital service manual',
          href: '#'
        }}
        search={{
          visuallyHiddenLabel: 'Search the NHS digital service manual'
        }}
        navigation={{
          items: [
            { href: '#', text: 'Standards and technology' },
            { href: '#', text: 'Design system', current: true },
            { href: '#', text: 'Content style guide' },
            { href: '#', text: 'Accessibility' },
            { href: '#', text: 'Community and contribution' }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Organisational Header</h3>
    <div class="example-wrapper">
      <Header 
        logo={{ href: '#' }}
        organisation={{
          name: 'Anytown Anyplace',
          split: 'Anywhere',
          descriptor: 'NHS Foundation Trust'
        }}
        search={{
          visuallyHiddenLabel: 'Search the Anytown Anyplace Anywhere website'
        }}
        navigation={{
          items: [
            { href: '#', text: 'Your hospital visit' },
            { href: '#', text: 'Wards and departments', active: true },
            { href: '#', text: 'Conditions and treatments' },
            { href: '#', text: 'Our people' },
            { href: '#', text: 'Join our team' }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>White Header Variant</h3>
    <div class="example-wrapper">
      <Header 
        classes="nhsuk-header--white"
        logo={{ href: '#' }}
        service={{
          text: 'Find your NHS number',
          href: '#'
        }}
        search={true}
      />
    </div>
  </section>

  <section class="example">
    <h3>White Organisational Header</h3>
    <div class="example-wrapper">
      <Header 
        classes="nhsuk-header--white"
        logo={{ href: '#' }}
        organisation={{
          name: 'Anytown Anyplace',
          split: 'Anywhere',
          descriptor: 'NHS Foundation Trust'
        }}
        search={{
          visuallyHiddenLabel: 'Search the Anytown Anyplace Anywhere website'
        }}
        navigation={{
          items: [
            { href: '#', text: 'Your hospital visit' },
            { href: '#', text: 'Wards and departments', active: true },
            { href: '#', text: 'Conditions and treatments' },
            { href: '#', text: 'Our people' },
            { href: '#', text: 'Join our team' }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Header with Custom Logo</h3>
    <div class="example-wrapper">
      <Header 
        classes="nhsuk-header--white"
        logo={{
          href: '#',
          src: '/nhsuk-frontend/assets/example-logo.svg',
          ariaLabel: 'Great Ormond Street Hospital for Children, NHS Foundation Trust'
        }}
        search={{
          visuallyHiddenLabel: 'Search the Great Ormond Street Hospital website'
        }}
        navigation={{
          items: [
            { href: '#', text: 'Parents and families' },
            { href: '#', text: 'Wards and departments' },
            { href: '#', text: 'Conditions and treatments' },
            { href: '#', text: 'Learning' },
            { href: '#', text: 'Our research' },
            { href: '#', text: 'Our people' },
            { href: '#', text: 'Our children' },
            { href: '#', text: 'Hospital', active: true },
            { href: '#', text: 'Private care' },
            { href: '#', text: 'Charity' }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Header with Justified Navigation</h3>
    <div class="example-wrapper">
      <Header 
        logo={{ href: '#' }}
        navigation={{
          classes: 'nhsuk-header__navigation--justified',
          items: [
            { href: '#', text: 'Health A to Z' },
            { href: '#', text: 'Live Well' },
            { href: '#', text: 'Mental health' },
            { href: '#', text: 'Care and support' },
            { href: '#', text: 'Pregnancy' },
            { href: '#', text: 'NHS services' }
          ]
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Header with Long Service Name</h3>
    <div class="example-wrapper">
      <Header 
        logo={{
          href: '#nhs',
          ariaLabel: 'NHS homepage'
        }}
        service={{
          text: 'This is an even longer service name to fully test wrapping',
          href: '#'
        }}
        search={true}
      />
    </div>
  </section>

  <section class="example">
    <h3>Minimal Header</h3>
    <div class="example-wrapper">
      <Header />
    </div>
  </section>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Frutiger W01, Arial, Sans-serif;
  }

  .example-container {
    padding: 24px;
    background-color: #fff;
  }

  .example {
    margin-bottom: 48px;
  }

  .example h3 {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 24px;
    color: #212b32;
  }

  .example-wrapper {
    margin-left: -24px;
    margin-right: -24px;
    position: relative;
    border: 1px solid #d8dde0;
    margin-bottom: 16px;
  }

  /* Ensure examples are contained */
  .example-wrapper :global(.nhsuk-header) {
    position: relative;
  }
</style>
