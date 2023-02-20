import { getFish } from "./database.js";

export const FishList = () => {
    const fishes = getFish();

    let htmlString = `<article class="fishList">`;

    for (const fish of fishes) {
        htmlString += `<section class="fishCard">
            <div><img class="fish__image image--card" src="${fish.image}"/></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length} inches</div>
            <div class="fish__origin">${fish.origin}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
        `
    }
    htmlString += `</article>`;
    return htmlString;
}