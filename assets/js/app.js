
// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyAo7P8OWkKTqYrPMfqALLNWl2iqKRqXfSY",
    authDomain: "train-project-66c4b.firebaseapp.com",
    databaseURL: "https://train-project-66c4b.firebaseio.com",
    storageBucket: "train-project-66c4b.appspot.com",
  
    appId: "1:75008436979:web:470863910ea79dd4"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  var database = firebase.database();

  var clickCounter = 0;

$("#submit").on("click", function() {

      // Add to clickCounter
      clickCounter++;

      //  Store Click Data to Firebase in a JSON property called clickCount
      // Note how we are using the Firebase .set() method
      database.ref().set({
        clickCount: clickCounter
      });

    });

    
    database.ref().on("value", function(snapshot) {

        // Then we console.log the value of snapshot
        console.log(snapshot.val());
  
        // Update the clickCounter variable with data from the database.
        clickCounter = snapshot.val().clickCount;
  
        // Then we change the html associated with the number.
        $("#click-value").text(snapshot.val().clickCount);
  
        // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
        // Again we could have named errorObject anything we wanted.
      }, function(errorObject) {
  
        // In case of error this will print the error
        console.log("The read failed: " + errorObject.code);
      });

    
  