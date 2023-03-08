import und1 from '../assets/und1.png'
import und2 from '../assets/und2.png'
import und3 from '../assets/und3.png'
import und4 from '../assets/und4.png'
import undBlack from '../assets/undBlack.png'
import undWhite from '../assets/undWhite.png'
import undMusculosa from '../assets/undMusculosa.png'
import und2023 from '../assets/und2023.png'


  const  productos = [
{
    id:0,
    img:und1,
    title: 'Trap$tar R',
    price:'$29.000',
    category: 'Buzos'
},
{
    id:1,
    img:und2,
    title: 'Trap$tar F',
    price:'$29.000',
    category: 'Buzos'
},
{
    id:2,
    img:und3,
    title: 'Trap$tar P',
    price:'$29.000',
    category: 'Buzos'
},
{
    id:3,
    img:und4,
    title: 'Trap$tar Z',
    price:'$29.000',
    category: 'Buzos'
},
{
    id:4,
    img:undWhite,
    title: 'Snake',
    price:'$9.000',
    category: 'Remeras'
},
{
    id:5,
    img:undMusculosa,
    title: 'Mirror Snake',
    price:'$8.000',
    category: 'Remeras'
},
{
    id:6,
    img:und2023,
    title: 'Remera Mirror',
    price:'$8.000',
    category: 'Remeras'
},
{
    id:7,
    img:undBlack,
    title: 'Dragon Chain',
    price:'$9.000',
    category: 'Remeras'
}

]


export const prod= new Promise((resolve,rejected) =>{
let url= 'undefined.com'
if (url==='undefined.com'){
    setTimeout(()=>{
        resolve(productos);
    },3000);
}else{
    rejected('Error')
}
})