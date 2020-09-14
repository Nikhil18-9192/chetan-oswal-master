<template>
    <div class="who-we">
        <div class="container">
             <div class="heading">
                    <h4>Who We Are</h4>
                </div>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="left-text">
                        <p>Chetan Oswal & Associates (COA), is an established financial advisory and Chartered Accountant firm based in Kolhapur, India, with a history of over 15 years. Established in 2005, we are a rapidly growing firm with a team of young, enthusiastic members.</p>
                    </div>
                    <div class="left-img">
                        <img src="/meeting.png" alt="">
                    </div>
                </div>
                 <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="right-text">
                        <p>Our team is a mix of motivated young professionals and experienced Chartered Accountants, lawyers, Company Secretaries and Cost Accountants. Headquartered in Kolhapur, we have a presence in Pune and affiliate firms in several cities.</p>
                        <p> We are not just service providers to our clients, we are trusted business advisors – because we put our clients at the centre of our business. We believe in being efficient, communicative and insightful to add value to your business and chart your growth story.</p>
                        <p>As a full service firm with experience across sectors, geographies and sizes, we bring our expertise and integrity to your business, to help you achieve the best outcomes in the shortest time frames. AMA combines the traditional CA services of audit, domestic and international tax, transfer pricing and regulatory guidance with M&A services, due diligence, financial and operational advice, legal assistance and consulting. We cover a range of services from traditional accounting services to outsourced accounting and corporate services – making us the single solution for your business’ growth plan.</p>
                        <a href="#">Read More ...</a>
                    </div>
                 </div>
            </div>
        </div>
         
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.who-we{
    background: #F8F8F8;
    padding: 50px 50px 0 50px;
    border-bottom: 1px solid #ccc;
   box-shadow: inset 0px -60px 30px -10px #CCC;

    .container{
        background: #EFEFEF;
        margin: 0 auto;
         border-bottom: 1px solid #ccc;
   box-shadow: inset 0px -60px 30px -10px #CCC;

        .col-xl-6{padding: 0 15px;}

        .heading{
            h4{
                font-family: Nunito;
                font-style: normal;
                font-weight: 300;
                font-size: 30px;
                line-height: 41px;
                color: #000;
                padding: 40px 0;
                text-align: center;
            }
        }

        .left-text{
            p{
                 font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            color: #464646;
            padding-bottom: 30px;
            }
        }

        .left-img img{
            width: 100%;
        }

        .right-text{
            p{
                font-family: Nunito;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 22px;
                color: #464646;
                padding-bottom: 20px;
            }

            a{
                font-family: Nunito;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 25px;
                color: #205373;
                text-decoration: none;
            }
        }
    }
    
}
</style>