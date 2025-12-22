// import React,{useEffect , useState} from 'react'

// test.jsx is not relatated of this project its just for local storage practice












// function Test() {
//     const [inputdata,setInputData] = useState(null);

//     useEffect(() =>{
//         const storedData = JSON.parse(localStorage.getItem('inputdata'));
//         if(storedData){
//             setInputData(storedData);
//         }
//     },[]);

//     const handleChange = (e) =>{
//         setInputData(e.target.value);
//         localStorage.setItem('inputdata', JSON.stringify(e.target.value));
//     };
//     return(
//         <>
//             <div>
//                 <label htmlFor='username'> username</label>
//                 <input
//                 type='text'
//                 id='username'
//                 name='username'
//                 value={inputdata || ''}
//                 onChange={handleChange}
//                 />
//             </div>
//         </>
//     )
// }    
// export default Test