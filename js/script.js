const plants = {
    ficus: [
        {
            light: "So much",
            water: "Absolutely",
            record: "Everything I touch turns to green"
        }
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
    

    // Three variables to store the answers from each question, when button is clicked
    function formSubmitted() {
        const answer1 = $('input[name=light]:checked').val();
        const answer2 = $('input[name=water]:checked').val(); 
        const answer3 = $('input[name=record]:checked').val();

    // Store the answers in an array
        const userAnswer = [answer1, answer2, answer3];
        console.log(userAnswer);

    // convert answers into numbers to be able to add them 
        const sum = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);
        console.log(sum);
    
    // Conditions to match the sum of the user responses with a plant
        if (sum >= 30) {
            console.log('ficus');
        } else if (sum >= 25) {
            console.log('zanzibar');
        } else if (sum === 20 ) {
            console.log('succulent');
        } else if (sum === 15 || sum === 10) {
            console.log('snake');
        } else if(sum <= 5) {
            console.log('plastic');
        }
    }
        
        $('form').on('submit', function(event) {
            //  prevent default action, 
            event.preventDefault();
            formSubmitted();

        });
});
