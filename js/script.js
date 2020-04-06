const plants = {
    ficus:
        {
            light: "So much",
            water: "Absolutely",
            record: "Everything I touch turns to green", 
            text: "You're a pro get yourself a Fiddle Leaf Fig!",
            src: "./assets/ficus.jpeg",
            alt: "Fiddle Leaf Fig plant in basket"
        },
    zanzibar:
        {
            light: "Some",
            water: "Sometimes",
            record: "I've had luck with succulents",
            text: "Try out a Zanzibar Gem!",
            src: "./assets/zz.jpg",
            alt: "Sprig of a Zanzibar Gem"
        },
    succulent: 
        {
            light: "Some",
            water: "Sometimes",
            record: "My home is a plant cemetary",
            text: "Try a trusty succulent",
            src: "./assets/succulent.jpeg",
            alt: "Succulent in a small vase"
        },
    snake: 
        {
            light: "Some",
            water: "No",
            record: "I've had luck with succulents",
            text: "Try out a snake plant",
            src: "./assets/snakePlant.jpeg",
            alt: "Small snake plant in a terracotta pot"
        },
    plastic:
        {
            light: "None",
            water: "No",
            record: "My home is a plant cemetary",
            text: "Best to stick to plastic",
            src: "./assets/plastic.jpeg",
            alt: "Close up of a plastic plant"
        },
};

$(document).ready(function() {
    
    $("form").on("submit", function(event) {
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
            $(".quizResults").html(`<h3>${plants.ficus.text}</h3>
            <img class="imageStyles" src="${plants.ficus.src}" alt="${plants.ficus.alt}">`);
            smoothScroll('img');
        } else if (sum >= 25) {
            $(".quizResults").html(`<h3>${plants.zanzibar.text}</h3>
            <img class="imageStyles" src="${plants.zanzibar.src}" alt="${plants.zanzibar.alt}">`);
        } else if (sum === 20 ) {
            $(".quizResults").html(`<h3>${plants.succulent.text}</h3>
            <img class="imageStyles" src="${plants.succulent.src}" alt="${plants.succulent.alt}">`);
        } else if (sum === 15 || sum === 10) {
            $(".quizResults").html(`<h3>${plants.snake.text}</h3>
            <img class="imageStyles" src="${plants.snake.src}" alt="${plants.snake.alt}">`);
        } else if(sum <= 5) {
            $(".quizResults").html(`<h3>${plants.plastic.text}</h3>
            <img class="imageStyles" src="${plants.plastic.src}" alt="${plants.plastic.alt}">`);
        } else {
            swal({
            text: "Make sure to answer them all!",
            icon: "error",
                });
            };       
        });

        $("button").click(function () {
            alert($(".quizResults").scrollTop());
        });


    // This button reloads the page and scrolls to the top to take quiz again
        $(".takeQuizAgain").on('click', function () {
            location.reload();
            $("html").scrollTop(0);
        });

    });
        
