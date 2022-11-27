<script lang="ts">
import Header from "../components/Header.svelte";

</script>

<Header />
<h1>Blog Posts</h1>
<div>
  <slot></slot>
</div>

<style lang="scss">
  h1 {
    color: white;
    font-size: 3em;
    font-family: 'Hind', sans-serif;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-direction: row;
    margin: auto;
    margin-top: 2rem;
    width: 90%;
    :global(a) {
      text-decoration: none;
    }
    :global(section) {
      background-color: rgb(10, 26, 74);
      padding: .5rem .5rem .5rem;
      border-radius: 5px;

      :global(h1) {
        text-decoration: none;
        font-family: 'Hind', sans-serif;
        font-size: 2em;
        color: white;
      }

      :global(h2) {
        text-decoration: none;
        color: rgb(206, 206, 206);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    }
  }
</style>