import React from 'react';
import { SafeAreaView, SectionList, FlatList, View, Text, Dimensions, SectionListData, ListRenderItem } from 'react-native';

// Sample data
const customData: CustomListItem[] = [
  { id: '1', name: 'Rate List', size: 25 },
  { id: '3', name: 'Grocery List', size: 15 },
  { id: '5', name: 'Electronics List', size: 40 },
  { id: '32', name: 'Electronics List', size: 40 },
  { id: '12', name: 'Electronics List', size: 40 },
  { id: '23', name: 'Electronics List', size: 40 },
  { id: '45', name: 'Electronics List', size: 40 },
];

const companyData: CompanyListItem[] = [
  { id: '2', name: 'ABC Corp', size: 50 },
  { id: '4', name: 'XYZ Inc', size: 30 },
  { id: '6', name: 'DEF Ltd', size: 20 },
];



const sections: SectionData[] = [
  { id: 1, title: 'Custom Lists', data: customData },
  { id: 2, title: 'Company Lists', data: companyData },
  { id: 3, title: 'Company', data: companyData },
  { id: 4, title: 'Company', data: companyData },
];


const data = {

}

const InnerFlatList = ({ sectionData }: { sectionData: SectionData }) => {
  const numColumns = 2; // Adjust as needed
  const { width } = Dimensions.get('window');
  const itemWidth = width / numColumns - 20; // Account for margins

  const renderItem = ({ item }: any) => (
    <View className='flex-1'>
      <Text className='text-white text-lg'>{item.name}</Text>
      <Text style={styles.size}>Size: {item.size}</Text>
    </View>
  );

  return (
    <FlatList
      data={sectionData.data} // Use data from sectionData
      renderItem={renderItem}
      columnWrapperStyle={{
        gap: 10,   
      }}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.listContainer} // Optional for custom styling
    />
  );
};

const Home = () => {
  const numColumns = 2;

  const { width } = Dimensions.get('window');
  const itemWidth = width / numColumns - 20; // Account for margins

  const renderItemSection = ({ item: section }: any) => (
    <View >
      <Text className='bg-secondary text-xl p-2'>{section.title}</Text>
      <InnerFlatList sectionData={section} />
    </View>
  );

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={sections}
        renderItem={renderItemSection}
        keyExtractor={(item) => item.id.toString()} // Ensures unique section keys
        contentContainerStyle={{ paddingTop: 25 }}
      />
    </SafeAreaView>
  );
};

// Type definitions
export type CustomListItem = {
  id: string;
  name: string;
  size: number;
};

export type CompanyListItem = {
  id: string;
  name: string;
  size: number;
};

export type ListItem = CustomListItem | CompanyListItem;

export type SectionData = {
  id: number;
  title: string;
  data: ListItem[];
};

// Styles
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  size: {
    fontSize: 14,
    color: 'gray',
  },
  header: {
    padding: 10,
    backgroundColor: '#6200EE',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  listContainer: {
    // paddingBottom: 20,
  },
};

export default Home;
