const studentDummy = 
    [
        {
            batch: "1", 
            firstName: "John", 
            id: 14, 
            lastName: "Ekelmans", 
            photo: "https://nbocdn.akamaized.net/Assets/Images_Upload/2016/10/03/0c44ae94-8987-11e6-99b2-0de49cc88331_original.jpg?maxheight=460&maxwidth=638&scale=both",
            evaluation: "red"
        }, 
        {
            batch: "1", 
            firstName: "Elze", 
            id: 18, 
            lastName: "Kuiper", 
            photo: "https://goo.gl/6jBNGQ",
            evaluation: "red"
        }, 
        {
            batch: "2", 
            firstName: "Eric", 
            id: 21, 
            lastName: "Cartman", 
            photo: "https://goo.gl/FAP8zX",
            evaluation: "red"
        }
    ]



export function getRandomStudent() {

let randomGrade 
let Color

randomGrade = Math.floor(Math.random())
    if (randomGrade <= 0.53) Color = "red" 
    else if (randomGrade > 0.53 && randomGrade < 0.81) color = "yellow"
    else color = "green"


}



