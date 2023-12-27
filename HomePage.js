window.addEventListener("scroll", () => {
    if (pageYOffset >= 100) {
        document.getElementById('header').style.position = 'fixed';
        document.getElementById('header').style.zIndex = '1000 !important';
        document.getElementById('profile-circle').style.top='52.2%'
        document.getElementById('Online-circle').style.top='52.2%'
    } else {
        document.getElementById('header').style.position = 'static';
        document.getElementById('header').style.zIndex = '1';
        document.getElementById('profile-circle').style.top='6.2%'
        document.getElementById('Online-circle').style.top='6.3%'

    }
})
function bars() {
    let crossicon = document.getElementById('crossSecnav');
    let baricon = document.getElementById('barsSecnav');
    document.getElementById('sec-navbar').classList.toggle('sec-navbar-toggle');
    baricon.style.display = 'none';
    crossicon.style.display = 'block'
}
function crossic() {
    let baricon = document.getElementById('barsSecnav');
    document.getElementById('sec-navbar').classList.toggle('sec-navbar-toggle');
    let crossicon = document.getElementById('crossSecnav');
    crossicon.style.display = 'none';
    baricon.style.display = 'block';

}
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// window.addEventListener('scroll',()=>{
//     if(window.pageYOffset>=3000){
//         CounterOne = document.getElementById('counterOne');
// CounterTwo= document.getElementById('counterTwo');
// CounterThree = document.getElementById('counterThree');
// var onestart = 500;
// var secstart = 0;
// var thirdstart =9500;
// let firstinter = setInterval(count1);
// let secinterval = setInterval(count2);
// let thirdinter = setInterval(count3);
//         function count1(){
//             CounterOne.innerHTML=++onestart+"+";
//             if(onestart>=1000){
//               clearInterval(firstinter);
//             }
//           }
//           function count2(){
//             CounterTwo.innerHTML=++secstart+"%";
//             if(secstart>=100){
//               clearInterval(secinterval);
//             }
//           }
//           function count3(){
//             CounterThree.innerHTML=++thirdstart+"+";
//             if(thirdstart>=10000){
//               clearInterval(thirdinter);
//             }
//           }
//     }
// })



 
function BrowseToProduct(){
    location.href='Products.html'
}


  AOS.init();





  window.addEventListener("load",()=>{
        var loader = document.querySelector('.loader');
        loader.classList.add('loader-hidden')
        loader.addEventListener("transitionend",()=>{
     document.body.removeChild("loader")
        })
  })



function youtube(){
    window.location='https://www.youtube.com/'
}
function twitter(){
    window.location='https://twitter.com/home'
}
function whatsapp(){
    window.location='https://web.whatsapp.com/'
}

function facebook(){
    window.location='https://www.facebook.com/'
}
