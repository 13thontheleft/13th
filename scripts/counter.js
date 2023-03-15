var request = new XMLHttpRequest();
request.open('GET', 'https://felsk0q6si.execute-api.eu-west-1.amazonaws.com/Prod/cv-counter', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    alert(data)
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();