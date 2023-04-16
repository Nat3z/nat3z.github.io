<script lang="ts">
  import { onMount } from "svelte";
  import Header from "../components/Header.svelte";
  export let title: string
  export let published: string
  export let lastupdated: string
  export let outdated: boolean
  export let tags: string[]

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
    <h1 class="font-extrabold">{title}</h1>
    <h2 class="font-bold -mt-4 mb-4">Published <time>{new Date(published).toLocaleDateString('en-us', {
      year: 'numeric',
      day: 'numeric',
      month: 'long'
    })}</time></h2>
    { #if outdated }
      <div class="flex justify-center items-center flex-row mb-4 gap-4">
        <span class="material-symbols-outlined error">
          error
        </span>
        <h6 class="text-red-500 font-mono text-sm sm:text-lg">This is an outdated article.</h6>
      </div>
    {/if}
    <div class="flex-row flex-wrap gap-2 ml-auto mb-2">
      { #each tags as tag }
        <p class="text-pacific-blue font-raleway bg-oxford-blue p-2 rounded-lg text-sm">#{tag}</p>
      {/each}
    </div>

  </div>

  <hr class="mb-4">

  <article bind:this={article}>
    <slot></slot>
  </article>

  <hr class="mt-4">

  <div class="mt-2 font-bold italic">
    <h1>Last Updated <time>{lastupdatedasdate
      .toLocaleTimeString([], { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</time></h1>
  </div>
</main>

<style lang="scss">
  // if screen is the size of an iPhone 10 or smaller, make main's width 100%
  @media only screen and (max-width: 812px) {
    main {
      width: 90% !important;
    }
  }
  main {
    height: 100%;

    margin-bottom: 5rem;

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