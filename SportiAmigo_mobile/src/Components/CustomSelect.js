import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Select, SelectItem } from '@ui-kitten/components';

const CustomSelect = ({ label, data, selectedIndex, onSelectValue }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Select
        style={styles.select}
        selectedIndex={selectedIndex}
        onSelect={(index) => onSelectValue(index)}
        value={data[selectedIndex].name}
      >
        {data.map((item, index) => (
          <SelectItem key={index} title={item.name} />
        ))}

        
      </Select>
      </>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 8, // Adjust as needed
  },
  select: {
    flex: 1,
    margin: 2,
    width: '100%',
  },
});

export default CustomSelect;
