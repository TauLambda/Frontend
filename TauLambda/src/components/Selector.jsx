import React, { useState } from 'react';
import { View } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Selector = ({ onSelect }) => {
const [selectedIndex, setSelectedIndex] = useState(new IndexPath(null)); // Set initial state to null

const handleSelect = (index) => {
    setSelectedIndex(index);
    const selectedValue = index.row === 0 ? 'Particular' : 'Flotilla';
    onSelect(selectedValue);
};

return (
    <View style={{ flexDirection: 'row', paddingBottom: 0, marginBottom: 25 }}>
    <MaterialIcons name="groups" size={30} color={'#e8a042'} style={{ marginRight: 5 }} />
    <Layout level="1" style={{ flex: 1, paddingVertical: 0, borderRadius: 45, paddingLeft: 10 }}>
        <Select
        placeholder="Seleccione tipo de usuario"
        value={selectedIndex.row !== null ? (selectedIndex.row === 0 ? 'Particular' : 'Flotilla') : null} // Set value to null if nothing is selected
        selectedIndex={selectedIndex}
        onSelect={(index) => handleSelect(index)}
        style={{ width: 280 }}
        >
        <SelectItem title="Particular" />
        <SelectItem title="Flotilla" />
        </Select>
    </Layout>
    </View>
);
};

export default Selector;
