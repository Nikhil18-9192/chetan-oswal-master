<template>
<div v-if="$device.isDesktopOrTablet">
     <div class="menu" v-for="(item, i) in menu" :key="i">
         <button><nuxt-link to='`/${item}`'><p>{{ item.title }}</p></nuxt-link></button>
         <div class="sub-menu">
              <nuxt-link to='`/${item}`' v-for="(item, i) in item.sub" :key="i"><p>{{ item.title }}</p></nuxt-link>
         </div>
     </div>
     </div>
</template>
<script lang="ts">
export default {
    data(){
        return{
            menu:[
    // Title should be lower case. Otherwise you will get error.
    {
        title:"home"
    },
    {
        title:"who we are"
    },
    {
        title:"what we do",
        sub:[
            {
                id:0,
                title:"Audit Assurance Services"
            }, 
            {
                id:1,
                title:"Direct Tax Advisory Services"
            },
            {
                id:2,
                title:"Indirect Tax Advisory Services (GST)"
            },
            {
                id:3,
                title:"Book Keeping / Accounting & KPO Services"
            },
            {
                id:4,
                title:"Startup Services"
            },
            {
                id:5,
                title:"NRI Tax & Investment Services"
            }
            ]
    },
    {
        title:"who we serve"
    },
    {
        title:"gallery"
    },
    {
        title:"quick links",
        sub:[
            {
                id:0,
                title:'PAN'
            },
            {
                id:1,
                title:'Income Tax'
            },
            {
                id:2,
                title:'E-tax Payments'
            },
            {
                id:3,
                title:'GST'
            },
            {
                id:4,
                title:'Customs'
            },
            {
                id:5,
                title:'Professional Tax Payment'
            },
            {
                id:6,
                title:'StartUps'
            },
            {
                id:7,
                title:"Employess' PF"
            },
            {
                id:8,
                title:'ESIC'
            },
        ]
    },
    {
        title:"insights"
    },
    {
        title:"contact us"
    },
]
        }
    }
}
</script>
<style lang="scss" scoped>
.menu{
     
    justify-content: center;
     position: relative;

     button{
         width: 100%;
                background: transparent;
                border: none;
                text-decoration: none;
                white-space: wrap;
                display: flex;
                margin: 0 auto;
         a{
             margin-right: 40px;
        text-decoration: none;
        padding: 10px;
        

             p{
                font-size: 15px;
            line-height: 20px;
            color: #fff;
             }
         }
         
     }

.sub-menu{
     display: none;
    position: absolute;
     z-index: 2000;
    text-decoration: none;
    background: #fff;
    width: 200px;
    a{
        font-family: Nunito;
                  font-size: 12px;
                  line-height: 19px;
                  color: black;
                  padding: 10px 25px;
                  text-decoration: none;
                  display: block;
                  border: 0.1px solid rgba(0, 0, 0, 0.2);
                  &:hover{
                        background-color: #f1f1f1;   
                  }
    }
}

 &:hover .sub-menu{
                    display: block;
                    opacity: 1;
            }

}


 /* .menu{
       position: relative;
        display: inline-block;
        background: #083049;;

    button{

  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
    }
    .sub-menu{
         display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  a{
      color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  }
    }
  }

  .sub-menu a:hover {background-color: #ddd;}

.menu:hover .sub-menu {display: block;}

.menu:hover .button {background-color: #3e8e41;}*/
</style>