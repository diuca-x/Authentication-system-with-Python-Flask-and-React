import React from "react";
import privateurl from "../../img/private.jpg"
import privatenourl from "../../img/privateno.jpg"
import { useParams } from "react-router-dom";

const Private = () => {

    const params = useParams();

    if(params.show == "yes"){
        return (
            <div className="text-center container mt-5">
                <div className="row justify-content-center">
                    
                    <div className=" col-8">
                        <img src={privateurl} className="img-fluid" alt="Responsive image"/>
                    </div>
                    
                </div>
            </div>
        );
    } else if (params.show == "no") {
        return (
            <div className="text-center container mt-5">
                <div className="row justify-content-center">
                    
                    <div className=" col-8">
                        <img src={privatenourl} className="img-fluid" alt="Responsive image"/>
                        <p>session timed out</p>
                    </div>
                    
                </div>
            </div>
        );
    }

    
}

export default Private