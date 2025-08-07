<script lang="ts">
  import CharacterCount from '$lib/components/CharacterCount.svelte';
  import { writable } from 'svelte/store';

  // Store for form state management
  const formStore = writable({
    content: '',
    isValid: false,
    characterCount: 0,
    wordCount: 0
  });

  let content = '';

  // Reactive validation
  $: {
    const charCount = content.length;
    const wordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length;

    formStore.update(state => ({
      ...state,
      content,
      characterCount: charCount,
      wordCount,
      isValid: charCount >= 10 && charCount <= 500
    }));
  }

  // Real-time content analysis
  function analyzeContent(text: string) {
    const analysis = {
      characters: text.length,
      words: text.trim().split(/\s+/).filter(word => word.length > 0).length,
      sentences: text.split(/[.!?]+/).filter(s => s.trim().length > 0).length,
      readabilityScore: calculateReadabilityScore(text)
    };
    return analysis;
  }

  function calculateReadabilityScore(text: string): number {
    // Simple readability calculation
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const avgWordsPerSentence = words / Math.max(sentences, 1);
    return Math.max(0, Math.min(100, 100 - (avgWordsPerSentence * 2)));
  }

  $: contentAnalysis = analyzeContent(content);
</script>

<div class="content-editor">
  <CharacterCount
    name="content"
    maxlength={500}
    threshold={60}
    bind:value={content}
    rows={10}
    label={{
      text: "Content Editor"
    }}
    hint={{
      text: "Write your content with real-time analysis"
    }}
  />

  <div class="content-analysis">
    <h3>Content Analysis</h3>
    <dl>
      <dt>Characters:</dt>
      <dd>{contentAnalysis.characters}</dd>

      <dt>Words:</dt>
      <dd>{contentAnalysis.words}</dd>

      <dt>Sentences:</dt>
      <dd>{contentAnalysis.sentences}</dd>

      <dt>Readability Score:</dt>
      <dd>{contentAnalysis.readabilityScore.toFixed(1)}/100</dd>
    </dl>
  </div>
</div>
