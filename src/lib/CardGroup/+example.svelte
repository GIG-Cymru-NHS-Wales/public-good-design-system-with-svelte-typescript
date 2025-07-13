<CardGroup>
  {#snippet children()}
    <CardGroupItem>
      {#snippet children()}
        <Card 
          href="/service-1"
          clickable={true}
          heading="Service 1"
          headingClasses="nhsuk-heading-m"
          description="Description for service 1"
        />
      {/snippet}
    </CardGroupItem>
    
    <CardGroupItem>
      {#snippet children()}
        <Card 
          href="/service-2"
          clickable={true}
          heading="Service 2"
          headingClasses="nhsuk-heading-m"
          description="Description for service 2"
        />
      {/snippet}
    </CardGroupItem>
    
    <CardGroupItem>
      {#snippet children()}
        <Card 
          href="/service-3"
          clickable={true}
          heading="Service 3"
          headingClasses="nhsuk-heading-m"
          description="Description for service 3"
        />
      {/snippet}
    </CardGroupItem>
  {/snippet}
</CardGroup>
