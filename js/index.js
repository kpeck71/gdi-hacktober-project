// $(document).ready(function() {
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

  function getHectic(url) {
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      // req.setRequestHeader('x-api-key', 'f24e0749-14e9-4bfd-95e2-100d938ffbb5')
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
  	// const catsList = document.getElementById("cats-list");
    // const dogsList = document.getElementById("dogs-list");
    const playersList = document.getElementById("players-list");
    const li = document.createElement("li");
    const img = document.createElement("img");



  // how to DRY this up, pass in ${cats} or {dogs}
    // if (cats) {
    //   catsList.appendChild(li);
    //   li.appendChild(img);
    //   img.setAttribute('src', url);
    //   li.setAttribute('class', 'cat-pic');
    // }
    // if (dogs) {
      playersList.appendChild(li);
      li.appendChild(img);
      img.setAttribute('src', url);
      li.setAttribute('class', 'player-pic');

    // }
      //img.setAttribute('onClick', createSelectPlayerInsideThisFunction// 'selectPlayer()');
  }

  function pickPlayer(id) {
    console.log(id)
    document.getElementById('step1').style.display= 'none';
    loadMore(id)
  }

  function loadMore(choice) {

  if (choice === "dogs") {

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
  } else if (choice === "cats") {
    getCats(CAT_API_URL)
      .then(function(catResponse) {
        let catResp = JSON.parse(catResponse);

        for (let img of catResp) {
          loadImage(img.url);
        }

        console.log("Success for cats!", catResponse);
       }, function(error) {
        console.error("Failed!", error);
      }
    )
  } else {
    console.log("MASS HYSTERIA!!!")
    loadImage('https://source.unsplash.com/collection/181581/1000x1000')
  }





    // .then(getHectic(RANDO_API_URL)
    //   .then(function(randResponse) {
    //     let randResp = JSON.parse(randResponse);
    //
    //     for (let img of randResp) {
    //       loadImage(img.url);
    //     }
    //
    //     console.log("Success for randos!", randResponse);
    //    }, function(error) {
    //     console.error("Failed!", error);
    //   })
    // )
  }





  // function loadMore() {
  // 	getDogs(DOG_API_URL)
  //   .then(function(dogResponse) {
  //   	let dogResp = JSON.parse(dogResponse);
  //
  //     for (let img of dogResp.message) {
  //       loadImage(img);
  //     }
  //
  //     console.log("Success for dogs!");
  //   }, function(error) {
  //     console.error("Failed!", error);
  //   })
  //   .then(getCats(CAT_API_URL)
  //     .then(function(catResponse) {
  //   		let catResp = JSON.parse(catResponse);
  //
  //       for (let img of catResp) {
  //         loadImage(img.url);
  //       }
  //
  //       console.log("Success for cats!", catResponse);
  //      }, function(error) {
  //       console.error("Failed!", error);
  //     })
  //   )
  // }

// });
