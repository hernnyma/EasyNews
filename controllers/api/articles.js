const jwt = require('jsonwebtoken');
const puppeteer = require('puppeteer')
const Article = require('../../models/article');

const currentArticles = ('../../articles.js')
//const User = require('../../models/user');
//const bcrypt = require('bcrypt');

module.exports = {
  getAll,
  saveArticle,
  getUserArticles

};

async function getAll(req, res) {
    console.log('In getAll controller')
    let articles = []

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (Linux; Android 9; HRY-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4605.0 Mobile Safari/537.36')
    await page.goto('http://cbc.ca/')

    // console.log(articles)
    //a single article worth of info, will timeout if selectors are missing or err.
    //The Top article on the website - need to update regularly, as the formatt changes constantly, a video, a pic, one link, or two links in the card

    // let articleTop = new Object()
    // const article = await page.$eval(`#app div main div section:nth-child(1) div div.sectionContainer-main ul li:nth-child(1) div a:nth-child(2) div div.card-content-top h3`, el => el.innerText)
    // articleTop.title = article
    // // const articlecontent = await page.$eval(`#app div main div section:nth-child(1) div div.sectionContainer-main ul li:nth-child(1) div a:nth-child(2) div div.card-content-top div.description`, el => el.innerText)
    // // console.log(articlecontent)
    // const articlelink = await page.$eval(`#app div main div section:nth-child(1) div div.sectionContainer-main ul li:nth-child(1) div a`, el => el.href)
    // articleTop.link = articlelink
    // //Top element of the card which changes formatt, no neccesarily a img, can be video
    // const articleimg = await page.$eval(`#app div main div section:nth-child(1) div div.sectionContainer-main ul li:nth-child(1) div a:nth-child(1) div figure div img`, el => el.src)
    // articleTop.img = articleimg
    // articles.push(articleTop)



    //articles
    let articleOne = new Object()
    const articleOneTitle = await page.$eval(`.sclt-section0card1 a div.contentWrapper div.card-content div.card-content-top .headline`, el => el.innerText)
    articleOne.title = articleOneTitle
    const articleOneLink = await page.$eval(`.sclt-section0card1 a`, el => el.href)
    articleOne.link = articleOneLink
    const articleOneImg = await page.$eval(`.sclt-section0card1 a div.cardImageWrap figure div img`, el => el.src)
    articleOne.img = articleOneImg
    articles.push(articleOne)

    let articleTwo = new Object()
    const articleTwoTitle = await page.$eval(`.sclt-section0card2 a div.contentWrapper div.card-content div.card-content-top .headline`, el => el.innerText)
    articleTwo.title = articleTwoTitle
    const articleTwoLink = await page.$eval(`.sclt-section0card2 a`, el => el.href)
    articleTwo.link = articleTwoLink
    const articleTwoImg = await page.$eval(`.sclt-section0card2 a div.cardImageWrap figure div img`, el => el.src)
    articleTwo.img = articleTwoImg
    articles.push(articleTwo)

    let articleThree = new Object()
    const articleThreeTitle = await page.$eval(`.sclt-section0card3 a div.contentWrapper div.card-content div.card-content-top .headline`, el => el.innerText)
    articleThree.title = articleThreeTitle
    const articleThreeLink = await page.$eval(`.sclt-section0card3 a`, el => el.href)
    articleThree.link = articleThreeLink
    const articleThreeImg = await page.$eval(`.sclt-section0card3 a div.cardImageWrap figure div img`, el => el.src)
    articleThree.img = articleThreeImg
    articles.push(articleThree)

    let articleFour = new Object()
    const articleFourTitle = await page.$eval(`.sclt-section0card4 a div.contentWrapper div.card-content div.card-content-top .headline`, el => el.innerText)
    articleFour.title = articleFourTitle
    const articleFourLink = await page.$eval(`.sclt-section0card4 a`, el => el.href)
    articleFour.link = articleFourLink
    const articleFourImg = await page.$eval(`.sclt-section0card4 a div.cardImageWrap figure div img`, el => el.src)
    articleFour.img = articleFourImg
    articles.push(articleFour)

    // *Comment* Probably based on internet speed, headless browser doesnt load articles fast enough, so cannot grab non-rendered articles
    // let articleFive = new Object()
    // const articleFiveTitle = await page.$eval(`.sclt-section0card5 a div.contentWrapper div.card-content div.card-content-top .headline`, el => el.innerText)
    // articleFive.title = articleFiveTitle
    // const articleFiveLink = await page.$eval(`.sclt-section0card5 a`, el => el.href)
    // articleFive.link = articleFiveLink
    // const articleFiveImg = await page.$eval(`.sclt-section0card5 a div.cardImageWrap figure div img`, el => el.src)
    // articleFive.img = articleFiveImg
    // articles.push(articleFive)

    console.log(articles)
    await browser.close()
    res.json(articles)
}

async function saveArticle(req, res) {
    console.log('waiting to save')
    console.log(req.body)
    console.log(req.user._id)
    let user = req.user._id
    Article.create(req.body, function(err, article) {
        article.userId = user
        article.save()
        res.status(200).json(true)
        if (err) {
            res.status(400).json(err)
        }
    })
}

async function getUserArticles(req, res) {
    console.log('hitting user articles get')
    let user = req.user._id
    console.log(user)
    Article.find({userId: user}, function (err, article) {
        console.log(article)
        res.status(200).json(article)
    })
}