import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../assets/colors/color';
const width = Dimensions.get('screen').width;

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.textDark,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: COLORS.textLight,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  searchInput: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.textDark,
  },
  categoryWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.textDark,
  },
  categoryListWrapper: {
    marginTop: 15,
  },
  categoryListContainer: {
    paddingVertical: 15,
  },
  categoryItemWrapper: {
    alignItems: 'center',
    width: width * 0.29,
    marginRight: 10,
    height: 200,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 10,
    shadowOpacity: 0.2,
    paddingTop: 15,
  },
  activeCategoryItemWrapper: {
    backgroundColor: COLORS.primary,
  },
  categoryItemImage: {
    height: 50,
  },
  categoryItemTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.textDark,
    marginTop: 25,
  },
  categorySelectWrapper: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15,
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: COLORS.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: COLORS.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
