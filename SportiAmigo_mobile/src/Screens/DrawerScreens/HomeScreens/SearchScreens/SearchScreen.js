import React, { useState } from "react";
import {
  Layout,
  Input,
  Button,
  Text,
  Tab,
  TabBar,

} from "@ui-kitten/components";
import UsersTab from "./UsersTab";
import FacilityTab from "./FacilityTab";
import { View } from "react-native";

const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);


  // render a header with a search bar
 navigation.setOptions({
    headerTitle: () => (
      <Input
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={{
          width: "90%",
          backgroundColor: "white",
          borderRadius: 10,
          height: 40,
        }}
      />
    ),
  });    
  


  return (
    <Layout style={{ flex: 1,flexDirection:'column' ,  justifyContent:'start', alignContent:'center' , 
    padding:10,
    }}>
   
    

      {/* Tab bar for switching between user and facility search */}
      <TabBar
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      style={{marginTop:10}}
    >
      <Tab title='People' />
      <Tab title='Facilities' />
    </TabBar>

      <View style={{flexDirection:'column', justifyContent:'start', alignItems:'center', marginTop:10}}>

      {/* Show user search results */}
      {selectedIndex === 0 && <UsersTab query={searchText} />}
      {/* Show facility search results */}
      {selectedIndex === 1 && <FacilityTab query={searchText} />}
      </View>
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
