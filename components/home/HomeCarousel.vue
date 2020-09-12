<template>
    <div>
         <div class="custome-slider">
             
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <div class="slider-text" v-for="(slide, index) in sliderText" :key="slide" :index="index" v-show="visibleSlide === index">
                            <h3>{{ slide.title }}</h3>
                            <p>{{ slide.para }}</p>                            
                        </div>
                        <div class="controls">
                            <span class="dot" @click="slides(0)"></span>
                             <span class="dot" @click="slides(1)"></span>
                            <span class="dot" @click="slides(2)"></span>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                        <div class="slides" v-for="(slide, index) in images" :key="slide" :index="index" v-show="visibleSlide === index">
                             <img :src="slide" alt="slider img">
                        </div>
                    </div>
                </div>
             
        </div>
    </div>
</template>
<script>
 export default {
     
    data(){
        return{
             
            sliderText:[
                {
                    title:'Chetan Oswal & Associates (COA),',
                    para:'is an established financial advisory and Chartered Accountant firm based in Kolhapur, India, with a history of over 15 years. Established in 2005, we are a rapidly growing firm with a team of young, enthusiastic members.'
                },
                 {
                    title:'Best CA Firm In Kolhapur',
                    para:'with a history of over 15 years. Established in 2005, we are a rapidly growing firm with a team of young, enthusiastic members. is an established financial advisory and Chartered Accountant firm based in Kolhapur, India,'
                },
                {
                    title:'Top in knowledge & innovation',
                    para:'Established in 2005, we are a rapidly growing firm with a team of young, enthusiastic members. is an established financial advisory and Chartered Accountant firm based in Kolhapur, India,with a history of over 15 years.'
                }
            ],
            images:['slider.png', 'slider1.png', 'slider.png'],
            visibleSlide: 0
        }
    },
    methods:{
        slides: function(n){
            this.visibleSlide = n
        }
    }
  }
</script>
<style lang="scss" scoped>
 .custome-slider{
   background: #205373;

   .slider-text{
         padding: 25px 0 0 133px;

         @include for-phone-only{
             padding: 20px 30px 0 30px;
         } 
       h3{
           font-weight: 300;
            font-size: 30px;
             color: #fff;
            margin-bottom: 15px;
            max-width: 300px;
            line-height: 41px;
       }
       p{
             font-size: 13px;
            color: #fff;
       }
   }
   .controls{
       padding-left: 133px;
       .dot{
       cursor: pointer;
    display: inline-block;
    width: 6px;
    height: 6px;
    transform: rotate(45deg);
    border: .5px solid #fff;
    margin-top: 45px;
    margin-right: 20px;

     &:hover{
        background: #fff;
    }
    &:active{
        background: #fff;
    }
   }
   }
   

   .slides{
       img{
           width: 100%;
           height: 100%;
       }
   }
}
</style>