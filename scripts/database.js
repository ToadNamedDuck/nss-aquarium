const database = {
    fish: [
        {
            name: "Bubble Beam",
            species: "Flounder",
            length: 22,
            origin: "Gulf of Mexico",
            diet: ["small fish", "crustaceans"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Flounder_hawaii.jpg/250px-Flounder_hawaii.jpg"
        },
        {
            name: "R. Kelly",
            species: "Convict Cichlid",
            length: 4,
            origin: "Lake Ilpango",
            diet: ["algae", "small insects", "worms", "plant matter"],
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Archocentrus_nigrofasciatus_female.jpg"
        },
        {
            name: "Collin",
            species: "Fantail Goldfish",
            length: 2.3,
            origin: "Yangtze River",
            diet: ["crustaceans", "insects", "plant matter"],
            image: "https://www.liveaquaria.com/images/categories/large/lg_39507_Fantail_Goldfish_Red.jpg"
        },
        {
            name: "Yaga",
            species: "Channel Catfish",
            length: 24,
            origin: "Sabine River",
            diet: ["crustaceans", "snails", "smaller fish", "small mammals"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ictalurus_punctatus1.jpg/150px-Ictalurus_punctatus1.jpg"
        },
        {
            name: "Alfred von Heinrich Steinfursan",
            species: "Atlantic Herring",
            length: 17,
            origin: "US East Coast",
            diet: ["krill", "plankton", "smaller fish"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Clupea_harengus_Gervais.jpg/500px-Clupea_harengus_Gervais.jpg"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}