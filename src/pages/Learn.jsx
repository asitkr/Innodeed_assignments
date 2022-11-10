import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const Learn = ({ data }) => {

    const { id } =  useParams();

    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: "100vh", width: "100%"}}>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className='card'>
                            {
                                data.map((item) => {
                                    if(id === item.id) {
                                        return (
                                            <div key={item.id}>
                                                <div className='card-body'>
                                                    <p className='text-center fs-3'>{item.bodyType.toUpperCase()}</p>
                                                    <div className='d-flex justify-content-evenly'>
                                                        <h5 className='card-title'>{item.modelName}</h5>
                                                        <span className='ms-1'>{item.modelType}</span>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-center align-items-center mb-4'>
                                                    <img
                                                        
                                                        src={item.imageUrl}
                                                        alt={item.id}
                                                        width="500px"
                                                        height="100%"
                                                    />
                                                </div>
                                                <div className='d-flex align-items-center fs-6 fw-bold text-primary mt-2 mb-3 ms-5'>
                                                    <AiOutlineLeft style={{cursor: "pointer"}} />
                                                    <NavLink to={"/"} className="text-decoration-none">BACK</NavLink>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Learn;