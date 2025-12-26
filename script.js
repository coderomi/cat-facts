
async function getCatData() {
    try {

        const factRes = await fetch("https://catfact.ninja/fact");
        const factData = await factRes.json();
        const englishFact = factData.fact;


        const imgRes = await fetch("https://api.thecatapi.com/v1/images/search");
        const imgData = await imgRes.json();


        document.getElementById("fact-en").innerHTML =
            "<strong>English:</strong> " + englishFact;
        document.getElementById("catImage").src = imgData[0].url;

    } catch (err) {
        console.error("Error fetching cat data:", err);
        document.getElementById("fact-en").innerHTML =
            "Failed to load cat fact.";
    }
}

getCatData();




