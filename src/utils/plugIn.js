let selection = figma.currentPage.selection
setTimeout(3000)

console.log(selection)
console.log('here')
// const template = figma.currentPage.findOne(n => n.name === "artist_name")
const serving_size = figma.currentPage.findOne(n => n.name === "serving_size")
const word_count = figma.currentPage.findOne(n => n.name === "word_count")

const first_word = figma.currentPage.findOne(n => n.name === "first_word")
const first_word_count = figma.currentPage.findOne(n => n.name === "first_word_count")
const first_word_percent = figma.currentPage.findOne(n => n.name === "first_word_percent")

const second_word = figma.currentPage.findOne(n => n.name === "second_word")
const second_word_count = figma.currentPage.findOne(n => n.name === "second_word_count")
const second_word_percent = figma.currentPage.findOne(n => n.name === "second_word_percent")

const third_word = figma.currentPage.findOne(n => n.name === "third_word")
const third_word_count = figma.currentPage.findOne(n => n.name === "third_word_count")
const third_word_percent = figma.currentPage.findOne(n => n.name === "third_word_percent")

const fourth_word = figma.currentPage.findOne(n => n.name === "fourth_word")
const fourth_word_count = figma.currentPage.findOne(n => n.name === "fourth_word_count")
const fourth_word_percent = figma.currentPage.findOne(n => n.name === "fourth_word_percent")

const fifth_word = figma.currentPage.findOne(n => n.name === "fifth_word")
const fifth_word_count = figma.currentPage.findOne(n => n.name === "fifth_word_count")
const fifth_word_percent = figma.currentPage.findOne(n => n.name === "fifth_word_percent")

const sixth_word = figma.currentPage.findOne(n => n.name === "sixth_word")
const sixth_word_count = figma.currentPage.findOne(n => n.name === "sixth_word_count")
const sixth_word_percent = figma.currentPage.findOne(n => n.name === "sixth_word_percent")

const seventh_word = figma.currentPage.findOne(n => n.name === "seventh_word")
const seventh_word_count = figma.currentPage.findOne(n => n.name === "seventh_word_count")
const seventh_word_percent = figma.currentPage.findOne(n => n.name === "seventh_word_percent")

const release_date = figma.currentPage.findOne(n => n.name === "release_date")
const lyrics = figma.currentPage.findOne(n => n.name === "lyrics")
// console.log(template.characters)
// template.characters = 'NEW HELLO'
// await figma.loadFontAsync(template.characters = 'asdf')

// const temp = async () => {
    
// }

let input = {
    artist_name: "by Kendrick Lamar",
    serving_size: "17 songs/51:02",
    word_count: "1327",

    first_word: "Boy",
    first_word_count: "64",
    first_word_percent: "5%",
    
    second_word: "Yippy",
    second_word_count: "48",
    second_word_percent: "4%",
    
    third_word: "Yay",
    third_word_count: "48",
    third_word_percent: "4%",
    
    fourth_word: "Gold",
    fourth_word_count: "33",
    fourth_word_percent: "2%",
    
    fifth_word: "Chain",
    fifth_word_count: "40",
    fifth_word_percent: "3%",
    
    sixth_word: "Bands",
    sixth_word_count: "32",
    sixth_word_percent: "2%",
    
    seventh_word: "N-word",
    seventh_word_count: "77",
    seventh_word_percent: "6%",

    release_date: "June 9, 2017",
    lyrics: "asdf"
}
async function phone() {
    console.log(11)
    let message = await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
    let message2 = await figma.loadFontAsync({ family: "Roboto", style: "Light" })
    let message3 = await figma.loadFontAsync({ family: "Roboto", style: "Black" })
    let message5 = await figma.loadFontAsync({ family: "Roboto", style: "Medium" })
    let message4 = await figma.loadFontAsync({ family: "Roboto", style: "Italic" })
    let message6 = await figma.loadFontAsync({ family: "Roboto", style: "Bold" })
    console.log(22)
    // console.log(template.characters)
    // console.log(message);
    // template.characters = input["artist_name"]
    console.log('asdf')
    serving_size.characters = input["serving_size"]
    word_count.characters = input["word_count"]

    first_word.characters = input["first_word"]
    first_word_count.characters = input["first_word_count"]
    first_word_percent.characters = input["first_word_percent"]

    second_word.characters = input["second_word"]
    second_word_count.characters = input["second_word_count"]
    second_word_percent.characters = input["second_word_percent"]

    third_word.characters = input["third_word"]
    third_word_count.characters = input["third_word_count"]
    third_word_percent.characters = input["third_word_percent"]

    fourth_word.characters = input["fourth_word"]
    fourth_word_count.characters = input["fourth_word_count"]
    fourth_word_percent.characters = input["fourth_word_percent"]

    fifth_word.characters = input["fifth_word"]
    fifth_word_count.characters = input["fifth_word_count"]
    fifth_word_percent.characters = input["fifth_word_percent"]

    sixth_word.characters = input["sixth_word"]
    sixth_word_count.characters = input["sixth_word_count"]
    sixth_word_percent.characters = input["sixth_word_percent"]

    seventh_word.characters = input["seventh_word"]
    seventh_word_count.characters = input["seventh_word_count"]
    seventh_word_percent.characters = input["seventh_word_percent"]

    release_date.characters = input["release_date"]
    lyrics.characters = input["lyrics"]
    console.log(3)
    // console.log(template.characters)
    figma.closePlugin()
//     artist_name
// serving_size (x songs/xminutes)
// word_count
}

phone()


//--------------------
// figma.loadFontAsync({ family: "Roboto", style: "Regular" }).then()

// let len = template.characters.length
// for (let i = 0; i < len; i++) {
//   await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
// }
//--------------------


// await new Promise(resolve => setTimeout(resolve, 5000));

