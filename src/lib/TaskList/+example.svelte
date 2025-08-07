<script lang="ts">
  import TaskList from './TaskList.svelte';
  import type { TaskItem, TaskStatusType } from './types';
  import { createTaskStatus, taskListPatterns } from './config';

  // Default example - health assessment
  const defaultExample: TaskItem[] = [
    {
      title: {
        text: 'Exercise'
      },
      href: '#',
      status: {
        text: 'Completed',
        classes: 'nhsuk-task-list__status--completed'
      }
    },
    {
      title: {
        text: 'Personal health'
      },
      href: '#',
      status: {
        text: 'Completed',
        classes: 'nhsuk-task-list__status--completed'
      }
    },
    {
      title: {
        text: 'Family health history'
      },
      hint: {
        text: 'Details of your parents, brothers and sisters'
      },
      href: '#',
      status: {
        tag: {
          text: 'Incomplete',
          classes: 'nhsuk-tag--blue'
        }
      }
    },
    {
      title: {
        text: 'Smoking history'
      },
      href: '#',
      status: {
        tag: {
          text: 'Incomplete',
          classes: 'nhsuk-tag--blue'
        }
      }
    },
    {
      title: {
        text: 'Blood test'
      },
      status: {
        text: 'Cannot start yet',
        classes: 'nhsuk-task-list__status--cannot-start-yet'
      }
    }
  ];

  // Application process example
  const applicationExample: TaskItem[] = [
    {
      title: {
        text: 'Check eligibility'
      },
      hint: {
        text: 'Confirm you meet the requirements'
      },
      href: '#check-eligibility',
      status: createTaskStatus('completed')
    },
    {
      title: {
        text: 'Provide personal information'
      },
      hint: {
        text: 'Including contact details and date of birth'
      },
      href: '#personal-info',
      status: createTaskStatus('completed')
    },
    {
      title: {
        text: 'Upload supporting documents'
      },
      hint: {
        text: 'Proof of identity and address'
      },
      href: '#documents',
      status: createTaskStatus('in-progress')
    },
    {
      title: {
        text: 'Review and declaration'
      },
      href: '#review',
      status: createTaskStatus('not-started')
    },
    {
      title: {
        text: 'Submit and pay'
      },
      status: createTaskStatus('cannot-start')
    }
  ];

  // Registration process with HTML content
  const registrationExample: TaskItem[] = [
    {
      title: {
        html: '<strong>Step 1:</strong> Create your account'
      },
      href: '#create-account',
      status: createTaskStatus('completed')
    },
    {
      title: {
        html: '<strong>Step 2:</strong> Verify your email'
      },
      hint: {
        html: 'Check your inbox for <em>noreply@nhs.uk</em>'
      },
      href: '#verify-email',
      status: createTaskStatus('completed')
    },
    {
      title: {
        html: '<strong>Step 3:</strong> Add personal details'
      },
      href: '#personal-details',
      status: createTaskStatus('incomplete')
    },
    {
      title: {
        html: '<strong>Step 4:</strong> Set your preferences'
      },
      status: createTaskStatus('cannot-start')
    }
  ];

  // Interactive example with dynamic statuses
  let interactiveTasks = $state<TaskItem[]>([
    {
      title: { text: 'Read terms and conditions' },
      href: '#terms',
      status: createTaskStatus('not-started')
    },
    {
      title: { text: 'Provide contact information' },
      href: '#contact',
      status: createTaskStatus('not-started')
    },
    {
      title: { text: 'Choose appointment date' },
      href: '#appointment',
      status: createTaskStatus('cannot-start')
    },
    {
      title: { text: 'Confirm booking' },
      status: createTaskStatus('cannot-start')
    }
  ]);

  let currentStep = $state(0);

  function updateTaskStatus(index: number, statusType: TaskStatusType) {
    interactiveTasks[index] = {
      ...interactiveTasks[index],
      status: createTaskStatus(statusType)
    };
  }

  function progressToNextStep() {
    if (currentStep < interactiveTasks.length) {
      updateTaskStatus(currentStep, 'completed');

      if (currentStep + 1 < interactiveTasks.length) {
        if (interactiveTasks[currentStep + 1].status.text === 'Cannot start yet') {
          updateTaskStatus(currentStep + 1, 'incomplete');
        }
      }

      currentStep++;
    }
  }

  function resetProgress() {
    currentStep = 0;
    interactiveTasks = interactiveTasks.map((task, index) => ({
      ...task,
      status: createTaskStatus(index === 0 ? 'not-started' : 'cannot-start')
    }));
  }

  // Create task items from pattern
  function createTasksFromPattern(pattern: readonly { title: string; status: string }[]): TaskItem[] {
    return pattern.map(item => ({
      title: { text: item.title },
      href: '#',
      status: createTaskStatus(item.status as TaskStatusType)
    }));
  }
</script>

<div class="examples">
  <section>
    <h2>Default Example - Health Assessment</h2>
    <p>A typical health assessment process with various task statuses.</p>
    <TaskList
      items={defaultExample}
      idPrefix="your-health"
    />
  </section>

  <section>
    <h2>Application Process</h2>
    <p>Shows an application workflow using the helper functions.</p>
    <TaskList
      items={applicationExample}
      idPrefix="application"
    />
  </section>

  <section>
    <h2>Registration with HTML Content</h2>
    <p>Task list items can include HTML content for richer formatting.</p>
    <TaskList
      items={registrationExample}
      idPrefix="registration"
    />
  </section>

  <section>
    <h2>Interactive Example</h2>
    <p>Click the button to progress through the tasks.</p>

    <div class="controls">
      <button
        onclick={progressToNextStep}
        disabled={currentStep >= interactiveTasks.length}
        class="nhsuk-button"
      >
        {currentStep >= interactiveTasks.length ? 'All tasks completed!' : 'Complete current task'}
      </button>
      <button
        onclick={resetProgress}
        class="nhsuk-button nhsuk-button--secondary"
      >
        Reset progress
      </button>
    </div>

    <TaskList
      items={interactiveTasks}
      idPrefix="interactive"
    />
  </section>

  <section>
    <h2>Task List Patterns</h2>
    <p>Pre-configured patterns for common use cases.</p>

    <h3>Health Assessment Pattern</h3>
    <TaskList
      items={createTasksFromPattern(taskListPatterns.healthAssessment)}
      idPrefix="pattern-health"
    />

    <h3>Application Pattern</h3>
    <TaskList
      items={createTasksFromPattern(taskListPatterns.application)}
      idPrefix="pattern-app"
    />

    <h3>Registration Pattern</h3>
    <TaskList
      items={createTasksFromPattern(taskListPatterns.registration)}
      idPrefix="pattern-reg"
    />
  </section>

  <section>
    <h2>Without Links</h2>
    <p>Tasks don't have to be links - useful for displaying status only.</p>
    <TaskList
      items={[
        {
          title: { text: 'Morning medication' },
          status: createTaskStatus('completed')
        },
        {
          title: { text: 'Afternoon medication' },
          hint: { text: 'Take with food' },
          status: createTaskStatus('incomplete')
        },
        {
          title: { text: 'Evening medication' },
          status: createTaskStatus('cannot-start')
        }
      ]}
      idPrefix="no-links"
    />
  </section>

  <section>
    <h2>Custom Classes and Attributes</h2>
    <p>Additional customization options for the task list.</p>
    <TaskList
      items={[
        {
          title: {
            text: 'Custom styled title',
            classes: 'custom-title-class'
          },
          href: '#',
          status: createTaskStatus('completed'),
          classes: 'custom-item-class'
        },
        {
          title: { text: 'Standard task' },
          href: '#',
          status: createTaskStatus('incomplete')
        }
      ]}
      classes="custom-list-class"
      attributes={{ 'data-module': 'task-tracker' }}
      idPrefix="custom"
    />
  </section>

  <section>
    <h2>Accessibility Features</h2>
    <ul>
      <li>Full keyboard navigation support</li>
      <li>ARIA labels connecting hints and statuses to task links</li>
      <li>Semantic HTML structure</li>
      <li>Clear visual indicators for task status</li>
      <li>Hover states for interactive elements</li>
      <li>Screen reader friendly status announcements</li>
    </ul>

    <p>Try navigating the task list with your keyboard - the entire row is clickable for linked tasks.</p>
  </section>
</div>

<style>
  .examples {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Frutiger W01", Arial, sans-serif;
  }

  section {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #d8dde0;
  }

  section:last-child {
    border-bottom: none;
  }

  h2 {
    color: #005eb8;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: #212b32;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #425563;
    margin-bottom: 1.5rem;
  }

  .controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  /* NHS button styles */
  .nhsuk-button {
    background-color: #007f3b;
    border: 2px solid transparent;
    border-radius: 4px;
    box-shadow: 0 4px 0 #002719;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 4px;
    padding: 12px 16px;
    text-decoration: none;
  }

  .nhsuk-button:hover {
    background-color: #00662f;
  }

  .nhsuk-button:focus {
    background-color: #ffeb3b;
    box-shadow: 0 4px 0 #212b32;
    color: #212b32;
    outline: 4px solid transparent;
  }

  .nhsuk-button:active {
    background-color: #00552e;
    box-shadow: none;
    color: white;
    top: 4px;
  }

  .nhsuk-button:disabled {
    background-color: #d5d8da;
    box-shadow: 0 4px 0 #8b9297;
    color: #6f777b;
    cursor: not-allowed;
  }

  .nhsuk-button--secondary {
    background-color: #4c6272;
    box-shadow: 0 4px 0 #263135;
  }

  .nhsuk-button--secondary:hover {
    background-color: #3a4a56;
  }

  .nhsuk-button--secondary:active {
    background-color: #263135;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: #425563;
  }

  /* Custom classes for demonstration */
  :global(.custom-list-class) {
    border: 2px dashed #768692;
    padding: 1rem;
  }

  :global(.custom-item-class) {
    background-color: #fef7e8;
  }

  :global(.custom-title-class) {
    font-weight: bold;
    color: #330072;
  }
</style>
