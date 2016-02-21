(function() {
 loadOptions();
 buttonHandler();
})();

function buttonHandler() {
 var $submitButton = $('#submitButton');

 $submitButton.on('click', function() {
//  console.log('Submit');
 
  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
 });

 var $cancelButton = $('#cancelButton');

 $cancelButton.on('click', function() {
//  console.log('Cancel');
 
  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to;
 });
}

function loadOptions() {
 var $lightColorPicker = $('#lightColorPicker');

 if (localStorage.lightColor) {
  $lightColorPicker[0].value = localStorage.lightColor;
 }
 
} 

function getAndStoreConfigData() {
 var $lightColorPicker = $('#lightColorPicker');

 var options = {
  lightColor: $lightColorPicker.val()
 };
 
 console.log('Got options: ' + JSON.stringify(options));

 localStorage.lightColor = options.lightColor;

 return options;
}

function getQueryParam(variable, defaultValue) {
 var query = location.search.substring(1);
 var vars = query.split('&');
 for (var i = 0; i < vars.length; i++) {
  var pair = vars[i].split('=');
  if (pair[0] === variable) {
   return decodeURIComponent(pair[1]);
  }
 }
 return defaultValue || false;
}
