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

        // Sweet alert, may not need if radio buttons are always checked
        // if (answer1.checked === false | answer2.checked === false | answer3.checked === false) {
        //     swal({
        //         text: "Please pick a response",
        //         icon: "error",
        //     });
        // }
        

    // convert answers into numbers to be able to add them 
        const sum = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);


    // Creating variables to be added to the DOM
        const yourResultImage = document.createElement('img');
        yourResultImage.classList.add("imageStyles")
        const yourResultHeading = document.createElement('h3');
    
    // Conditions to match the sum of the user responses with a plant
        if (sum >= 30) { 
            yourResultImage.src = "./assets/ficus.jpeg";
            yourResultHeading.textContent = "You're a pro get yourself a Fiddle Leaf Fig!";
            yourResult.appendChild(yourResultHeading);
            yourResult.appendChild(yourResultImage);
            document.body.appendChild(yourResult);
        } else if (sum >= 25) {
            yourResultImage.src = "./assets/zz.jpeg";
            yourResultHeading.textContent = "Try out a Zanzibar Gem!";
            yourResult.appendChild(yourResultHeading);
            yourResult.appendChild(yourResultImage);
            document.body.appendChild(yourResult);
        } else if (sum === 20 ) {
            yourResultImage.src = "./assets/succulent.jpeg";
            yourResultHeading.textContent = "Try a trusty succulent";
            yourResult.appendChild(yourResultHeading);
            yourResult.appendChild(yourResultImage);
            document.body.appendChild(yourResult);
        } else if (sum === 15 || sum === 10) {
            yourResultImage.src = "./assets/snakePlant.jpeg";
            yourResultHeading.textContent = "Try out a snake plant";
            yourResult.appendChild(yourResultHeading);
            yourResult.appendChild(yourResultImage);
            document.body.appendChild(yourResult);
        } else if(sum <= 5) {
            yourResultImage.src = "./assets/plastic.jpeg";
            yourResultHeading.textContent = "Best to stick to plastic!";
            yourResult.appendChild(yourResultHeading);
            yourResult.appendChild(yourResultImage);
            document.body.appendChild(yourResult);
        }
    }
        
        $("form").on("submit", function(event) {
            //  prevent default action, 
            event.preventDefault();
            formSubmitted();

        });
});
