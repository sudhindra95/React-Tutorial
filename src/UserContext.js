import React, {createContext,useState} from "react";

export const UserContext=createContext();

export const UserProvider = ({ children }) => {
    const [name, setName] = useState("");
    // const [address, setAddress] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // alert('Name from user context : '+name)
    return (
      <UserContext.Provider 
        value={{
          name,
          setName
          }}
        >
        {children}
      </UserContext.Provider>
    );
  };