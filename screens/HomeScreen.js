import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import categories from '../assets/data/categoriesData';
import popular from '../assets/data/popularData';
import COLORS from '../assets/colors/color';
import {homeStyles as styles} from './homeStyles';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <FeatherIcon name="menu" size={24} />
          <Image
            style={styles.profileImage}
            source={require('../assets/images/profile.png')}
          />
        </View>
      </SafeAreaView>
      <View style={styles.titleWrapper}>
        <Text style={styles.subTitle}>Food</Text>
        <Text style={styles.title}>Delivery</Text>
      </View>
      <View style={styles.searchWrapper}>
        <FeatherIcon name="search" size={24} />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Food"
            selectionColor={COLORS.textDark}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
