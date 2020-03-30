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
        const answer1 = $("input[name=light]:checked").val();
        const answer2 = $("input[name=water]:checked").val(); 
        const answer3 = $("input[name=record]:checked").val();

    // convert answers into numbers to be able to add them 
        const sum = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);
        console.log(sum);
    
    // Conditions to match the sum of the user responses with a plant
        if (sum >= 30) { 
            const yourResult = document.createElement('div');
            yourResult.classList.add("resultStyles");
            const yourResultImage = document.createElement('img');
            yourResultImage.src = "./assets/ficus.jpeg";
            yourResultImage.classList.add("imageStyles")
            yourResult.appendChild(yourResultImage)
            document.body.appendChild(yourResult);
        } else if (sum >= 25) {
            const yourResult = document.createElement('div');
            yourResult.classList.add("resultStyles");
            const yourResultImage = document.createElement('img');
            yourResultImage.src = "./assets/zz.jpeg";
            yourResultImage.classList.add("imageStyles")
            yourResult.appendChild(yourResultImage)
            document.body.appendChild(yourResult);
        } else if (sum === 20 ) {
            const yourResult = document.createElement('div');
            yourResult.classList.add("resultStyles");
            const yourResultImage = document.createElement('img');
            yourResultImage.src = "./assets/succulent.jpeg";
            yourResultImage.classList.add("imageStyles")
            yourResult.appendChild(yourResultImage)
            document.body.appendChild(yourResult);
        } else if (sum === 15 || sum === 10) {
            const yourResult = document.createElement('div');
            yourResult.classList.add("resultStyles");
            const yourResultImage = document.createElement('img');
            yourResultImage.src = "./assets/snakePlant.jpeg";
            yourResultImage.classList.add("imageStyles")
            yourResult.appendChild(yourResultImage)
            document.body.appendChild(yourResult);
        } else if(sum <= 5) {
            const yourResult = document.createElement('div');
            yourResult.classList.add("resultStyles");
            const yourResultImage = document.createElement('img');
            yourResultImage.src = "./assets/plastic.jpeg";
            yourResultImage.classList.add("imageStyles")
            yourResult.appendChild(yourResultImage)
            document.body.appendChild(yourResult);
        }
    }
        
        $("form").on("submit", function(event) {
            //  prevent default action, 
            event.preventDefault();
            formSubmitted();

        });
});
