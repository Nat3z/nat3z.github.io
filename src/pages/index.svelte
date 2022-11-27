<script lang="ts">
import Header from "../components/Header.svelte";
</script>

<Header />

<div class="introduction">
  <div>
    <h1>Let's Build Something</h1>
    <h2>Hey there! I'm Natia, an independent full-stack developer
      who makes everything from Minecraft Mods, to large frontend and backend projects!
    </h2>
  </div>
  
  <span>
    <img src="/originalavatar.png" width="150" height="150" alt="michiru" />
  </span>
</div>

<h1 class="spacedtext">LANGUAGES I KNOW</h1>
<div class="langs">
  <img src="/golang.png" alt="go" width="130" height="50"/>
  <img src="/java.png" alt="java" width="40" height="50"/>
  <img src="/kotlin.png" alt="kotlin" width="50" height="50"/>
  <img src="/typescript.png" alt="ts" width="50" height="50" />
  <img src="/cs.png" alt="csharp" width="45" height="50" />
</div>

<h1 class="spacedtext" style="margin-top: 3rem;">PROJECTS</h1>
<div class="projects">
  <a href="https://github.com/nat3z/osuautodeafen">
    <div>
      <img alt="logo" src="/osuautodeafen.png" class="logo" width="150" height="150"/>
      <section>
        <h1>osu! Auto Deafen</h1>
        <h2>osu! Auto Deafen gives users an easy-to-use system for auto deafening you on Discord whenever you're about to FC a map.</h2>
        <span class="bottom">
          <h1>WRITTEN IN</h1>
          <img src="/golang.png" alt="go" width="70" height="25"/>
        </span>
      </section>
    </div>
  </a>
</div>
<style lang="scss">
  h1, h2 {
    color: whitesmoke;
    font-family: 'Nunito Sans', sans-serif;
  }

  .introduction {
    display: flex;
    width: 70%;
    margin: auto;
    margin-top: 3rem;
    align-items: center;
    margin-bottom: 10rem;
    div {
      width: 70%;
      h1 {
        font-size: 3em;
        background: -webkit-linear-gradient(rgb(89, 123, 243), rgb(33, 73, 194));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: sans-serif;
        padding-bottom: 0.2em;
        margin-bottom: -0.2em;
      }
      h2 {
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