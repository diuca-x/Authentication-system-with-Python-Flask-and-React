import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import mypageUrl from "../../img/mypage.png"
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";



export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	
	const show = async () =>{
		let go_to = await actions.private_showinator()
		console.log(go_to)
		return go_to
	}

	if(store.isloged){
		return (
			<div className="text-center container mt-5">
				<button type="button" className="btn btn-primary my-auto mx-auto" onClick={ () =>{					
					let go_to = show()
					
					if(go_to){
						console.log("AAAAAno pasas1")
						navigate('/private', { replace: true });
					} else {
						console.log("AAAAAno pasas2")
					}
					}}> See private info</button>
			</div>
		);
	} else {
		return (
			<div className="text-center container mt-5">
				<div className="row justify-content-center">
					<div className=" col-8">
					<img src={mypageUrl} className="img-fluid" alt="Responsive image"/>
					</div>
				</div>
			</div>
		);
	}
};
