import React, { Component, useState } from 'react';
import {ModelPopup} from './popups/modelPopup';

// import { DateRangePicker } from 'react-date-range';

// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file

function Test() {
  const [openModal,setOpenModal] = useState(false)

  return(
    <><div>
      <button onClick={() => setOpenModal(true)}>Modaool</button>
      <ModelPopup open={openModal} onClose={()=> setOpenModal(true)}/>
    </div></>
  )
}
export default Test;

// class Test extends Component {
//     state = {  } 

//     handleSelect(ranges){
//         console.log(ranges);
//         // {
//         //   selection: {
//         //     startDate: [native Date Object],
//         //     endDate: [native Date Object],
//         //   }
//         // }
//       }
      
//     render(){
//         const selectionRange = {
//           startDate: new Date(),
//           endDate: new Date(),
//           key: 'selection',
//         }
//         return (
//           <DateRangePicker
//             ranges={[selectionRange]}
//             onChange={this.handleSelect}
//           />
//         )
//       }
// }
 
// export default Test;