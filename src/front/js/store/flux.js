const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			isloged: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			signup_handlinator : (user) => {				
				fetch(process.env.BACKEND_URL + "/api/signup", {
					method : "POST",
					body: JSON.stringify(user),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => response.json())
				.then(result => alert(result.message))
				.catch(error => console.log('error', error));
			},
			login_handlinator : async (user) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/login", {
						method : "POST",
						body: JSON.stringify(user),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const result = await response.json()
					alert(result.message)
					if (result.message == "exito"){
						localStorage.setItem("jwt-token", result.access_token);
						console.log(result.access_token)
						setStore({isloged:true})
						return true
					} else {
						return false
					}

				}catch(error){
					console.log("Error loading message from backend", error)
				}		
				
			},
			logoutinator :() => {
				setStore({isloged:false})
				localStorage.clear();
			},

			setlog: (state) => {
				setStore({isloged:state})
			},

			isloged: () => {
				const token = localStorage.getItem('jwt-token');
  
				// Check if the token exists and is not expired
				if (token) {
				
				// Token is valid
				setStore({isloged:true})
				return true;
				}
				
				// Token doesn't exist
				setStore({isloged:false})
				localStorage.clear();
				return false;
			},
			private_showinator: async () => {
				
				if(getActions().isloged()){
					const token = localStorage.getItem('jwt-token');
					try {
						const response = await fetch(process.env.BACKEND_URL + "/api/private", {
							method: 'GET',
							headers: { 
							"Content-Type": "application/json",
							'Authorization': 'Bearer '+token // ⬅⬅⬅ authorization token
							} 
						})
						const result = await response.json()
						if (response.status == 200){
							return true
						} 
						if(response.status >= 400) {						
							throw Error('Uknon error');
							
						}
					} catch(error){
						console.log("not loged")						
						return false
					}					

				} else {
					return false
				}
				
			}	
			
			
		}
	};
};

export default getState;
