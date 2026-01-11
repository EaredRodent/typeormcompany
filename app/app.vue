<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<style>
  html, body {
    padding: 0;
    margin: 0;
    * {
      box-sizing: border-box;
    }
  }

  body {
    color: white;
    font-size: max(1.2vw, 14px);
    font-family: PT Sans, sans-serif;
    background-color: #000124;
  }

  button {
    outline: none;
    border: none;
    color: inherit;
    transition: 0.2s ease-in-out;
    cursor: pointer;;
    font-size: max(1.5vh);
  }

  h1 {
    margin: 0;
    font-weight: normal;
    scroll-margin-top: calc(3vh * 2 + 3.5vw);
  }
</style>
