// use string argument to create and append <p> tag to the story output article element 
let storyDisplay = document.querySelector(`#storyDisplay`)
console.log(storyDisplay)

let appendParagraph = function (stringtoAppendToArticle) {
let paragraph = document.createElement(`p`)
paragraph.append(stringtoAppendToArticle)
storyDisplay.append(paragraph)
}

appendParagraph(pages[0])

