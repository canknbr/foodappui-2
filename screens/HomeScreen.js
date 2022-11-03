import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import categories from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import COLORS from '../assets/colors/color';
import {useNavigation} from '@react-navigation/native';
const width = Dimensions.get('screen').width;
import {homeStyles as styles} from './homeStyles';
const HomeScreen = () => {
  const navigation = useNavigation();
  const RenderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...styles.categoryItemWrapper,
          backgroundColor: item.selected ? COLORS.primary : COLORS.white,
        }}>
        <View>
          <Image source={item.image} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <View
            style={[
              styles.categorySelectWrapper,
              {
                backgroundColor: item.selected
                  ? COLORS.white
                  : COLORS.secondary,
              },
            ]}>
            <FeatherIcon
              name="chevron-right"
              size={15}
              color={item.selected ? COLORS.secondary : COLORS.white}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
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
      <SafeAreaView>
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
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryTitle}>Categories</Text>
          <View style={styles.categoryListWrapper}>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => <RenderCategoryItem item={item} />}
              contentContainerStyle={styles.categoryListContainer}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {popularData.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('DetailsScreen', {
                    item: item,
                  })
                }>
                <View
                  style={[
                    styles.popularCardWrapper,
                    {
                      marginTop: item.id == 1 ? 10 : 20,
                    },
                  ]}>
                  <View>
                    <View>
                      <View style={styles.popularTopWrapper}>
                        <MaterialCommunityIcons
                          name="crown"
                          size={12}
                          color={COLORS.primary}
                        />
                        <Text style={styles.popularTopText}>
                          top of the week
                        </Text>
                      </View>
                      <View style={styles.popularTitlesWrapper}>
                        <Text style={styles.popularTitlesTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.popularTitlesWeight}>
                          Weight {item.weight}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.popularCardBottom}>
                      <View style={styles.addPizzaButton}>
                        <FeatherIcon
                          name="plus"
                          size={10}
                          color={COLORS.textDark}
                        />
                      </View>
                      <View style={styles.ratingWrapper}>
                        <MaterialCommunityIcons
                          name="star"
                          size={10}
                          color={COLORS.textDark}
                        />
                        <Text style={styles.rating}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.popularCardRight}>
                    <Image
                      source={item.image}
                      style={styles.popularCardImage}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
