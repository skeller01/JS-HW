// Model

var model = {
  loggedIn: false,
  user: undefined,
  messages: undefined
    
  }
;

// View

var chatTemplate;
var formTemplate;
function compileTemplates() {
  var templateSource = $('#chat-template').html();
  chatTemplate = Handlebars.compile(templateSource);

  var formTemplateSource = $('#form-template').html();
  formTemplate = Handlebars.compile(formTemplateSource);
}

function renderChat() {
  var chatHtml = chatTemplate(model);
  $('#chatLog').html(chatHtml);
}

function renderForm() {
  var formHtml = formTemplate(model);
  $('#formContainer').html(formHtml);
}

// Controller

function setup() {
  compileTemplates();
  renderForm();
  renderChat();

  // TODO: Event Listeners
  $('#formContainer').on('click', '#register', handleRegister);
  $('#formContainer').on('click', '#login', handleLogin);
  $('#formContainer').on('click', '#signOut', handleSignOut);
  firebase.auth().onAuthStateChanged(handleAuthStateChange);

  $('#formContainer').on('click','#comment',handleComment);
  $('#chatLog').on('click','.upvote',handleUpVote);
  $('#chatLog').on('click','.delete',deleteComment);
}

function deleteComment(){
  var messageId = $(this).parent().attr('data-id');
  
  firebase.database().ref("messages").child(messageId).remove();
  
}

function handleUpVote(){
  var messageId = $(this).parent().attr('data-id');
  var message = model.messages[messageId];
  var upvotes=message.upvotes;
  firebase.database().ref('messages').child(messageId).update({
      upvotes: upvotes + 1
  });
}

function handleComment(){
  var comment = $('textarea[name="message"]').val();
  $('textarea[name="message"]').val('');
  firebase.database().ref('messages').push({
      author: model.user.email,
      text: comment,
      upvotes: 0
    })
}

function processMessages(snapshot){
  var messages = snapshot.val();
  model.messages = messages;

  renderChat();

}

function handleAuthStateChange() {
  var user = firebase.auth().currentUser;

  if (user) {
    model.loggedIn = true;
    model.user = user;
    firebase.database().ref('messages').on('value',processMessages);
  } else {
    model.loggedIn = false;
    model.user = undefined;
  }
  
  renderForm();
  renderChat();
}

function handleSignOut() {
  firebase.auth().signOut();
}

function handleRegister() {
  var email = $('input[name="email"]').val();
  var password = $('input[name="password"]').val();

  firebase.auth().createUserWithEmailAndPassword(email, password);
}

function handleLogin() {
  var email = $('input[name="email"]').val();
  var password = $('input[name="password"]').val();

  firebase.auth().signInWithEmailAndPassword(email, password);
}


$(document).ready(setup);














