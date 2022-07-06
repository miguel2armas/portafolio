import { db } from '../../src/firebase/firebase';
interface DataToFirebase{
  name:string;
  time:number;
  failCount:number;
  create_at:string;
  typeGame: string | undefined
}
const GetCountTest = async ()=>{
    return new Promise((resolve) => {
      db.collection("countPage")
        .onSnapshot((res)=>{
            res.forEach((doc) =>{
              resolve({id:doc.id, value:doc.data().count})
            });
        });
  });
  }
const SetDataFirebaseTest = async (data:DataToFirebase)=>{
    return new Promise((resolve) => {
      db.collection('memoryHistory').doc().set(data).then((result)=>resolve(result));
  });
  }
describe('get data test', ()=>{
    test('get document id from firebase for count page', async()=>{
        const data = await GetCountTest() as { id:string; value:number };
        expect(data.id).toBe('8XAMrRtbWXn7K7wfRJTF');
    });
    test('set data memory game', async()=>{
        const data = {
            name:'miguel',
            time:9999,
            failCount:9999,
            create_at:'test jest',
            typeGame: 'test jest'
        }
        const dataResult = await SetDataFirebaseTest(data) as undefined;
        expect(typeof dataResult).toBe('undefined');
    });
});