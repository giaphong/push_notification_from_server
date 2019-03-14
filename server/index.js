
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://apphome-ae866.firebaseio.com"
});

// var db = admin.database();
// var ref = db.ref("message");
// ref.once("value", function(snapshot) {
//   console.log(snapshot.val());
// });

// var usersRef = ref.child("users");
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   },
//   gracehop: {
//     date_of_birth: "December 9, 1906",
//     full_name: "Grace Hopper"
//   }
// });

var registrationToken = 'dKMdzW7A2Lo:APA91bF_JxgS3AXNRR3EEAgiXJvT741sCC1AQ06JKOUsykXSZEkMZmLV-lv8vnuRwQGlrfIdGzSLPSKATVFCsILZquekLYSZAoN356qo9piQJwzwzRcklLRVlCgmThXecnP333tAkz6X';
var message = {
    // notification :{
    //     title: 'Phong 123', body: '123'
    // },
    data: {
      score: '850',
      time: '2:45'
    },
    token: registrationToken
};

admin.messaging().send(message)
.then((response) => {
    console.log('Successfully sent message:', response);
})
.catch((error) => {
    console.log('Error sending message:', error);
});
