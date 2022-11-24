import React, { Component, useState } from 'react';
import AddTransaction from '../popups/addTransaction';
import AddTransactionCopy from './addTransactionCopy';

// class ModelPopup extends Component {
//     constructor(){
//         super();
//         this.state = {
//             open: false,
//             onClose: false
//         }
//     }
    
//     render(){
//         if (!this.open) {
//             return (
//                 <div onClick={this.onClose}>
//                     <AddTransaction/>
//                 </div>
//             )
//         }
//     }
// }
// export default ModelPopup;


export const ModelPopup = ({ open,onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose}>
            {/* <AddTransaction/> */}
            <AddTransactionCopy/>
        </div>
    )
}
// export default ModelPopup;