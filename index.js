const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random/9';
const CAT_API_Url = 'https://api.thecatapi.com/v1/images/search?';

function get(url) {
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
