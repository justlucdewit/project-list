<template>
  <div id="app-wrapper">
    <div id="app-title">Listing of all my portefolio projects:</div>

    <br /><br /><br />

    <div id="card-container">
      <Card
        title="Articles"
        image="https://media.discordapp.net/attachments/375936269907263489/1027949682510532708/unknown.png?width=401&height=401"
        link="https://medium.com/@lukedev_"
        description="I sometimes like to write about programming things ive learned and experienced in my career and learning journey. <br /><br /> Im still new to writing articles and really enjoy learning to write. <br /><br /> I post these articles to my medium account."
      />

      <Card
        title="Luke dev website"
        image="https://media.discordapp.net/attachments/375936269907263489/1028064521035726898/unknown.png?width=401&height=401"
        link="https://lukedev.nl/"
        description="My main website that acts as my portefolio but also hosts most of my projects. <br /><br /> On here you can also find a nice contact form I made for myself, which uses discord webhooks to notify me."
      />

      <Card
        title="COD Language"
        image="https://media.discordapp.net/attachments/375936269907263489/1028065908238864434/unknown.png"
        link="https://github.com/justlucdewit/cod"
        description="The COD programming language is a transpiled language that I spend some time on making after getting inspired by the porth series of tsoding on youtube. <br /><br /> The language is a concatinative stack based language which means it is a pretty excentric yet interesting langugae. <br /><br /> Right now the compiler is written in python but I am planning to bootstrap it."
      />

      <Card
        title="Galaxy generator"
        image="https://media.discordapp.net/attachments/375936269907263489/1028066094843445328/unknown.png?width=401&height=401"
        link="https://justlucdewit.github.io/galaxy-map/"
        description="This galaxy generator is something I made for a worldbuilding group together with my friend <a href='https://github.com/Mateiadrielrafael'>Matei Adriel</a>. <br /><br /> I started the project and designed the algorithm to randomly pick coordinates with a distribution in the shape of a spiral galaxy, and Matei helped me with the design of the UI."
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/ProjectCard.vue";

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style lang="scss">
#card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

#app-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 1rem;
}

#app-title {
  font-size: x-large;
  font-weight: bold;
}
</style>
