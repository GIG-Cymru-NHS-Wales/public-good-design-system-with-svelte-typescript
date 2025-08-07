<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import CardGroup from '$lib/components/CardGroup.svelte';
  import CardGroupItem from '$lib/components/CardGroupItem.svelte';

  function handleCardClick(event: CustomEvent<MouseEvent>) {
    console.log('Card clicked:', event.detail);
  }
</script>

<!-- Basic card -->
<Card
  heading="If you need help now, but it's not an emergency"
  headingLevel={3}
  on:click={handleCardClick}
>
  {#snippet children()}
    <p class="nhsuk-card__description">
      Go to <a href="/nhs-111">NHS 111 online</a> or <a href="tel:111">call 111</a>.
    </p>
  {/snippet}
</Card>

<!-- Care cards -->
<Card
  heading="Speak to a GP if:"
  headingLevel={3}
  type="non-urgent"
>
  {#snippet children()}
    <ul>
      <li>you're not sure it's chickenpox</li>
      <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
      <li>your child is <a href="/conditions/dehydration">dehydrated</a></li>
      <li>you're concerned about your child or they get worse</li>
    </ul>
    <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
  {/snippet}
</Card>

<Card
  heading="Ask for an urgent GP appointment if:"
  headingLevel={3}
  type="urgent"
>
  {#snippet children()}
    <ul>
      <li>you're an adult and have chickenpox</li>
      <li>you're pregnant and haven't had chickenpox before and you've been near someone with it</li>
      <li>you have a weakened immune system and you've been near someone with chickenpox</li>
      <li>you think your newborn baby has chickenpox</li>
    </ul>
    <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
  {/snippet}
</Card>

<Card
  heading="Call 999 if you have sudden chest pain that:"
  headingLevel={3}
  type="emergency"
>
  {#snippet children()}
    <ul>
      <li>spreads to your arms, back, neck or jaw</li>
      <li>makes your chest feel tight or heavy</li>
      <li>also started with shortness of breath, sweating and feeling or being sick</li>
    </ul>
    <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
  {/snippet}
</Card>

<!-- Primary card with chevron -->
<Card
  href="/breast-screening"
  primary={true}
  clickable={true}
  heading="Breast screening"
  headingClasses="nhsuk-heading-m"
/>

<!-- Primary card with description -->
<Card
  href="/care-support"
  primary={true}
  clickable={true}
  heading="Introduction to care and support"
  headingClasses="nhsuk-heading-m"
  description="A quick guide for people who have care and support needs and their carers"
/>

<!-- Clickable card -->
<Card
  href="/care-support"
  clickable={true}
  heading="Introduction to care and support"
  headingClasses="nhsuk-heading-m"
  description="A quick guide for people who have care and support needs and their carers"
/>

<!-- Secondary card -->
<Card
  href="/urgent-emergency"
  clickable={true}
  secondary={true}
  heading="Urgent and emergency care services"
  headingClasses="nhsuk-heading-m"
  description="Services the NHS provides if you need urgent or emergency medical help"
/>

<!-- Feature card -->
<Card
  feature={true}
  href="/feature"
  heading="Feature card heading"
  headingClasses="nhsuk-heading-m"
  description="Feature card description"
/>

<!-- Card with image -->
<Card
  imgURL="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
  imgALT="People exercising"
  href="/exercise"
  clickable={true}
  heading="Exercise"
  headingClasses="nhsuk-heading-m"
  description="Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"
/>

<!-- Top task card -->
<Card
  href="/prescriptions"
  clickable={true}
  headingLevel={5}
  heading="Order a repeat prescription"
  headingClasses="nhsuk-heading-xs"
  topTask={true}
/>

<!-- Card with HTML content -->
<Card
  heading="Help from NHS 111"
  headingLevel={3}
>
  {#snippet children()}
    <p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
    <p class="nhsuk-body">Go to <a href="/111">111.nhs.uk</a> or <a href="tel:111">call 111</a>.</p>
    <p class="nhsuk-body">For a life-threatening emergency call 999.</p>
  {/snippet}
</Card>
