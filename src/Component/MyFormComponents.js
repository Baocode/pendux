import React, { Component } from 'react';


export class MyNbJoueurSelect extends Component{
    render(){
        return (
            <div>
                <label> Nombre de joueur : </label>
                <select>
                    <option value='1'> 1 </option>
                    <option value='2'> 2 </option>
                    <option value='3'> 3 </option>
                    <option value='4'> 4 </option>
                    <option value='5'> 5 </option>
                    <option value='6'> 6 </option>
                </select>
            </div>
        )
    }
}

export class MyInput extends Component{
    render() {
        const {meta:{error, warn}, type, input} = this.props;
        let className = '';
        if (error) {
            className += "error"
        } else if (warn) {
            className += "warn"
        }
        return <div>
            <input type={type}
                   className={className}
                   {...input}/>
            {error && <label>{error}</label>}
        </div>
    }
}
