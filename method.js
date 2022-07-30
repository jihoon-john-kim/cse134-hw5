
// select
let elPost = document.getElementById('post');
let elGet = document.getElementById('get');
let elPut = document.getElementById('put');
let elDelete = document.getElementById('delete');

let foId = document.getElementById('idNum');
let foTitle = document.getElementById('article_name');
let foArticle = document.getElementById('article_body');

let fousingMethod;
const getUsingMethod = () => {
  document.getElementsByName('usingMethod').forEach((ways) => {
    if(ways.checked){
      fousingMethod = ways.value;
    }
  })
}
let show = document.getElementById('response');

let foGender;
const getGender = () => {
  document.getElementsByName('gender').forEach((radios) => {
    if(radios.checked){      
      foGender = radios.value;
    }
  })
}

let foPurpose;
const getPurpose = () => {
  document.getElementsByName('purpose').forEach((selects) => {
    if(selects.selected){
      foPurpose = selects.value;
    }
  })
}

// listener
elPost.addEventListener('click', function onOpen() {
  getUsingMethod();
  getGender();
  getPurpose();
  if(fousingMethod=="fetch"){
      fetch("https://httpbin.org/post", {
        method: 'post',
        hearder:{'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
            id: foId.value,
            time: new Date(),
            title: foTitle.value,
            gender: foGender,
            purpose: foPurpose,
            article: foArticle.value
        })
      })
      .then((response) => response.json())
      .then((data) =>  show.innerText = JSON.stringify(data) );
  }else if(fousingMethod=="xml"){
      let xmlreq = new XMLHttpRequest();
      xmlreq.open( "POST", "https://httpbin.org/post", false);
      xmlreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
      xmlreq.send(`id=${foId.value}&time=${new Date()}&title=${foTitle.value}&gender=${foGender}&purpose=${foPurpose}&article=${foArticle.value}`);
      if (xmlreq.readyState == 4 && xmlreq.status == 200) {
        show.innerHTML=xmlreq.responseText;
  }   }
  });

elGet.addEventListener('click', function onClose() {
  getUsingMethod();
  if(fousingMethod=="fetch"){
      fetch("https://httpbin.org/get")
      .then((response) => response.json())
      .then((data) =>  show.innerHTML = JSON.stringify(data))
  }else if(fousingMethod=="xml"){
      let xmlreq = new XMLHttpRequest();
      xmlreq.open( "GET", "https://httpbin.org/get", false);
      xmlreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
      xmlreq.send( null );
      if (xmlreq.readyState == 4 && xmlreq.status == 200) {
        show.innerHTML=xmlreq.responseText;
      }
  }
});

elPut.addEventListener('click', function onOpen() {
  getUsingMethod();
  getGender();
  getPurpose();
  if(fousingMethod=="fetch"){
    fetch("https://httpbin.org/put", {
      method: 'put',
      hearder:{'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify({
          id: foId.value,
          time: new Date(),
          title: foTitle.value,
          gender: foGender,
          purpose: foPurpose,
          article: foArticle.value
      })
    })
    .then((response) => response.json())
    .then((data) =>  show.innerHTML = JSON.stringify(data));
  }else if(fousingMethod=="xml"){
    let xmlreq = new XMLHttpRequest();
    xmlreq.open( "PUT", "https://httpbin.org/put", false);
    xmlreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    xmlreq.send(`id=${foId.value}&time=${new Date()}&title=${foTitle.value}&gender=${foGender}&purpose=${foPurpose}&article=${foArticle.value}`);
    if (xmlreq.readyState == 4 && xmlreq.status == 200) {
      show.innerHTML=xmlreq.responseText;
    }
  }
});

elDelete.addEventListener('click', function onClose() {
  getUsingMethod();
  if(fousingMethod=="fetch"){
    fetch("https://httpbin.org/delete", {
      method: "delete",
    })
    .then((response) => response.json())
    .then((data) =>  show.innerHTML = JSON.stringify(data));
  }else if(fousingMethod=="xml"){
      let xmlreq = new XMLHttpRequest();
      xmlreq.open( "DELETE", "https://httpbin.org/delete", false);
      xmlreq.send( null );
      if (xmlreq.readyState == 4 && xmlreq.status == 200) {
        show.innerHTML=xmlreq.responseText;
      }
  }
});
