import React from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS } from '../colors/colors';

const mockData = new Array(12).fill(null).map((_, index) => ({
  id: index.toString(),
  name: 'Name Here',
  category: '[Art/Fitness]',
}));

const BrowseOrgs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>{'←'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
        )}
      />

      <View style={styles.bottomNav}>
        {['🏠', '🔗', '➕', '📅', '👤'].map((icon, index) => (
          <TouchableOpacity key={index}>
            <Text style={styles.navIcon}>{icon}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default BrowseOrgs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mintCream,
  },
  header: {
    height: 80,
    backgroundColor: COLORS.teal,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backArrow: {
    fontSize: 28,
    color: 'white',
  },
  list: {
    padding: 10,
    paddingBottom: 80,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: COLORS.whiteSmoke,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 6,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  category: {
    color: 'gray',
    textAlign: 'center',
  },
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  navIcon: {
    fontSize: 24,
  },
});
