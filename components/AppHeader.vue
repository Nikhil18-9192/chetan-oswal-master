<template>
<div>
     <div class="top-header">
         <div class="container">
             <div class="links">
                 <div class="email border-right">
                     <div class="logo">
                        <img src="/envelop.svg" alt="img">
                 </div>
                 <div class="text">
                     <a href="mailto: ca.chetanoswal@gmail.com">{{ contactInfo.mail }}</a>
                 </div>
                 </div>
                  <div class="email">
                     <div class="logo">
                         <img src="/phone.svg" alt="img">
                 </div>
                 <div class="text">
                    <a href="tel:+919890828242">{{ contactInfo.phone }}</a>
                 </div>
                 </div>

             </div>
         </div>
     </div>
     <div class="logo-img">
         <img src="/logo.png" alt="logo">
     </div>
     <AppButton v-if="$device.isMobile" />
     <MobileMenu v-if="$store.state.menu"/>
     <AppMenu v-bind:class="'menu-bar'" />
</div>
</template>
<script>
import Vue from 'vue'
import AppButton from '@/components/AppButton.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import AppMenu from '@/components/AppMenu'
export default  Vue.extend({
    components:{AppButton, MobileMenu, AppMenu},
    data(){
        return{
            contactInfo:{
                 mail:'ca.chetanoswal@gmail.com',
                 phone: '+91 9890 828242'
                }
              }
            }
});
</script>
<style lang="scss" scoped>
.top-header{
    background: #f2f2f2;
    padding: 7px;
    
    .links{
        display: flex;
        justify-content: flex-end;

        @include for-phone-only{
            flex-direction: column;
        } 
        
        .border-right{
            border-right: 1px solid #4d4d4d;
        }

        .email{
            display: flex;
            margin-left: 10px;

              @include for-phone-only{
                  justify-content: center;
            }

            .logo img{
                margin-right: 10px;
            }

            .text a{
                font-family: Nunito;
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 19px;
                text-decoration: none;
                color: #4d4d4d;
                padding-right: 10px;
            }
        }
    }
}
.logo-img{
    padding: 25px 0;
    text-align: center;

     @include for-phone-only{
         padding: 10px 0;
         text-align: left;
     }
     @include for-phone-only-landscape{
        text-align: left;
    } 
    img{
        max-width: 250px;
        width: 100%;
    }
}
.menu-bar{
    background: #073D5F;
    display: flex;
    justify-content: center;
    
    
}
 
</style>