<template>
  <div class="container">
    <h1 class="title">Select your fighter</h1>
    <div class="container-inner">
    <div id="hero1">
      
      <img :src="require('@/assets/'+selected1.imgURL2)" />
      <h2 class="title">{{selected1.name}}</h2>
      <h2 class="player1">Player 1</h2>  

    </div>
    <div class="heroes">
    <div class="hero" :ref="hero.id" :id="hero.id" v-for="hero in heroes" :key="hero.id">
                        <!-- <div id="hero"> -->
                           <img class="icon" :src="require('@/assets/'+hero.imgURL1)" />
                        <!-- </div> -->

     </div>
    </div>
     <div id="hero2">

       <img :src="require('@/assets/'+selected2.imgURL2)" />
       <h2 class="title">{{selected2.name}}</h2>
       <h2 class="player2">Player 2</h2>  
    </div>
</div>
    <h1 class="title" :class="{hide:isHide}">Press Enter to confirm hero / Start fight</h1>
  </div>
</template>

<script>
import {db} from '../init-firebase'

  export default {
    data () {
        return {
       
            heroes:[],
            selected1:"",
            selected2:"",
           selectedid1:"",
           selectedid2:"",
            isHide: false
        }

    },
    methods: {
  
    },
    mounted() {
      
       setInterval( () =>{
       //   console.log(this.isHide);
          this.isHide = !this.isHide;
   
      }, 1000);
                 

    },
    created(){
        db.collection('mcheroes').orderBy('id').get().then((data)=>{
          // console.log(data.docs)
            return data.docs
         }).then((data)=>{
             let heroesArray = [];
                 data.forEach(doc => {
              // let key = doc.id;
              // data._key = key
               //doc.data.push(key)
               let docData = doc.data();
              // docData.id=doc.id;
              // console.log(docData)

                   heroesArray.push(docData)
            })

          // console.log(heroesArray)
            this.heroes = heroesArray;//.reverse();
           
           this.selected1 = heroesArray[Math.floor(Math.random() *  heroesArray.length)];
           console.log(this.selected1)
        this.selected2 =  heroesArray[Math.floor(Math.random() *  heroesArray.length)];
         this.selectedid1 = this.selected1.id;
         console.log(this.selected1.id);
         console.log(this.selectedid1);
           
           this.selectedid2 = this.selected2.id;
            console.log(this.selected2.id);
            console.log(this.selectedid2);

            console.log(this.$refs[this.selected1.id]);
            console.log(this.$refs[this.selected2.id]);
            console.log(heroesArray.length)
           // this.$refs[selectedid1].innerHTML = "abc";
           /* let sellerArray=[];
            this.products.forEach((product) => {
                sellerArray.push(product.seller)
            })
            let sellerArrayUnique = [...new Set(sellerArray)];
            this.sellers = sellerArrayUnique;*/
         })
        }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title,.player1,.player2{
  color: white;
  font-style:italic;
  font-weight:normal;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
  .container-inner{
    width:90%;
    margin: 10px auto;
    height: 700px;
    background: grey;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-auto-rows: auto;
  }
 .heroes{
         /* display: grid;
        grid-template-columns: repeat(5,1fr);
         grid-auto-rows: auto;
        grid-column-gap:0px;   */
        padding: 40px 10px;

        margin:20px;

         display: flex; 
   flex-flow:row wrap; 
   
     justify-content:center;
     }
  .hero{
    max-width:max-content;
    max-height: max-content;
    height: 150px;  
  }
  .icon{
    box-sizing: border-box;
        width:150px;
        height:150px;
        padding: 0 0;
        margin: 0 auto;

        border:1px solid #34572a;
        object-fit:fill;
  }
  .selected1{
    border: 5px solid green;
  }
  .selected2{
    border: 5px solid purple;
  }

  #hero1, #hero2{
    height:600px;
   width: 100%;
   margin-top: 50px;
    
  }
  #hero1 img, #hero2 img{
    max-width: 90%;
    max-height: 90%;
    object-fit:contain;
  }
  .player1{
    color:green;  
  }
  .player2{
    color:purple;
  }
  .hide{
    display: none;
  }

</style>
