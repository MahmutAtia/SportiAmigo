// import React, { createContext, useContext, useState, useEffect } from 'react';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from '../axiosConfig';

// const UserContext = createContext();

// export const useUser = () => {
//   return useContext(UserContext);
// };

// const UserProvider = ({ children }) => {
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     // Check if user details exist in local storage
//     AsyncStorage.getItem('userDetails')
//       .then((storedUserDetails) => {
//         if (storedUserDetails) {
//           // User details found in local storage, use them
//           setUserDetails(JSON.parse(storedUserDetails));
//         } else {
//           // User details not found in local storage, fetch them from the API
//           axios.get('/api/userauth/profile')
//             .then((response) => {
//               setUserDetails(response.data);
//               // Save user details in local storage for future use
//               AsyncStorage.setItem('userDetails', JSON.stringify(response.data));
//             })
//             .catch((error) => {
//               console.error('Error fetching user details:', error);
//             });
//         }
//       })
//       .catch((error) => {
//         console.error('Error reading user details from local storage:', error);
//       });
//   }, []);

//   console.log('User details:', userDetails);

//   return (
//     <UserContext.Provider value={userDetails}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;
