const newsApi =
  "https://newsapi.org/v2/everything?q=tesla&from=2021-11-01&sortBy=publishedAt&apiKey=4f0b972f8e24439a8f27287ae19f7b5f";
async function getNews(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data.status);
  showNews(data.articles);
}

function showNews(newsArr) {
  function fixNull(inull) {
    if (inull == null || inull == undefined) {
      return "nothing";
    }
    return inull;
  }
  let tab = `<div class=newsGrid
  <p>title: ${fixNull(newsArr[0].title)}</p>
  <p>description: ${fixNull(newsArr[0].description)} </p>
  <p>url: <a href="${fixNull(newsArr[0].url)} ">link</a>  </p>
  <p><img src=" ${fixNull(newsArr[0].urlToImage)} " alt="news"></p>
  <p>publishedAt: ${fixNull(newsArr[0].publishedAt)} </p>
  <p>content: ${fixNull(newsArr[0].content)} </p>
  <p>Today Date: ${moment().format("MMM Do YY")} </p>
</div>`;
  console.log(newsArr)

  for (let nw of newsArr) {
    if(newsArr[0]==nw){
        continue
    }
      
    tab += `<div class=newsGrid
        <p>title: ${fixNull(nw.title)}</p>
        <p>description: ${fixNull(nw.description)} </p>
        <p>url: <a href="${fixNull(nw.url)} ">link</a>  </p>
        <p><img src=" ${fixNull(nw.urlToImage)} " alt="news"></p>
        <p>publishedAt: ${fixNull(nw.publishedAt)} </p>
        <p>content: ${fixNull(nw.content)} </p>
        <p>Today Date: ${moment().format("MMM Do YY")} </p>
    </div>`;


  }
  document.getElementById("News").innerHTML = tab;
}

getNews(newsApi);



