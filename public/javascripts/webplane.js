var sock = new SockJS('/sock');

sock.onopen = function() {
  console.log('Connection opened');
};

sock.onclose = function() {
  console.log('Connection closed');
};

sock.onmessage = function(msg) {
  // Get the content
  var content = JSON.parse(msg.data);

  console.log(msg);
  
};