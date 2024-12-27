```javascript
// bug.js
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `Item ${i}` }));

const MyFlatList = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
  />
);

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default MyFlatList;

```

```javascript
// bugSolution.js
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `Item ${i}` }));

const MyFlatList = () => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
  />
);

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default MyFlatList;
```