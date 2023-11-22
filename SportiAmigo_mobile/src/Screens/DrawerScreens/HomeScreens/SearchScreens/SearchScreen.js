import React, { useState } from "react";
import {
  Layout,
  Input,
  Button,
  Text,

} from "@ui-kitten/components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UsersTab from "./UsersTab";
import FacilityTab from "./FacilityTab";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  

  const Tab = createMaterialTopTabNavigator();

  return (
    <Layout style={{ flex: 1,flexDirection:'column' ,  justifyContent:'center', alignContent:'center' , 
    padding:10,
    }}>
      <Input
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
    

      {/* Tab bar for switching between user and facility search */}
      <Tab.Navigator>
        <Tab.Screen
          name="People"
          component={ () => <UsersTab query={searchText} /> }
        />
        <Tab.Screen
          name="Facilities"
          component={ () => <FacilityTab query={searchText} /> }
        />
      </Tab.Navigator>
    </Layout>
  );
};

export default SearchScreen;

// {/* <TabView
//         selectedIndex={selectedIndex}
//         onSelect={(index) => setSelectedIndex(index)}
//       >
//         <Tab title="People">
//           {/* Show user search results */}
//           <UserStatus users={users} setUsers={setUsers} />
//         </Tab>
//         <Tab title="Facilities">
//           <Layout>
//             {facilities.map((facility) => {
//               return <FacilityCardBig facility={facility} key={facility.id} />;
//             })}
//           </Layout>
//         </Tab>
//       </TabView> */}
