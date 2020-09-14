<template>
    <div class="what-do">
        <h3>What We Do</h3>
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12" v-for="(item, i) in items" :key="i">
                    <a href="#" class="card" >
                        <div class="image">
                            <img :src="item.src" alt="">
                            <div class="overlay"></div>
                        </div>
                        <div class="text">
                            <p class="title">{{ item.title }}</p>
                            <p class="descr">{{ item.descr }} <span> <img src="/Arrow.svg" alt=""> </span></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data(){
        return{
            items:[
                 {id:0, src:'/what-do.png', title:'Audit Assurance Services' , descr: 'Today, Corporate and Individuals both are required to comply rigorously with numerous essential Income Tax Compliances.'},
                {id:1,src:'/what-do.png', title:'Direct Tax Advisory Services' , descr: 'Today, Corporate and Individuals both are required to comply rigorously with numerous essential Income Tax Compliances.'},
                {id:2,src:'/what-do.png', title:'Indirect Tax Advisory Services (GST)' , descr: 'Today, Corporate and Individuals both are required to comply rigorously with numerous essential Income Tax Compliances.'},
                {id:3,src:'/what-do.png', title:'Book Keeping / Accounting & KPO Services' , descr: 'Today, Corporate and Individuals both are required to comply rigorously with numerous essential Income Tax Compliances.'},
                {id:4,src:'/what-do.png', title:'Startup Services / Setting Up Company in India' , descr: 'Today, Corporate and Individuals both are required to comply rigorously with numerous essential Income Tax Compliances.'},
                {id:5,src:'/what-do.png', title:'NRI Tax & Investment Services' , descr: 'Today, Corporate and Individuals both are required to comply rigorously with numerous essential Income Tax Compliances.'}
            ]
        }
    }
    
}
</script>
<style lang="scss" scoped>
.what-do{
        margin-bottom: 40px;
    h3{
        text-align: center;
    font-size: 30px;
    margin: 48px 0;
    font-weight: 300;
    }

    .container{
        margin: 0 auto;

        .col-xl-4{padding: 15px;}

        .card{
            text-decoration: none;
             
            .image{
                position: relative;
                img{
                    width: 100%;
                   
                }
                .overlay{
                   position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 100%;
                    width: 100%;
                    opacity: 0;
                    transition: .5s ease;
                    background-color: rgba(0, 140, 186, 0.6);
                }
            }

            .text{
                position: absolute;
                font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    background-color: #205373;
    bottom: 0;
    transition: all .3s ease;
     
    width: 100%;

        .title{
              text-align: center;
    padding: 15px;
    transition: all .3s ease;
 
    line-height: 18px;
        }
        .descr{
            display: none;
              font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #b5b5b5;
    text-align: left;
    padding: 15px;
    border-bottom: 5px solid #083049;
    transition: .5s ease;

     
        }
       

            }
            &:hover .descr{display: block;  } 
            &:hover .overlay{opacity: 1;}
             
        }
       
    }
}

 
</style>