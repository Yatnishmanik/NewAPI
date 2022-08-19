function newdata(p1,p2,p3){
let source=p1;
let apikey=p2;

let newsaccordion = document.getElementById(p3);

const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

xhr.onload = function() {
    if(this.status === 200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles);
        let htmls="";
        articles.forEach(function(element,index){
          let news=`
          <div class="card mx-3 my-3" style="width: 18rem" id="carde" >
    <img src="${element.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text" id="cont">${element.content}<a href="${element.url}" id="butt"> read more</a></p>
    </div>
  </div>`
  htmls+=news;
        });   
     newsaccordion.innerHTML=htmls;  
      
    }
    else{
        console.log("Some error occured")
    }
}
xhr.send()
}
let key='14c30db39bea47ad9815f8bf7a78e04a';

newdata('google-news-in',key,'cards');
newdata('fox-sports',key,'cardt');
newdata('entertainment-weekly',key,'cardu');
newdata('cnn',key,'cardv');
newdata('bbc-news',key,'cardw');


{/* // let news= `<div class="accordion-item">
// <h2 class="accordion-header" id="heading${index}">
//   <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" */}
{/* //     aria-expanded="true" aria-controls="collapse${index}">
//      ${element.title}
//   </button> */}
{/* // </h2> */}
{/* // <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" */}
{/* //   data-bs-parent="newsaccordion">
//   <div class="accordion-body">
//     ${element.content}<a href="${element.url}" target="_blank">read more</a> 
//   </div>
// </div> */}
{/* // </div>`
// htmls+=news;
//         }); */}