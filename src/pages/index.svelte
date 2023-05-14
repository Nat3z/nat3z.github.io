<script lang="ts">
import Header from "../components/Header.svelte";
</script>
<main class="bg-[url('/school-trees.jpg')] bg-cover w-screen h-full">
  <div class="backdrop-blur-md h-full sm:h-screen pb-4 sm:pb-0">
    <div class="flex flex-col justify-center items-center flex-wrap">
      <Header />
      <div class="introduction font-raleway">
        <div>
          <h1 class="text-4xl sm:text-6xl pt-4 sm:underline">
            Hi, I'm Natia!
          </h1>
          <h2 class="text-middle-blue">an independent full-stack developer
            who makes large frontend and backend projects!
          </h2>
        </div>
      </div>
  
      <div class="flex flex-wrap flex-row justify-center items-center gap-2 relative h-fit w-fit">
        <div class="backdrop-blur-md m-auto ml-4 mr-4 sm:ml-0 sm:mr-0 p-4 rounded-lg flex gap-4 w-full sm:w-fit flex-col h-full shadow-2xl">
          <h1 class="text-4xl text-middle-blue">Languages I ❤️</h1>
          <div class="flex flex-row flex-wrap justify-center items-center gap-4">
            <img src="/rust.png" alt="rust" width="50" height="50"/>
            <img src="/java.png" alt="java" width="40" height="50"/>
            <img src="/kotlin.png" alt="kotlin" width="50" height="50"/>
            <img src="/typescript.png" alt="ts" width="50" height="50" />
            <img src="/cs.png" alt="csharp" width="45" height="50" />
          </div>
        </div>
    
        <div class="backdrop-blur-md text-middle-blue m-auto ml-4 mr-4 sm:ml-0 sm:mr-0 p-4 rounded-lg flex gap-4 w-full sm:w-fit flex-col h-fit shadow-2xl">
          <h1 class="text-4xl">Links //</h1>
          <div class="flex flex-row flex-wrap justify-start items-start gap-4">
            <a href="https://github.com/Nat3z/" target="_blank" rel="noreferrer" class="hover:underline flex flex-row gap-2 justify-center items-center">
              <img src="/github.png" alt="github" width="50" height="50"/>
              <h1 class="text-2xl">@Nat3z</h1>
            </a>
            <a href="https://schedule.nat3z.com/" target="_blank" rel="noreferrer" class="hover:underline flex flex-row gap-2 items-center justify-center">
              <img src="/dynschedule.png" alt="Dynschedule" width="50" height="50"/>
              <h1 class="text-2xl">Dynschedule</h1>
            </a>
            <a href="https://en.pronouns.page/@natia" target="_blank" rel="noreferrer" class="hover:underline flex flex-row gap-2 items-center justify-center">
              <img src="/pronouns.png" alt="Pronouns.page" width="50" height="50"/>
              <h1 class="text-2xl">@natia</h1>
            </a>
          </div>
        </div>
      </div>
  
  
  
    </div>
  </div> 
</main>

<style lang="scss">
  h1, h2 {
    // color: whitesmoke;
    font-family: 'Nunito Sans', sans-serif;
  }

  .introduction {
    display: flex;
    width: 70%;
    margin: auto;
    align-items: center;
    justify-content: center;
    div {
      h1 {
        font-size: 4em;
        text-align: center;
        background: -webkit-linear-gradient(rgb(89, 123, 243), rgb(33, 73, 194));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        line-height: 125%;
        text-decoration-color: rgb(89, 123, 243);
        padding-bottom: 0.2em;
        margin-bottom: -0.2em;
      }
      h2 {
        text-align: center;
        margin-top: 1rem;
        font-size: 1.5em;
      }
    }

    span {
      margin-left: auto;
      border-radius: 12px;
      background: -webkit-linear-gradient(rgb(89, 123, 243), rgb(33, 73, 194));
      img {
        border: 1px solid rgb(89, 123, 243);
        margin: .5em .5em .5em;
        border-radius: 100px;
      }
    }
  }

  .spacedtext {
    color: rgb(16, 38, 104);
    letter-spacing: .1rem;
    font-size: 1.5em;
    text-align: center;
  }
  .langs {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 3rem;
    gap: 1rem;
  }

  .projects {
    color: rgb(14, 35, 98);
    margin-top: 1rem;
    a {
      text-decoration: none;
    }
    div {
      padding: .5em .5em .5em;
      background-color: rgb(12, 28, 76);
      border-radius: 5px;
      margin: auto;
      width: 50%;
      section {
        h1 {
          font-family: sans-serif;
          font-size: 2em;
          text-align: center;
          margin-bottom: 2rem;
        }
        h2 {
          font-size: 1em;
          text-align: center;
          margin-bottom: 2rem;
        }
      }
      .bottom {
        margin-top: auto;
        h1 {
          letter-spacing: .2rem;
          font-size: 1em;
          margin-bottom: .5rem;
        }
        img {
          margin: auto;
          display: block;
        }
      }
    }

    .logo {
      margin: auto;
      display: block;
    }
  }
  hr {
    width: 50%;
    margin: auto;
    margin-top: 5rem;
    border: none;
    background: -webkit-linear-gradient(rgb(89, 123, 243), rgb(33, 73, 194));
  }

  @media (max-width: 680px) {
    .introduction {
      display: block;
      width: 90%;
      margin-bottom: 3rem;
      div {
        width: 100%;
        h1 {
          text-align: center;
        }
        h2 {
          text-align: center;
        }
      }
      span {
        display: none;
      }
    }
  }
</style>