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
		
		if(go_to){
			navigate('/private/yes', { replace: true });
		} else {
			navigate('/private/no', { replace: true });
		}
	}

	if(store.isloged){
		return (
			<div className="text-center container mt-5">
				<button type="button" className="btn btn-primary my-auto mx-auto" onClick={ () =>{show()}}> See private info</button>
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
