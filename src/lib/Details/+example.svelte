<script lang="ts">
  import Details from '$lib/components/Details.svelte';
  import DetailsGroup from '$lib/components/DetailsGroup.svelte';

  let nhsNumberOpen = false;
  let openingTimesOpen = false;

  function handleToggle(event: CustomEvent) {
    console.log('Details toggled:', event.detail);
  }

  function handleOpen(event: CustomEvent) {
    console.log('Details opened');
  }

  function handleClose(event: CustomEvent) {
    console.log('Details closed');
  }

  // Reference for programmatic control
  let detailsRef: any;

  function toggleDetails() {
    detailsRef?.toggle();
  }

  function showDetails() {
    detailsRef?.show();
  }

  function hideDetails() {
    detailsRef?.hide();
  }
</script>

<!-- Basic details -->
<Details
  summaryText="Where can I find my NHS number?"
  bind:open={nhsNumberOpen}
  on:toggle={handleToggle}
  on:open={handleOpen}
  on:close={handleClose}
>
  {#snippet children()}
    <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
    <p>You can find your NHS number on any document sent to you by the NHS. This may include:</p>
    <ul>
      <li>prescriptions</li>
      <li>test results</li>
      <li>hospital referral letters</li>
      <li>appointment letters</li>
      <li>your NHS medical card</li>
    </ul>
    <p>Ask your GP practice for help if you can't find your NHS number.</p>
  {/snippet}
</Details>

<!-- Details with HTML summary -->
<Details
  summaryHtml="<strong>Important:</strong> Where can I find my NHS number?"
  text="An NHS number is a 10 digit number, like 485 777 3456."
/>

<!-- Expander variant -->
<Details
  summaryText="Opening times"
  classes="nhsuk-expander"
  bind:open={openingTimesOpen}
>
  {#snippet children()}
    <table class="nhsuk-table">
      <thead class="nhsuk-table__head">
        <tr class="nhsuk-table__row">
          <th class="nhsuk-table__header">Day of the week</th>
          <th class="nhsuk-table__header">Opening hours</th>
        </tr>
      </thead>
      <tbody class="nhsuk-table__body">
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Monday</td>
          <td class="nhsuk-table__cell">9am to 6pm</td>
        </tr>
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Tuesday</td>
          <td class="nhsuk-table__cell">9am to 6pm</td>
        </tr>
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Wednesday</td>
          <td class="nhsuk-table__cell">9am to 6pm</td>
        </tr>
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Thursday</td>
          <td class="nhsuk-table__cell">9am to 6pm</td>
        </tr>
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Friday</td>
          <td class="nhsuk-table__cell">9am to 6pm</td>
        </tr>
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Saturday</td>
          <td class="nhsuk-table__cell">9am to 1pm</td>
        </tr>
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Sunday</td>
          <td class="nhsuk-table__cell">Closed</td>
        </tr>
      </tbody>
    </table>
  {/snippet}
</Details>

<!-- Details with programmatic control -->
<Details
  bind:this={detailsRef}
  summaryText="Controlled details"
  text="This details element can be controlled programmatically."
/>

<div class="control-buttons">
  <button type="button" class="nhsuk-button nhsuk-button--secondary" on:click={toggleDetails}>
    Toggle Details
  </button>
  <button type="button" class="nhsuk-button nhsuk-button--secondary" on:click={showDetails}>
    Show Details
  </button>
  <button type="button" class="nhsuk-button nhsuk-button--secondary" on:click={hideDetails}>
    Hide Details
  </button>
</div>

<!-- Group of expanders -->
<DetailsGroup>
  <Details
    summaryText="Appointments"
    classes="nhsuk-expander"
    text="Information about appointments and booking."
  />

  <Details
    summaryText="Prescriptions"
    classes="nhsuk-expander"
    text="Information about prescriptions and repeat prescriptions."
  />

  <Details
    summaryText="Test results"
    classes="nhsuk-expander"
    text="Information about accessing your test results."
  />
</DetailsGroup>
