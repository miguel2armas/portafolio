import Img1 from "../../assets/img/1.webp";
import Img2 from "../../assets/img/2.webp";
import Img3 from "../../assets/img/3.webp";
import Img4 from "../../assets/img/4.webp";
import Img5 from "../../assets/img/5.webp";
import Img6 from "../../assets/img/6.webp";
import Img7 from "../../assets/img/7.webp";
import Img8 from "../../assets/img/8.webp";
import Img9 from "../../assets/img/9.webp";

export const setDataImg = ()=>{
    let data = []
    for(let i=1; i<10; i++){
        let imgselect = Img1;
        i===1? imgselect = Img1:
            i===2? imgselect = Img2:
                i===3? imgselect = Img3:
                    i===4? imgselect = Img4:
                        i===5? imgselect = Img5:
                            i===6? imgselect = Img6:
                                i===7? imgselect = Img7:
                                    i===8? imgselect = Img8:
                                        imgselect = Img9;
        let data1 ={
            "id": `${i}`,
            "img": imgselect,
            "check" : false,
            "countfail":0,
            "countcorrect":0
        }
        data.push(data1);
    }
    return data;
}