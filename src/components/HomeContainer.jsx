import React from 'react';
import Carousel from "react-elastic-carousel";
import { data } from "../DataJsonFile";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1,
        itemsToScroll: 1,
        pagination: true,
        showArrows: false,
    },
    {
        width: 550,
        itemsToShow: 2,
        itemsToScroll: 2,
        showArrows: false,
        pagination: false,
    },
    { width: 768, itemsToShow: 3, pagination: false },
];

const HomeContainer = () => {
    return (
        <div className='container-fluid wrapit'>
            <div className="row">
                <div className="col-sm-12">
                    <Carousel
                        itemsToScroll={3}
                        breakPoints={breakPoints}
                        infiniteLoop={false}
                    >
                        {
                            data.map((item) => (
                                <>
                                    <div key={item.id} 
                                        className="d-flex justify-content-center align-items-center flex-column" 
                                        style={{width: "100%", height: "100vh"}}>
                                        <div className='row'>
                                            <div className="col-sm-12">
                                                <div className='card'>
                                                    <div className='card-body'>
                                                        <p>{item.bodyType.toUpperCase()}</p>
                                                        <div className='d-flex'>
                                                            <h5 className='card-title'>{item.modelName}</h5>
                                                            <span className='ms-1'>{item.modelType}</span>
                                                        </div>
                                                    </div>
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={item.id}
                                                        width="380px"
                                                        height="100%"
                                                    />
                                                    <div className='d-flex p-3 justify-content-evenly align-items-center fs-6 fw-bold text-primary'>
                                                        <p className='d-flex align-items-center'>
                                                            <NavLink to={`/learn/${item.id}`} className="text-decoration-none">LEARN</NavLink>
                                                            <AiOutlineRight style={{cursor: "pointer"}} />
                                                        </p>
                                                        <p className='d-flex align-items-center'>
                                                            <a
                                                                href="https://www.volvocars.com/in/v/cars/other-powertrains"
                                                                target="_blank"
                                                                className="text-decoration-none"
                                                            >
                                                                SHOP
                                                            </a>
                                                            <AiOutlineRight style={{cursor: "pointer"}} />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer;