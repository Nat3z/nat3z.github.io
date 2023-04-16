<nav>
  <span>
    <a href="/">
      <img src="/michiru-sad.jpg" alt="logo" width="125" height="125" />
    </a>
  </span>
  <div class="start">
    <a href="/blog">Blog</a>
  </div>
</nav>

<style lang="scss">
:root {
  --rgb-navbar: rgb(15, 38, 107);
  --dark-navbar: rgb(13, 32, 92);
  --mr-orange: #08A4BD;
}

nav {
  background-color: var(--dark-navbar);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: auto;
  position: relative;
  top: 3rem;
  height: 5rem;
  margin-bottom: 8em;

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  outline: none;
}

nav .start {
  background-color: var(--rgb-navbar);
  padding-left: 10rem;
}

nav .end {
  background-color: var(--rgb-navbar);
  margin-left: auto;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

nav .end a:last-child {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

nav span {
  position: absolute;
  top: -2rem;
  left: -1rem;
  padding: 1.3em 1.3em 1.3em;
  border-radius: 150px;

  background-color: var(--rgb-navbar);
}
nav span a {
  outline: none;
}
nav div a {
  outline: none;
  height: 100%;
  display: inline-block;
  line-height: 5em;
  color: rgb(255, 255, 255);
  background-color: var(--rgb-navbar);
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Varel Round', sans-serif;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.3s;
}

nav div a:hover {
  color: var(--mr-orange);
  background-color: rgb(17, 45, 128);
}

nav span img {
  border-radius: 100px;
}

@media (max-width: 680px) {
  nav {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }

  nav div a {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  nav .start {
    margin-left: auto;
    padding-left: 0rem;
  }

  nav .end {
    margin-left: unset;
  }
  
  nav span {
    top: 0rem;
    left: 0rem;
    position: relative;
    border-radius: 0px;
    margin-right: auto;
    padding: 0px;
    padding-left: 1rem;
    padding-right: 1rem;
    background: none;
  }

  nav span img {
    width: 3rem;
    height: 3rem;
  }
}


@media (max-width: 540px) {
  nav {
    display: block;
    height: max-content;
    width: 90%;
    margin: auto;
    top: 0.5rem;
    left: 0;
    margin-bottom: 3rem;
  }

  nav .start {
    margin: auto;
    background: none;
    display: block;
    text-align: center;
  }

  nav a[data-irrelevent] {
    display: none;
  }

  nav div a:hover {
    background: none;
  }
  nav .end {
    margin: auto;
    background: none;
    text-align: center;
    display: block;
  }

  nav div a {
    display: block;
    font-size: 12px;
    background: none;
  }

  nav .end a:last-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 15px;
  }

  nav span {
    display: block;
    padding-top: 1rem;
    position: relative;
    width: max-content;
    margin: auto;
    padding-bottom: 1rem;
  }
}
</style>