<template>
    <div class="footer">
         <AppMenu :class="'footer-menu'"/>
        <div class="footer-contact">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                        <div class="contact-content">
                        <div class="contact-detail">
                            <div class="contact-logo">
                                <img src="/pin.svg" alt="location pin">
                            </div>
                            <div class="contact-text">
                                <p >{{ contactInfo.address }}</p>
                            </div>
                        </div>
                        <div class="contact-detail">
                            <div class="contact-logo">
                                <img src="/envelop-f.svg" alt="location pin">
                            </div>
                            <div class="contact-text">
                                <p>{{ contactInfo.mail }}</p>
                            </div>
                        </div>
                        <div class="contact-detail">
                            <div class="contact-logo">
                                <img src="/phone-f.svg" alt="location pin">
                            </div>
                            <div class="contact-text">
                                <p>{{ contactInfo.phone }}</p>
                            </div>
                        </div>
                        </div>
                        <div class="social-icon">
                             <span ><img :src="item" v-for="(item, i) in socialIcon" :key="i" alt=""></span>
                        </div>
                        <div class="copyright">
                            <p>Copyright 2020 All Rights Reserved.</p>
                        </div>
                    </div>
                     <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                          <div class="contact-form">
                              <p>Please enter your query below and a member of our firm will get in touch with you for an initial no-obligation conversation.</p>
                              <form action="#">
                                  <div class="name">
                                      <input type="text" class="name" placeholder="Name">
                                      <input type="text" class="mail" placeholder="Email">
                                  </div>
                                  <input type="text" placeholder="Message">
                                  <button type="submit">Submit</button>
                              </form>
                         
                           <div class="copyright">
                            <p>Designed by Formec Media LLP</p>
                        </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppMenu from '@/components/AppMenu'
import contactInfo from '../utils'
export default{
    components:{AppMenu},
    data(){
        return{
            menu:['Home', 'What We Do', 'Who We Are', 'Gallery', 'Quick Links', 'Insights', 'Contact us'],
            contactInfo:{ 
                address:'301, Emerald Corner, Castle Road, Lane 2, Rajarampuri, Kolhapur - 416008, India ', 
                mail:'ca.chetanoswal@gmail.com', 
                phone:'+91-231-2523311, 2563311 +91 9890 828242'
            },
            socialIcon:['/facebook.svg', '/linkdin.svg', '/instagram.svg', '/tweeter.svg']
              }
            }
};
</script>
<style lang="scss" scoped>
.footer{
    .footer-menu{
        background: #1f1f1f;
        padding: 20px;
        display: flex;
        justify-content: center;
         @include for-phone-only{
             flex-direction: column;
            text-align: center;
         }
          @include for-phone-only-landscape{
              justify-content: center;
          }

        a{
             margin-right: 40px;
             text-decoration: none;

             @include for-phone-only-landscape{
                 margin-right: 24px;
             }

             p{
                  font-size: 15px;
            line-height: 20px;
            color: #fff;
             }
        }
    }
}
.footer-contact{
    background: #101010;
    justify-content: center;

    .col-xl-5{
        padding: 75px 0 25px 0;
        border-right: 1px solid #333333;
         @include for-phone-only{
             padding: 30px 30px 0 30px;
         }
          @include for-phone-only-landscape{
              padding: 30px 0 0 30px;
          }
    .contact-detail{
        display: flex;
        margin-bottom: 30px;

         @include for-phone-only{
             margin-bottom: 20px;
         }
          @include for-phone-only-landscape{
              margin-bottom: 20px;
          }

        .contact-logo{
            margin-right: 35px;
        }

        .contact-text{
            p{
                font-weight: 300;
                font-size: 14px;
                line-height: 19px;
                color: #C2C2C2;
                width: 60%;

                 @include for-phone-only{
                     width: 100%;
                 }
                  @include for-phone-only-landscape{
                      width: 100%;
                  }
            }
        }
    }
       .social-icon{
   margin-left: 60px;

    span{
        img{
             margin-right: 30px;
        }
    }
}
.copyright{
    margin-top: 60px;
     @include for-phone-only{
         margin-top: 20px;
         text-align: center;
     }
      @include for-phone-only-landscape{
          margin-top: 45px;
      }
    p{
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        color: #C2C2C2;
          
    }
}
    }
 .col-xl-7{
      padding: 75px 0 25px 0;

       @include for-phone-only{
           padding: 30px 30px 20px 30px;
       }
        @include for-phone-only-landscape{
           padding: 30px 0 25px 0
        }
.contact-form{
    width: 65%;
    margin: 0 auto;
    text-align: right;

     @include for-phone-only{
         width: 100%;
        text-align: left;
     }

      @include for-phone-only-landscape{
          width: 90%;
      }

    p{
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        color: #C2C2C2;
        width: 80%;
        margin: 0 0 0 auto;

         @include for-phone-only{
             width: 100%;
         }
         @include for-phone-only-landscape{
             width: 100%;
         }
    }
    form{
        margin-top: 30px;
        .name{
            display: flex;
            
            .name{
                width: 40%;
                padding: 10px;
                background: #3A3A3A;
                border-radius: 2px;
                border: none;
                margin-right: 15px;
            }
            .mail{
                width: 60%;
                padding: 10px;
                background: #3A3A3A;
                border-radius: 2px;
                border: none;
                 
                 @include for-phone-only{
                     width: 54%;
                 }
            }
        }
        input{
            width: 100%;
             padding: 10px;
            background: #3A3A3A;
            border-radius: 2px;
            margin-bottom: 15px;
            border: none;
            text-align: center;

            input::placeholder{
                font-weight: 300;
                font-size: 14px;
                color: #C2C2C2;
                 
            }
            
            }
        button{
            width: 100%;
            background: #205373;
            border-radius: 2px;
            padding: 10px;
            border: none;
            font-size: 14px;
            line-height: 19px;
            color: #fff;
            }
    }
        .copyright{
            p{
                margin-top: 50px;
                color: #C2C2C2;
                 @include for-phone-only{
                     margin-top: 30px;
                 }
                 @include for-phone-only-landscape{
                     margin-top: 30px;
                 }
            }
        }
}
 }
}

</style>