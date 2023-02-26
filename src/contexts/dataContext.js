import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  
const [locationData, updateLocationData] = useState({formatted: "", county: "", lat: "", lon: "", country:"", state:""});
let [disasters, updateDisasters] = useState([]);

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
      value={{ locationData, updateLocationData, disasters, updateDisasters  }}
    >
      {children}
    </DataContext.Provider>
  );
};
