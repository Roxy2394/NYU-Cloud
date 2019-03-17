config.region = 'us-west-2';

var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: 'us-west-2:....',
  Logins: {
    'cognito-idp.us-west-2.amazonaws.com/.......': getQueryVariable(id_token)
  },
});


config.credentials.refresh(function(){
   var accessKeyId = config.credentials.accessKeyId;
   var secretAccessKey = config.credentials.secretAccessKey;
   var sessionToken = config.credentials.sessionToken;
   console.log("Set with"+accessKeyId);
   console.log("Set with"+secretAccessKey);
   console.log("Set with"+sessionToken);
   config.region = 'us-west-2';
   apigClient = apigClientFactory.newClient({
      accessKey: config.credentials.accessKeyId,
      secretKey: config.credentials.secretAccessKey,
      sessionToken: config.credentials.sessionToken,
      region: 'us-west-2'
   });
});

var apigClient= apigClientFactory.newClient({
  accessKey: accessKeyId, 
  secretKey: secretAccessKey,
});

var params = {
  botAlias: '$LATEST', 
  botName: 'DiningConcierge', 
  inputText: message, 
  userId: idToken , 
  requestAttributes: {
   
  },
  sessionAttributes: {
    'sessionToken': sessionToken,
  }
};

$(document).keypress(function (e) {
  if (e.which==13) {
  var message = $("#user-input").val();
  console.log(message);

  $('#chat-output').append(`
    <div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);

  $("#user-input").val("");

  return false;
  
  }
});
console.log('work');

