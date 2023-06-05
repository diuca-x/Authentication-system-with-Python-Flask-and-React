const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			signup_handlinator(user){				
				fetch("https://diuca-x-shiny-broccoli-444x6wg79w6f7wr6-3001.preview.app.github.dev/api/signup", {
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
			login_handlinator(user){
				
				fetch("https://diuca-x-shiny-broccoli-444x6wg79w6f7wr6-3001.preview.app.github.dev/api/login", {
					method : "POST",
					body: JSON.stringify(user),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => response.json())
				.then(result => {
					localStorage.setItem("jwt-token", result.access_token);
					alert(result.message)
				})
				.catch(error => console.log('error', error));
			},
			logoutinator(){
				localStorage.clear();
			},
			


		}
	};
};

export default getState;
