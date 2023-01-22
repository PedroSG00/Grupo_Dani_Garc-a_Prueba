const router = require("express").Router();
const catFactApiService = require('../services/cats-facts-api-service')
const giphyApiService = require('../services/giphy-api-service')

router.get("/", async (req, res, next) => {

    try {

        const catFact = await catFactApiService.getCatFact()
        const { data } = catFact
        const { fact } = data
        const cuttedFact = fact.split(' ').slice(0, 3).join(" ")

        const giphyImage = giphyApiService.getGif(cuttedFact)

        console.log(giphyImage)

    } catch (err) {

        console.log(err)

    }


});



module.exports = router;
