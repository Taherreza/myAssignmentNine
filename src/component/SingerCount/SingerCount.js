import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGuitar } from '@fortawesome/free-solid-svg-icons'


import "./SingerCount.css"

const SingerCount = (props) => {
    const { name, age, country, salary, img } = props.singer;
    const singerFont = <FontAwesomeIcon icon={faGuitar} />

    return (
        <div>

            <div className="">
                <div className="">
                    <img src={img} alt="" />
                    <h3>Name: {name}</h3>
                    <h3>Age : {age}</h3>
                    <h3>Country:  {country}</h3>
                    <h3>Sallary:  {salary}</h3>
                    <button onClick={() => props.salaryAdd(props.singer)} className='btn'>{singerFont}add salary</button>
                </div>


            </div>
        </div>
    );
};

export default SingerCount;