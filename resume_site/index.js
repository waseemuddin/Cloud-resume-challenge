
/*const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://5x3xecnji4cbocjx4ez2o27j2i0cpwmc.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    //counter.innerHTML = `Views:${data}`;
    counter.innerHTML = `views: ${data.views}`; 
}
updateCounter();
*/  
// updated code

const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://5x3xecnji4cbocjx4ez2o27j2i0cpwmc.lambda-url.us-east-1.on.aws/");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        counter.innerHTML = `views: ${data.views}`; // Adjust this line if necessary
    } catch (error) {
        console.error("Failed to fetch views:", error);
        counter.innerHTML = "Error fetching views";
    }
}

updateCounter();
