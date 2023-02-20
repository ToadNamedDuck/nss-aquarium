import { getFish } from './database.js'
import { FishList } from './FishList.js'

const allFish = getFish()
const parentHTMLSelector = document.querySelector("bodySectionFishOwned")

parentHTMLElement.innerHTML = FishList();