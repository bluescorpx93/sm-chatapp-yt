var socket = io.connect();
var messageForm = document.getElementById('sendMessage');
var message = document.getElementById('message');
var username = document.getElementById('username');
var chat = document.getElementById('chat');

messageForm.addEventListener('submit', function(e){
  e.preventDefault();
  var theMsg = { user: username.value, msg: message.value};
  socket.emit('send-message', theMsg);
  message.value = "";
});

socket.on('new-message', function(data){
  chat.innerHTML += '<p> <strong>: '+ data.user + '</strong>' + data.msg + '</p>';
});