import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const Last10URLs = () => {
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    chrome.history.search({ text: '', maxResults: 10 }, function(results) {
      setHistoryItems(results);
    });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Last 10 URLs in your browsing history:
      </Text>
      <FlatList
        data={historyItems}
        renderItem={({ item }) => (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>URL:</Text>
            <Text>{item.url}</Text>
            <Text style={{ fontWeight: 'bold' }}>Title:</Text>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Last10URLs;