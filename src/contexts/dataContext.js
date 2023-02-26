import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  
const [locationData, updateLocationData] = useState({county: "", lat: "", lon: "", country:"", state:""});


//   const allowCheckIn = async () => {
//     if (!app.currentUser) return false;
//     try {
//       await app.currentUser.logOut();
//       // Setting the user to null once loggedOut.
//       setUser(null);
//       return true;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const  Checkout= async () => {
//     if (!app.currentUser) return false;
//     try {
//       await app.currentUser.logOut();
//       // Setting the user to null once loggedOut.
//       setUser(null);
//       return true;
//     } catch (error) {
//       throw error;
//     }
//   };

  return (
    <DataContext.Provider
      value={{ locationData, updateLocationData,  }}
    >
      {children}
    </DataContext.Provider>
  );
};
