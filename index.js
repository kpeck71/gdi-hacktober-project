const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random/9';
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?limit=9';

function getDogs(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    req.send();
  });
}

function getCats(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.setRequestHeader('x-api-key', 'f24e0749-14e9-4bfd-95e2-100d938ffbb5')
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    req.send();
  });
}

function loadImage(url) {
	const list = document.getElementById("pets");
  const li = document.createElement("li");
  const img = document.createElement("img");

  list.appendChild(li);
  li.appendChild(img);
  img.setAttribute('src', url);
  li.setAttribute('class', 'pet-pic');
  //img.setAttribute('onClick', createSelectPlayerInsideThisFunction// 'selectPlayer()');
}


function loadMore() {
	getDogs(DOG_API_URL)
  .then(function(dogResponse) {
  	let dogResp = JSON.parse(dogResponse);

    for (let img of dogResp.message) {
      loadImage(img);
    }

    console.log("Success for dogs!");
  }, function(error) {
    console.error("Failed!", error);
  })
  .then(getCats(CAT_API_URL)
    .then(function(catResponse) {
  		let catResp = JSON.parse(catResponse);

      for (let img of catResp) {
        loadImage(img.url);
      }

      console.log("Success for cats!", catResponse);
     }, function(error) {
      console.error("Failed!", error);
    })
  )
   }
