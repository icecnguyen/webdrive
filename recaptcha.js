function loadRecaptcha() {
  var script = document.createElement('script');
  script.src = 'https://www.google.com/recaptcha/api.js';
  document.head.appendChild(script);
}

function onRecaptchaSuccess(token) {
  console.log('Recaptcha successful with token: ' + token);
}
