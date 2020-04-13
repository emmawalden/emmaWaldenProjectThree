const plantValue = {
    30: "ficus",
    25: "monstera",
    20: "succulent",
    15: "zanzibar",
    10: "snake",
    5: "plastic",
    0: "plastic",
}

const plants = [
        {
            text: "You're a pro get yourself a Fiddle Leaf Fig!",
            // Photo by Lauren Mancke on Unsplash
            src: "./assets/ficus.jpeg",
            alt: "Fiddle Leaf Fig plant in a basket",
            tag: "ficus",
        },
        {
            text: "Get yourself a Monstera",
            // Photo by Kara Eads on Unsplash
            src: "./assets/monstera.jpeg",
            alt: "Monstera in a pot on a small wooden table",
            tag: "monstera",
        },
        {
            text: "Try a trusty succulent",
            // Photo by Jeremy Lwanga on Unsplash
            src: "./assets/succulent.jpeg",
            alt: "Succulent in a small vase",
            tag: "succulent",
        }, 
        {
            text: "Try out a Zanzibar Gem!",
            // Photo by Paweł Czerwiński on unsplash
            src: "./assets/zz.jpg",
            alt: "Sprig of a Zanzibar Gem",
            tag: "zanzibar"
        },
        {
            text: "Try out a snake plant",
            // Photo by Kara Eads on Unsplash
            src: "./assets/snakePlant.jpeg",
            alt: "Small snake plant in a terracotta pot",
            tag: "snake",
        },
        {
            text: "Best to stick to plastic",
            // Photo by Kristine Tanne on unsplash
            src: "./assets/plastic.jpeg",
            alt: "Close up of a plastic plant",
            tag: "plastic",
        },
    ];

// Wait until document is ready before running 
$(document).ready(function() {
    
    $("form").on("submit", function(event) {
        //  prevent default action from refreshing the page when submit is clicked 
        event.preventDefault();

    
    // Three variables to store the user's answers from each question
        const answer1 = $("input[name=light]:checked").val();
        const answer2 = $("input[name=water]:checked").val(); 
        const answer3 = $("input[name=record]:checked").val();

    // Convert answers into numbers to be able to add them together
        const sum = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);

    // Get plant name from plantSum object based on user selection
        const plantSum = plantValue[sum];
        let plantText;
        let plantImage;
        let plantAlt;
    
    // If the user doesn't select an answer for all the questions have the sweet alert pop up
        if (plantSum === undefined) {
            swal({
                text: "Make sure to answer them all!",
                icon: "error",
            });
        };

        for (let i = 0; i < plants.length; i++) {
            const tag = plants[i].tag;
        
    // Match the sum of the user responses with the corresponding plant tag name, store matching text, img, and alt in a variable 
            if (plantSum.includes(tag)) { 
                plantText = plants[i].text;
                plantImage = plants[i].src;
                plantAlt = plants[i].alt;
            };
        };  
    

    //  Dynamically add html stored in variables to the DOM
        $(".quizResults").html(`<h3>${plantText}</h3>
        <img class="imageStyles" src="${plantImage}" alt="${plantAlt}"></img>
            `);
        });

    // Smooth scroll after clicking "Get your plant" button
        $(".submit").click(function () {
            $("html, body").animate({
                scrollTop: $(this).offset().top
            }, 800);
        });

    // This button reloads the page and scrolls to the top to take quiz again
        $(".takeQuizAgain").on('click', function () {
            location.reload();
            $("html").scrollTop(0);
        });

    });