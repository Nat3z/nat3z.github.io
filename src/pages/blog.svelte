<script lang="ts">
import Header from "../components/Header.svelte";

</script>

<Header />
<h1 class="font-extrabold text-6xl font-nunito-sans text-center text-middle-blue">Blog Posts</h1>
<div class="flex flex-col lg:flex-row flex-wrap mt-4 gap-4 justify-center">
  <slot></slot>
</div>