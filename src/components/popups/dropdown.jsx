import React, { Component, useState } from 'react';
import {methods, categories} from '../data';
import './dropdownCSS.css';
// import DropdownCSS from './dropdownCSS'

class Dropdown extends Component {
    state = { 
        isActive: false,
        setIsActive: false,
     } 
     constructor(props) {
        super(props);
        this.selected = props.selected;
        this.setSelected = props.setSelected;
        this.dropdownLabel = props.dropdownLabel;
     }
     clickDropdown(setIsActive){
        this.isActive = setIsActive;
        console.log(this.isActive);
     }
    //  CSS Start
     dropdown={
        // width: '200px',
        // maxWith: '100px',

        userSelect: 'none',
        // margin: '100px auto',
        position: 'relative',
        // borderRadius: '10px'
    }
    dropdownBtn={
        padding: '8px',
        background: '#dbdada',
        // boxShadow: '3px 3px 10px 6px #6e6b6b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius:5
    }
    dropdownContent={
        position: 'absolute',
        top: '40px',
        padding: '5px',
        background: '#91a7cf',
        color: '#061426',
        width: '95%',
        borderRadius:5
    }
    dropdownItem={
        width: '100%',
        padding:5,
        cursor: 'pointer',
        transition: 'all 0.2s'
    }
    //  CSS End

    render() { 
        return (
            <div style={this.dropdown} className='dropdown dropdownCSS'>
                <div style={this.dropdownBtn} className='dropdown-btn dropdownCSS'
                 onClick={(e) => this.clickDropdown(!this.isActive)}
                >
                    {this.props.dropdownLabel}
                    <button className='fas fa-caret-down'></button>
                </div>

                {this.isActive && (
                    <div style={this.dropdownContent}>
                        {categories.map((category) => (
                            <div style={this.dropdownItem} className='dropdown-item'
                            onClick={(e)=>{
                                this.setSelected={category}
                                this.setIsSelected=true
                            }}
                            >{category.label}</div>
                        ))}
                    </div>
                )}

            </div>
        );
    }
}
 
export default Dropdown;