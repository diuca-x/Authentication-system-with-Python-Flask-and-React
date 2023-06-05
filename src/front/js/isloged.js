import jwt_decode from 'jwt-decode';

export const isLogged = () => {
    const token = localStorage.getItem('jwt-token');
  
    // Check if the token exists and is not expired
    if (token) {
      // Decode the token to get its payload
      const decodedToken = jwt_decode(token);
      
      // Get the current time in seconds
      const currentTime = Date.now() / 1000;
      
      // Check if the token has expired
      if (decodedToken.exp < currentTime) {
        // Token has expired
        return false;
      }
      
      // Token is valid
      return true;
    }
  
    // Token doesn't exist
    return false;
  };