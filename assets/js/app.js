$(`.click`).on(`click`, function() {
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9`,
        method: "GET"
    }).then(function(response) {
        var index = Math.floor(Math.random()*25);
        console.log(index);
        var animatedURL = response.data[index].images.fixed_height.url;
        var URLdescription = response.data[index].title;
        console.log(response);
        //create new image html
        var $actionGif = $("<img>");

        //assign source image element to image source attribute with alt name
        $actionGif.attr("src", animatedURL);
        $actionGif.attr("alt", "trending gif");
        $(`.gif`).html($actionGif);
        $(`.word`).text(`Trending: ${URLdescription}`); 

    })
})
// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyDu5WA4tLm1lRvvA1HWAXgQzlPxK_P7vOQ",
    authDomain: "portfolio-fbd0c.firebaseapp.com",
    databaseURL: "https://portfolio-fbd0c.firebaseio.com",
    projectId: "portfolio-fbd0c",
    storageBucket: "portfolio-fbd0c.appspot.com",
    messagingSenderId: "330824088294",
    appId: "1:330824088294:web:8e503d6eb3c6d3d2"
};
// Initialize Firebase
firebase.initializeApp(config);

var database = firebase.database();

var clickCounter = 0;

$('.click').on('click', function() {
    clickCounter++;
    console.log(clickCounter);

    // **** Store Click Data to Firebase in a JSON property called clickCount *****
    // **** Note how we are using the Firebase .set() method ****
    // **** .ref() refers to the path you want to save your data to
    // **** Since we left .ref() blank, it will save to the root directory
    database.ref().set({
      clickCount: clickCounter
    });

    // Now! go to https://fir-click-counter-7cdb9.firebaseio.com/ to see the impact to the DB
});


let project = "";
$(document).ready(function() {
    $('.battle-portfolio').on('click', function() {
        project = "battle";
    })
    $('.timed-trivia-portfolio').on('click', function() {
        project = "timed-trivia";
    })
    $('.mood-drink-portfolio').on('click', function() {
        project = "mood-drink";
    })

    localStorage.setItem("project", project);
})

