import React, { useEffect, useState } from 'react';
import Autocomplete from 'react-native-autocomplete-input';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input,Text,List, Layout, useTheme } from '@ui-kitten/components';
  

// Function to filter countries based on the search query
const filterData = (data, query) => {
    const normalizedQuery = query.toLowerCase();
    return data.filter((ele) =>
    ele.name.toLowerCase().includes(normalizedQuery)
    );
  };



function CustomAutocomplete({data,onSelect,disabled, style, placeholder}) {
    console.log(disabled,"disabled")
    console.log(data.length,"data")


    const theme = useTheme()

  const [query, setQuery] = useState('');
  const isLoading = !data.length;
  const queriedData= React.useMemo(
    () => filterData(data, query),
    [data, query]
  );

  const suggestions = React.useMemo(
    () =>
    queriedData.length === 1 && queriedData[0].name.toLowerCase() === query.toLowerCase()
        ? []
        : queriedData,
    [queriedData, query]
  );




// 
  const handleSelect = (item) => {
    setQuery(item.name);
    onSelect(item);
  };

  return (
        <Layout style={{flexDirection:"row"}}>
        <Autocomplete

        renderResultList={(props) => {
            return (<List {...props} />)    
        }}

        listStyle = {{
            borderWidth: 0,
            borderColor: '#fff',
        }}
        

      
        listContainerStyle	= {{
        borderWidth: 0,
        borderColor: '#fff',
        flexDirection: 'row',

        }}

        inputContainerStyle    = {{
        borderWidth: 0,
        borderColor: '#fff',

        }}
       
      
          renderTextInput={(props) => (
            <Input {...props} disabled={disabled} style={style}/>
            )}

          autoCapitalize="none"
          autoCorrect={false}
          data={suggestions}
          value={query}
          onChangeText={setQuery}
          placeholder={placeholder}
          flatListProps={{
            renderResultList: (props) => (
              <List {...props} />
            ),
            height: 150,
            keyboardShouldPersistTaps: 'handled',
            keyExtractor: (ele) =>  ele.id,
            renderItem: ({ item }) => (
              <TouchableOpacity style={styles.suggestionItem} onPress={() => handleSelect(item)}>
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            ),
            style: {
                borderWidth: 0,
                borderColor: '#fff',
                backgroundColor:theme['background-basic-color-1'],


            }
          }}
    
        />
        </Layout>
  );
}

const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'white', // Set your background color
      paddingTop: Platform.OS === 'android' ? 50 : 0,
      marginTop: Platform.OS === 'android' ? 25 : 0,
      flexDirection: 'row',
    },
    autocomplete: {
      // backgroundColor: 'white', // Set background color for the autocomplete component
      borderBottomColor: '#000000', // Add bottom border color
      borderBottomWidth: 1, // Add a bottom border
      paddingVertical: 8, // Add vertical padding
    },
    autocompleteContainer: {
      flex: 1,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1,
    },
    suggestionItem: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#eeeeee',
    },
    suggestionText: {
      // color: '#000000', // Set text color
    },
    placeholderText: {
      // color: '#999999', // Set placeholder text color
    },
    loadingText: {
      textAlign: 'center', // Center loading text
    },
  });

export default CustomAutocomplete;
