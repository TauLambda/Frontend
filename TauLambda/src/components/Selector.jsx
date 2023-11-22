import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Selector = () => {
const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
const displayValue = selectedIndex.row === 0 ? 'Particular' : 'Flotilla';

return (
<View style={{
flexDirection: "row",
paddingBottom: 0,
marginBottom: 25
}}>
<MaterialIcons
        name="groups"
        size={30}
        color={"#e8a042"}
        style={{ marginRight: 5 }}
/>
<Layout level='1' style={{
        flex: 1,
        paddingVertical: 0,
        borderRadius: 45,
        paddingLeft: 10,
}}>
        <Select
        placeholder='Default'
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        style={{
        width: 280,
        }}
        >
        <SelectItem title='Particular' />
        <SelectItem title='Flotilla' />
        </Select>
</Layout>
</View>
);
};

export default Selector;
