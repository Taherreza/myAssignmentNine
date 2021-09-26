import React, { useEffect, useState } from 'react';
import SalaryCount from '../SalaryCount/SalaryCount';
import SingerCount from '../SingerCount/SingerCount';

import './Singers.css'

const Singers = () => {
    const [singers, setSingers] = useState([])
    const [salary, setSalary] = useState([])
    useEffect(() => {
        fetch('./singerData.json')
            .then(res => res.json())
            .then(data => setSingers(data))

    }, [])

    const salaryAdd = (singer) => {
        const newSalaryAdd = [...salary, singer]
        setSalary(newSalaryAdd)
    }

    return (
        <div className='all-singer'>
            <div className='singer '>
                <div className="singer-one">
                    {
                        singers.map(singer => <SingerCount
                            key={singer.key}
                            singer={singer}
                            salaryAdd={salaryAdd}

                        ></SingerCount>)
                    }
                </div>


            </div>


            <div>
                <SalaryCount salary={salary}></SalaryCount>
            </div>
        </div>





    );
};

export default Singers;