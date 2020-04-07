const plantValue = {
    30: "ficus",
    25: "zanzibar",
    20: "succulent",
    15: "snake",
    10: "snake",
    5: "plastic",
    0: "plastic",
}

const plants = [
        {
            text: "You're a pro get yourself a Fiddle Leaf Fig!",
            src: "./assets/ficus.jpeg",
            alt: "Fiddle Leaf Fig plant in a basket",
            tag: "ficus",
        },
        {
            text: "Try out a Zanzibar Gem!",
            src: "./assets/zz.jpg",
            alt: "Sprig of a Zanzibar Gem",
            tag: "zanzibar"
        },
        {
            text: "Try a trusty succulent",
            src: "./assets/succulent.jpeg",
            alt: "Succulent in a small vase",
            tag: "succulent",
        }, 
        {
            text: "Try out a snake plant",
            src: "./assets/snakePlant.jpeg",
            alt: "Small snake plant in a terracotta pot",
            tag: "snake",
        },
        {
            text: "Best to stick to plastic",
            src: "./assets/plastic.jpeg",
            alt: "Close up of a plastic plant",
            tag: "plastic",
        },
    ];

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
        
    // Match the sum of the user responses with the corresponding plant tag name 
            if (plantSum.includes(tag)) { 
                plantText = plants[i].text;
                plantImage = plants[i].src;
                plantAlt = plants[i].alt;
            };
        };  

    //  Dynamically add html of heading and image to the page
        $(".quizResults").html(`<h3>${plantText}</h3>
        <img class="imageStyles" src="${plantImage}" alt="${plantAlt}"></img>
            `);
        });


    // This button reloads the page and scrolls to the top to take quiz again
        $(".takeQuizAgain").on('click', function () {
            location.reload();
            $("html").scrollTop(0);
        });

    });