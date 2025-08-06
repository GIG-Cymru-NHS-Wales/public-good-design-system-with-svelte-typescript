<script lang="ts">
  import Table from './Table.svelte';
  import type { TableProps } from './types.js';

  // Default example
  const defaultExample: TableProps = {
    panel: false,
    caption: 'Skin symptoms and possible causes',
    firstCellIsHeader: false,
    head: [
      {
        text: 'Skin symptoms'
      },
      {
        text: 'Possible cause'
      }
    ],
    rows: [
      [
        {
          text: 'Blisters on lips or around the mouth'
        },
        {
          text: 'cold sores'
        }
      ],
      [
        {
          text: 'Itchy, dry, cracked, sore'
        },
        {
          text: 'eczema'
        }
      ],
      [
        {
          text: 'Itchy blisters'
        },
        {
          text: 'shingles, chickenpox'
        }
      ]
    ]
  };

  // Responsive layout example
  const responsiveExample: TableProps = {
    responsive: true,
    panel: false,
    caption: 'Ibuprofen syrup dosages for children',
    firstCellIsHeader: false,
    head: [
      {
        text: 'Age',
        classes: 'nhsuk-u-width-one-half'
      },
      {
        text: 'How much?',
        classes: 'nhsuk-u-width-one-quarter'
      },
      {
        text: 'How often?',
        classes: 'nhsuk-u-width-one-quarter'
      }
    ],
    rows: [
      [
        {
          header: 'Age',
          text: '3 to 5 months (weighing more than 5kg)'
        },
        {
          header: 'How much?',
          text: '2.5ml'
        },
        {
          header: 'How often?',
          text: 'Max 3 times in 24 hours'
        }
      ],
      [
        {
          header: 'Age',
          text: '6 to 11 months'
        },
        {
          header: 'How much?',
          text: '2.5ml'
        },
        {
          header: 'How often?',
          text: 'Max 3 to 4 times in 24 hours'
        }
      ],
      [
        {
          header: 'Age',
          text: '1 to 3 years'
        },
        {
          header: 'How much?',
          text: '5ml'
        },
        {
          header: 'How often?',
          text: 'Max 3 times in 24 hours'
        }
      ],
      [
        {
          header: 'Age',
          text: '4 to 6 years'
        },
        {
          header: 'How much?',
          text: '7.5ml'
        },
        {
          header: 'How often?',
          text: 'Max 3 times in 24 hours'
        }
      ],
      [
        {
          header: 'Age',
          text: '7 to 9 years'
        },
        {
          header: 'How much?',
          text: '10ml'
        },
        {
          header: 'How often?',
          text: 'Max 3 times in 24 hours'
        }
      ],
      [
        {
          header: 'Age',
          text: '10 to 11 years'
        },
        {
          header: 'How much?',
          text: '15ml'
        },
        {
          header: 'How often?',
          text: 'Max 3 times in 24 hours'
        }
      ],
      [
        {
          header: 'Age',
          text: '12 to 17 years'
        },
        {
          header: 'How much?',
          text: '15ml to 20ml'
        },
        {
          header: 'How often?',
          text: 'Max 3 to 4 times in 24 hours'
        }
      ]
    ]
  };

  // Word breaks example
  const wordBreaksExample: TableProps = {
    panel: false,
    caption: 'Users',
    firstCellIsHeader: false,
    head: [
      {
        text: 'Name'
      },
      {
        text: 'Email address'
      },
      {
        text: 'Status'
      },
      {
        html: '<span class="nhsuk-u-visually-hidden">Actions</span>'
      }
    ],
    rows: [
      [
        {
          text: 'Stephanie Meyer',
          classes: 'nhsuk-u-text-break-word'
        },
        {
          text: 'stephanie.meyer9@test.com',
          classes: 'nhsuk-u-text-break-word'
        },
        {
          text: 'Active'
        },
        {
          html: '<a href="#">Change <span class="nhsuk-u-visually-hidden">status for Stephanie Meyer</span></a>'
        }
      ],
      [
        {
          text: 'Aleksandrina Featherstonehaugh-Whitehead',
          classes: 'nhsuk-u-text-break-word'
        },
        {
          text: 'aleksandrina.featherstonehaughwhitehead23@folkestonepharmacy.test.com',
          classes: 'nhsuk-u-text-break-word'
        },
        {
          text: 'Inactive'
        },
        {
          html: '<a href="#">Change <span class="nhsuk-u-visually-hidden">status for Aleksandrina Featherstonehaugh-Whitehead</span></a>'
        }
      ]
    ]
  };

  // Panel example
  const panelExample: TableProps = {
    panel: true,
    heading: 'Conditions similar to impetigo',
    caption: 'Other possible causes of your symptoms',
    captionClasses: 'nhsuk-u-visually-hidden',
    firstCellIsHeader: false,
    head: [
      {
        text: 'Symptoms'
      },
      {
        text: 'Possible cause'
      }
    ],
    rows: [
      [
        {
          text: 'Blisters on lips or around the mouth'
        },
        {
          text: 'cold sores'
        }
      ],
      [
        {
          text: 'Itchy, dry, cracked, sore'
        },
        {
          text: 'eczema'
        }
      ],
      [
        {
          text: 'Itchy blisters'
        },
        {
          text: 'shingles, chickenpox'
        }
      ]
    ]
  };
</script>

<div class="examples">
  <h1>NHS UK Table Component Examples</h1>
  
  <section>
    <h2>Default Table</h2>
    <Table {...defaultExample} />
  </section>

  <section>
    <h2>Responsive Layout</h2>
    <Table {...responsiveExample} />
  </section>

  <section>
    <h2>With Word Breaks</h2>
    <Table {...wordBreaksExample} />
  </section>

  <section>
    <h2>As a Panel</h2>
    <Table {...panelExample} />
  </section>
</div>

<style>
  .examples {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem;
    font-family: "Frutiger W01", Arial, sans-serif;
  }

  section {
    margin-bottom: 3rem;
  }

  h1 {
    color: #005eb8;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h2 {
    color: #212b32;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
</style>
