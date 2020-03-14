<template>
  <div class="container">
    <h1 class="title">Select your fighter</h1>
    <div class="container-inner">
      <div id="hero1" v-if="selected1">
        <img :src="require('@/assets/'+selected1.imgURL2)" />
        <h2 class="title">{{selected1.name}}</h2>
        <h2 class="player1">Player 1</h2>
      </div>
      <div class="heroes">
        <div class="hero" :ref="hero.id" :id="hero.id" v-for="hero in heroes" :key="hero.id">
          <!-- <div id="hero"> -->
            
          <img class="icon" :class="hero.class" :src="require('@/assets/'+hero.imgURL1)" />
            <!-- <div class="disp" :class="hero.classDiv"> -->
              <h1 class="disp" :class="hero.classDiv"></h1>
              
             <!-- </div> -->

          <!-- </div> -->
        </div>
      </div>
      <div id="hero2" v-if="selected2">
        <img :src="require('@/assets/'+selected2.imgURL2)" />
        <h2 class="title">{{selected2.name}}</h2>
        <h2 class="player2">Player 2</h2>
      </div>
    </div>
    <div class="enter">
      <h1 class="title" :class="{hide:isHide, red:isRed}">{{tooltipText}}</h1>
    </div>
  </div>
</template>

<script>
  import { db } from "../init-firebase";
import mcHeroesJson from '../static/mcHeroes.json'

export default {
  data() {
    return {
      heroes: [],
      selected1: "",
      selected2: "",
      selectedConfirm1: "",
      selectedConfirm2: "",
      isHide: false,
      isRed: false,
      tooltipText: "Press Enter to confirm 1st fighter",
      heroesJson: mcHeroesJson
    };
  },
  methods: {
    moveRight(){
      let player = this.getCurrentPosition();//console.log("end");
      //console.log(player);
      if(player){
         const curPosition = player.pos;
         const playerNum = player.num;
         let expr;
         const heroLength = this.heroes.length;
          
         if(curPosition[0].id == heroLength){//diff
            expr = 0;
         } else {
            expr = curPosition[0].id;   
         }
          
         this.moveAll(curPosition,playerNum,expr);
      }
      
    },
    moveLeft(){
      let player = this.getCurrentPosition();//console.log("end");
      //console.log(player);
      if(player){
         const curPosition = player.pos;
         const playerNum = player.num;
         let expr;
         const heroLength = this.heroes.length;
          
         if(curPosition[0].id == "1"){//diff
            expr = heroLength*1-1;
         } else {
            expr = curPosition[0].id*1-2;   
         }
          
         this.moveAll(curPosition,playerNum,expr);
      }
    
    },
    moveTop(){
        let player = this.getCurrentPosition();
      //console.log(player);
      if(player){
         const curPosition = player.pos;
         const playerNum = player.num;
         let expr;
         const heroLength = this.heroes.length;
          
         if(curPosition[0].id <= 5){//diff
            expr = heroLength*1-6+curPosition[0].id*1;
         } else {
            expr = curPosition[0].id*1-6;   
         }
          
         this.moveAll(curPosition,playerNum,expr);
      }
       
    },
    moveButtom(){//console.log("start");
      let player = this.getCurrentPosition();//console.log("end");
      //console.log(player);
      if(player){
         const curPosition = player.pos;
         const playerNum = player.num;
         let expr;
         const heroLength = this.heroes.length;
          
         if(curPosition[0].id > heroLength*1-5){//diff
            expr = curPosition[0].id*1 - (heroLength*1-4);
         } else {
            expr = curPosition[0].id*1+4;   
         }
          
         this.moveAll(curPosition,playerNum,expr);
      }
    },
    getCurrentPosition(){
        let player = {};
        if(!this.selectedConfirm1 && !this.selectedConfirm2){ 
          player.num = 1;
          player.pos =this.$refs[this.selected1.id];
          return player;
        } else if(this.selectedConfirm1 && !this.selectedConfirm2){
          player.num = "2";
          player.pos =this.$refs[this.selected2.id];
          return player;
        }
    },
    moveAll(curPosition,playerNum,expr){
        
            this[`selected${playerNum}`].class="";
            this[`selected${playerNum}`].classDiv = ""; 
            this[`selected${playerNum}`] = this.heroes[expr];//diff
            if(this.selected1 == this.selected2){
              this[`selected${playerNum}`].class = 'selectedBoth';
              this[`selected${playerNum}`].classDiv = 'selectedBothDiv';
            } else {
              this.selected1.class = 'selected1';
              this.selected1.classDiv = 'selected1Div';
              this.selected2.class = 'selected2'; 
              this.selected2.classDiv = 'selected2Div';
            }
        
    },
    confirmHero(){
      //  console.log("confirm");
        if(!this.selectedConfirm1 && !this.selectedConfirm2){ 
          this.selectedConfirm1 = this.selected1;     //console.log(this.selected1); console.log(this.selectedConfirm1);
          
          this.tooltipText =  "Press Enter to confirm 2nd fighter";
           console.log("confirm 1");
        } else if(this.selectedConfirm1 && !this.selectedConfirm2){
           this.selectedConfirm2 = this.selected2 ;   //console.log(this.selected2); console.log(this.selectedConfirm2);
           
           this.tooltipText =  "Press Enter to start fight";
           this.isRed = true;
            console.log("confirm 2");
        } else if(this.selectedConfirm1.id && this.selectedConfirm2.id){
          console.log("confirm fight");
            console.log(this.selectedConfirm1);
             console.log(this.selectedConfirm2);
             this.$store.commit('player1',this.selectedConfirm1);
             this.$store.commit('player2',this.selectedConfirm2);
            //this.$router.push(`/fight/${this.selectedConfirm1.id}/${this.selectedConfirm2.id}`);
            this.$router.push(`/fight`);//.catch(() => {});
        }
    }
  },
  mounted() {
    setInterval(() => {
      //   console.log(this.isHide);
      this.isHide = !this.isHide;
    }, 1000);

     window.addEventListener("keydown", (e) => {
     // console.log(e.keyCode);
      //e.preventDefault();
      if(e.keyCode == "39"){  
          this.moveRight();
      } else if(e.keyCode == "37") {   
          this.moveLeft();
      } else if(e.keyCode == "38") {
          this.moveTop();
      } else if(e.keyCode == "40") {
          this.moveButtom();
      } else if(e.keyCode == "13") {
          this.confirmHero();
      }
    });
  },
  async created() {
    let table;
    let heroesArray =[];
    try{ 
       table = await db
       .collection("mcheroes")
       .orderBy("order")
       .get();
     const data = table.docs;
    //let heroesArray = [];
    data.forEach(doc => {
              // let key = doc.id;
              // data._key = key
              //doc.data.push(key)
      let docData = doc.data();
                    // docData.id=doc.id;
                    // console.log(docData)

      heroesArray.push(docData);
    //});
    //  console.log(this.heroesJson);
      
    })
    }
    catch(e){

      heroesArray = this.heroesJson;
    }
    
  

    
    //this.heroes = heroesArray;
    this.heroes = heroesArray;
    this.selected1 =
      heroesArray[Math.floor(Math.random() * heroesArray.length)];
    
    this.selected2 =
      heroesArray[Math.floor(Math.random() * heroesArray.length)];
    
             if(this.selected1 == this.selected2){
            this.selected1.class = 'selectedBoth';
 
             this.selected1.classDiv = 'selectedBothDiv';
          } else{
    this.selected1.class = 'selected1';
    this.selected2.class = 'selected2'; 
    this.selected1.classDiv = 'selected1Div';
    this.selected2.classDiv = 'selected2Div'; 
          }

    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title,
.player1,
.player2 {
  color: white;
  font-style: italic;
  font-weight: normal;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.container-inner {
  width: 90%;
  margin: 10px auto;
  height: 700px;
  /* background: grey; */
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-auto-rows: auto;
}
.heroes {
  /* display: grid;
        grid-template-columns: repeat(5,1fr);
         grid-auto-rows: auto;
        grid-column-gap:0px;   */
  padding: 40px 10px;

  margin: 20px;

  display: flex;
  flex-flow: row wrap;

  justify-content: center;
}
.hero {
  max-width: max-content;
  max-height: max-content;
  height: 150px;
  position: relative;
}
.icon {
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  padding: 0 0;
  margin: 0 auto;

  border: 1px solid #34572a;
  object-fit: fill;
}

.disp{
  display:none;
}
.selected1 {
  border: 10px solid green;
}
.selected1Div{
  display: block;
  color: white;
  font-style: italic;
  font-size: 3rem;
  font-weight: normal;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  position: absolute;
  bottom: 50px;
  left: 100px;
  
}
.selected1Div:after{
  content:"1";
}



.selected2 {
  border: 10px solid purple;
  
}
.selected2Div{
  display: block;
  color: white;
  font-style: italic;
  font-size: 3rem;
  font-weight: normal;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  position: absolute;
  bottom: 50px;
  left: 100px;
}
.selected2Div:after{
  content:"2";
  
}
.selectedBoth {
  border-top: 10px solid green;
  border-left: 10px solid green;
  border-bottom: 10px solid purple;
  border-right: 10px solid purple;
  
}
.selectedBothDiv{
  display: block;
  color: white;
  font-style: italic;
  font-size: 3rem;
  font-weight: normal;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  position: absolute;
  bottom: 50px;
  left: 60px;
}
.selectedBothDiv:after{
  content:"1/2";
  
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
.player1 {
  color: green;
}
.player2 {
  color: purple;
}
.hide {
  display: none;
}
.red {
  color:orange;
  font-size: 3rem;

}
.enter{
  margin-top: 30px;
  min-height: 120px;
}


</style>
