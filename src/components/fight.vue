<template>
  <div class="container">
    <h1 class="battleText">BATTLE 1</h1>
    <div class="container-inner">
      <div id="hero1" v-if="player1">
        <img :src="require('@/assets/'+player1.imgURL2)" />
        <h2 class="title">{{player1.name}}</h2>
        <h2 class="player1">Player 1</h2>
      </div>
      <div id="versus">
        <img src="./../assets/versus.png" />
      </div>
      <div id="hero2" v-if="player2">
        <img :src="require('@/assets/'+player2.imgURL2)" />
        <h2 class="title">{{player2.name}}</h2>
        <h2 class="player2">Player 2</h2>
      </div>
    </div>
   
    <div class="dragons">
      <div class="dragon" :class="{clicked: isClickedQ}"><font-awesome-icon :icon="['fas', 'dragon']" size="3x" /></div>
      <div class="dragon" :class="{clicked: isClickedW}"><font-awesome-icon :icon="['fas', 'dragon']" size="3x" /></div>
      <div class="dragon" :class="{clicked: isClickedE}"><font-awesome-icon :icon="['fas', 'dragon']" size="3x" /></div>
      <div class="dragon" :class="{clicked: isClickedR}"><font-awesome-icon :icon="['fas', 'dragon']" size="3x" /></div>
      <div class="dragon" :class="{clicked: isClickedT}"><font-awesome-icon :icon="['fas', 'dragon']" size="3x" /></div>
      <div class="dragon" :class="{clicked: isClickedY}"><font-awesome-icon :icon="['fas', 'dragon']" size="3x" /></div>
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      isClickedQ: false,
      isClickedW: false,
      isClickedE: false,
      isClickedR: false,
      isClickedT: false,
      isClickedY: false
    }
  },
  computed:{
    player1(){
      return this.$store.state.player1;
    },
    player2(){
      return this.$store.state.player2;
    }
  },
  mounted() {
    
    setTimeout(() => {
      //go back after 10sec
      this.$store.commit('player1',{});
      this.$store.commit('player2',{});
      this.$router.push(`/`).catch(() => {});
    }, 10000)

     window.addEventListener("keydown", (e) => {
      
      //Q-81  W-87  E-69  R-82  T-84  Y-89
      if(e.keyCode == "81"){  
        this.isClickedQ = !this.isClickedQ;
      } else if(e.keyCode == "87") {   
         this.isClickedW = !this.isClickedW;
      } else if(e.keyCode == "69") {
         this.isClickedE = !this.isClickedE;
      } else if(e.keyCode == "82") {
         this.isClickedR = !this.isClickedR;
      } else if(e.keyCode == "84") {
        this.isClickedT = !this.isClickedT;
      } else if(e.keyCode == "89") {
        this.isClickedY = !this.isClickedY;
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .title,
  .player1,
  .player2 {
    color: white;
    font-style:oblique;
    font-weight: normal;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
  .battleText{
    color: rgb(70, 64, 64);
    font-size: 5rem;
    text-shadow: -3px 0 black, 0 3px black, 1px 0 black, 0 -1px black;
    font-weight:bold;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    margin: 5px auto;
  }

  .container-inner {
    width: 70%;
    margin: 0 auto;
    height: 700px;
    display: grid;
    grid-template-columns: 40% 20% 40%;
    grid-auto-rows: auto;
  }

  #hero1,
  #hero2 {
    height: 600px;
    width: 100%;
    margin-top: 50px;
  }
  #hero1 img,
  #hero2 img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
  #versus img {
    max-width: 50%;
    max-height: 50%;
    object-fit: contain;
    margin-top: 200px;
  }
  .player1 {
    color: green;
  }
  .player2 {
    color: purple;
  }

  .dragon{
    display: inline;
    color:rgb(70, 64, 64);
    margin: 0px 10px;
  }
  .dragons{
    margin-bottom: 60px;
  }
  .clicked{
    color:rgb(155, 49, 49);
  }

</style>
