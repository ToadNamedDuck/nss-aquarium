import { getFish } from './database.js'
import { FishList } from './FishList.js'

const allFish = getFish();
const parentHTMLElement = document.querySelector(".bodySectionFishOwned");

parentHTMLElement.innerHTML = FishList();