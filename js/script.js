const plants = {
    ficus: [
        {
            light: "So much",
            water: "Absolutely",
            record: "Everything I touch turns to green", 
            src: "./assets/ficus.jpeg",
            text: "You're a pro get yourself a Fiddle Leaf Fig!" 
        },
    ],
    zanzibar: [
        {
            light: "Some",
            water: "Sometimes",
            record: "I've had luck with succulents"
        },
    ],
    succulent: [
        {
            light: "Some",
            water: "Sometimes",
            record: "My home is a plant cemetary"
        },
    ],
    snake: [
        {
            light: "Some",
            water: "No",
            record: "I've had luck with succulents"
        },
    ],
    plastic: [
        {
            light: "None",
            water: "No",
            record: "My home is a plant cemetary"
        },
    ]
};

$(document).ready(function() {
    
    $("form").on("submit", function (event) {
        //  prevent default action, 
        event.preventDefault();

    
    // Three variables to store the answers from each question, when submit button is clicked
        const answer1 = $("input[name=light]:checked").val();
        const answer2 = $("input[name=water]:checked").val(); 
        const answer3 = $("input[name=record]:checked").val();

    // convert answers into numbers to be able to add them 
        const sum = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);

    // Conditions to match the sum of the user responses with a plant OR alert user if they don't answer all the questions
        if (sum >= 30) { 
            $(".quizResults").html(`<h3>You're a pro get yourself a Fiddle Leaf Fig!</h3>
            <img class="imageStyles" src="./assets/ficus.jpeg" alt"Fiddle Leaf Fig plant in basket">`);
        } else if (sum >= 25) {
            $(".quizResults").html(`<h3>Try out a Zanzibar Gem!</h3>
            <img class="imageStyles" src="./assets/zz.jpg" alt"Sprig of a Zanzibar Gem">`);
        } else if (sum === 20 ) {
            $(".quizResults").html(`<h3>Try a trusty succulent</h3>
            <img class="imageStyles" src="./assets/succulent.jpeg" alt"Succulent in a small vase">`);
        } else if (sum === 15 || sum === 10) {
            $(".quizResults").html(`<h3>Try out a snake plant</h3>
            <img class="imageStyles" src="./assets/snakePlant.jpeg" alt"Small snake plant in a terracotta pot">`);
        } else if(sum <= 5) {
            $(".quizResults").html(`<h3>Best to stick to plastic</h3>
            <img class="imageStyles" src="./assets/plastic.jpeg" alt"Close up of a plastic plant">`);
        } else {
            swal({
            text: "Make sure to answer them all!",
            icon: "error",
                });

            };
        });

    // This button reloads the page and scrolls to the top to take quiz again
        $(".takeQuizAgain").on('click', function () {
            location.reload();
            $("html").scrollTop(0);
        });

    });
        
