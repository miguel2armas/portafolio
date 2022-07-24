import { excludedWords } from "./const";

export const randomArray = (array:any[]) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export const checkWords = (text:string) => {
    var rgx = new RegExp(excludedWords.join("|")+"|" + "/gi");
    return (rgx.test(text));
  }