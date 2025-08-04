<script lang="ts">
  import Footer from './Footer.svelte';
</script>

<div class="example-container">
  <h2>Footer Examples</h2>
  
  <section class="example">
    <h3>Default Footer</h3>
    <div class="example-wrapper">
      <Footer 
        links={[
          {
            url: '#',
            label: 'Accessibility statement'
          },
          {
            url: '#',
            label: 'Give us feedback'
          },
          {
            url: '#',
            label: 'Cookies'
          },
          {
            url: '#',
            label: 'Privacy policy'
          },
          {
            url: '#',
            label: 'Terms and conditions'
          }
        ]}
      />
    </div>
  </section>

  <section class="example">
    <h3>Multi-Column Footer</h3>
    <div class="example-wrapper">
      <Footer 
        copyright="© Crown copyright"
        links={[
          {
            url: '#',
            label: 'Home'
          },
          {
            url: '#',
            label: 'Health A to Z'
          },
          {
            url: '#',
            label: 'Live Well'
          },
          {
            url: '#',
            label: 'Mental health'
          },
          {
            url: '#',
            label: 'Care and support'
          },
          {
            url: '#',
            label: 'Accessibility statement'
          },
          {
            url: '#',
            label: 'Pregnancy'
          },
          {
            url: '#',
            label: 'NHS services'
          },
          {
            url: '#',
            label: 'Coronavirus (COVID-19)'
          }
        ]}
        linksColumn2={[
          {
            url: '#',
            label: 'NHS App'
          },
          {
            url: '#',
            label: 'Find my NHS number'
          },
          {
            url: '#',
            label: 'Your health records'
          },
          {
            url: '#',
            label: 'About the NHS'
          },
          {
            url: '#',
            label: 'Healthcare abroad'
          }
        ]}
        linksColumn3={[
          {
            url: '#',
            label: 'Other NHS websites'
          },
          {
            url: '#',
            label: 'Profile editor login'
          }
        ]}
        metaLinks={[
          {
            url: '#',
            label: 'About us'
          },
          {
            url: '#',
            label: 'Give us feedback'
          },
          {
            url: '#',
            label: 'Accessibility statement'
          },
          {
            url: '#',
            label: 'Our policies'
          },
          {
            url: '#',
            label: 'Cookies'
          }
        ]}
      />
    </div>
  </section>

  <section class="example">
    <h3>Footer with Custom Copyright</h3>
    <div class="example-wrapper">
      <Footer 
        copyright="© East London NHS Foundation Trust"
        links={[
          {
            url: '#',
            label: 'Accessibility statement'
          },
          {
            url: '#',
            label: 'Give us feedback'
          },
          {
            url: '#',
            label: 'Cookies'
          },
          {
            url: '#',
            label: 'Privacy policy'
          },
          {
            url: '#',
            label: 'Terms and conditions'
          }
        ]}
      />
    </div>
  </section>

  <section class="example">
    <h3>Footer with Custom Classes and Attributes</h3>
    <div class="example-wrapper">
      <Footer 
        classes="custom-footer-class"
        containerClasses="custom-container-class"
        attributes={{
          'data-module': 'footer',
          'data-test-id': 'main-footer'
        }}
        links={[
          {
            url: '#',
            label: 'Home'
          },
          {
            url: '#',
            label: 'About'
          },
          {
            url: '#',
            label: 'Contact'
          }
        ]}
      />
    </div>
  </section>

  <section class="example">
    <h3>Minimal Footer</h3>
    <div class="example-wrapper">
      <Footer 
        links={[
          {
            url: '#',
            label: 'Privacy policy'
          },
          {
            url: '#',
            label: 'Terms and conditions'
          }
        ]}
      />
    </div>
  </section>
</div>

<style>
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
  }

  /* Add some visual separation between examples */
  .example-wrapper::after {
    content: '';
    display: block;
    height: 2px;
    background-color: #d8dde0;
    margin-top: 48px;
  }

  /* Custom classes for demonstration */
  :global(.custom-footer-class) {
    /* Custom styles would go here */
  }

  :global(.custom-container-class) {
    /* Custom container styles would go here */
  }
</style>
