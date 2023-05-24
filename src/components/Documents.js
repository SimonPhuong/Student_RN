import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import {
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const w = Dimensions.get('screen').width;

const RecipePopular = ({onPress}) => {
  const renderItem = () => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <Image
          style={styles.image}
          source={require('../assets/icon/docs.png')}
        />
        <View style={styles.cardItem}>
          <Text style={styles.titleItem}>Documents</Text>
          <View style={styles.footerItem}>
            <Image source={require('../assets/icon/clock.png')} />
            <Text style={styles.footerItemText}>dd/mm/YYYY</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.ScrollView}>
        {[1, 2, 3].map((_) => renderItem())}
      </ScrollView>
    </View>
  );
};

export default RecipePopular;

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: '30%',
    resizeMode: "cover",
    flex: 2,
  },
  ScrollView: {
    paddingVertical: 5,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  titleItem: {
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
  },
  itemContainer: {
    backgroundColor: '#FFF',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 10,
    marginRight: 20,
    height: 180,
    width: 250,
    flex: 1,
  },
  footerItemText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
    fontWeight: '500',
  },

  viewAll: {
    color: '#888A82',
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerItem: {
    flexDirection: 'row',
    paddingVertical: 10, 
    alignItems: 'center'
  },
  cardItem: {
    padding: 10,
    flex: 1
  },

  buttonHeart: {
    padding: 10,
    backgroundColor: '#FFF',
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 100,
  },
});