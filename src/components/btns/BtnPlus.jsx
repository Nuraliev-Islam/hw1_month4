import React from 'react';

export const BtnPlus = (props) => {
    const {setNum} = props;
    const {num} = props;

    const plus = () =>{
        if (num == 15) {
            alert('this is max')
        }else{
            setNum(num + 5)
        }
    }

    return (
        <div>
            <button onClick={plus}>PLUS</button>
        </div>
    );
}

