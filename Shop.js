import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetDetails from './GetDetails';
import { BsCurrencyDollar } from "react-icons/bs";

function ShowPerfume() {

    const perfumes = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (

        <div>

            <div className="grid-container">
                
                {Object.values(perfumes).map((value) => (
                    <>

                        <div value={value.id} className="card" style={{ width: "300px"}}>
                            <img className="card-img-top" src={value.image} alt="Card image cap" ></img>
                            <div className="card-body">
                                <h5 className="card-title">{value.name}</h5>
                                <p className="card-text">{value.price}<BsCurrencyDollar/></p>
                                <a href="#" ><GetDetails product={value}></GetDetails></a>
                                
                            </div>
                        </div>


                    </>

                ))};

            </div>


        </div>
    )

};
export default ShowPerfume;