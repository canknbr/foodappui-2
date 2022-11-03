import {StyleSheet} from 'react-native';
import COLORS from '../assets/colors/color';

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
});
