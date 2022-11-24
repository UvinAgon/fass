import React, { Component, useState } from 'react';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { categories , types } from '../data'

// export class CommonDropdown extends Component {
//         // const [dropdown] = useState(0);
//         // return <DropdownMultiselect options={dropdown} name={dropdown}/>;
//     state = {
//         dropdown: 'types'
//     }
//     render(props) { 
//         if(props.dropdown==='categories') return <DropdownMultiselect options={categories} name='Categories'/>;
//         if(props.dropdown==='types') return <DropdownMultiselect options={types} name='Types'/>;
//     }
// }

// export class MultiSelectDropdown extends Component {
//     state = { 
//         dropdown: "",
//         dropdownName: ""
//      } 
//     render(props) { 
//         if(props.dropdown==='categories') return <DropdownMultiselect options={categories} name='Categories'/>;
//         if(props.dropdown==='types') return <DropdownMultiselect options={types} name='Types'/>;
//     }
// }

export class TypeDropdown extends Component {
    render() { 
        return <DropdownMultiselect options={types} name='Types'/>;
    }
}
export class CategoryDropdown extends Component {
    render() { 
        return <DropdownMultiselect options={categories} name='Categories'/>;
    }
}

// export default MultiSelectDropdown;