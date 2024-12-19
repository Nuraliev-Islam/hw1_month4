import React from 'react';

export const BtnSub = (props) => {
    const {setNum} = props;
    const {num} = props;

    const SUB = () =>{
        if (num === 0) {
            alert('this is minimal')
        }else{
            setNum(num - 5)
        }
    }

    return (
        <div>
            <button onClick={SUB}>SUB</button>
        </div>
    );
}


