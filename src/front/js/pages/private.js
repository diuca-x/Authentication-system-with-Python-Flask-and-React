import React from "react";
import privateurl from "../../img/private.jpg"

const Private = () => {
    return (
        <div className="text-center container mt-5">
            <div className="row justify-content-center">
                <div className=" col-8">
                    <img src={privateurl} className="img-fluid" alt="Responsive image"/>
				</div>
                
            </div>
        </div>
    );
}

export default Private