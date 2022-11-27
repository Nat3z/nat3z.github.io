<script lang="ts">
  import { onMount } from "svelte";
  import Header from "../components/Header.svelte";
  export let title: string
  export let published: string
  export let lastupdated: number
  export let outdated: boolean

let article: HTMLElement
onMount(() => {
  article.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (ev) => {
      ev.preventDefault()
      open(link.href, "_blank")
    })
  })
})

function share() {

}

let lastupdatedasdate = new Date(lastupdated)
</script>
<Header />
<main>
  <div class="importantcontent">
    <h1>{title}</h1>
    <h2>Published {new Date(published).toLocaleDateString('en-us', {
      year: 'numeric',
      day: 'numeric',
      month: 'long'
    })}</h2>
    { #if outdated }
      <div>
        <span class="material-symbols-outlined error">
          error
        </span>
        <h3>This is an outdated article. Please refer to the latest version of this topic for accurate information.</h3>
      </div>
    {/if}


  </div>

  <hr>

  <article class="article" bind:this={article}>
    <slot></slot>
  </article>

  <hr>

  <div class="article-info">
    <h1>Last Updated {lastupdatedasdate
      .toLocaleTimeString([], { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</h1>
  </div>
</main>

<style lang="scss">
  
  main {
    color: rgb(206, 206, 206);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    width: 70%;
    display: block;
    padding: 1rem 1rem 1rem;
    margin: auto;
    .importantcontent {
      h1 {
        margin-top: unset;
        margin-bottom: unset;
        color: white;
        font-size: 50px;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 20px;
      }
      div {
        display: flex;
        margin-top: .5rem;
        justify-content: flex-start;
        align-items: center;
        gap: .3rem;
        .error {
          color: red;
        }
        h3 {
          color: red;
          display: inline;
          font-weight: normal;
        }
      }
    }

    hr {
      border-color: rgb(10, 26, 74);
    }

    .article-info {
      h1 {
        font-style: italic;
      }
    }
  }
</style>