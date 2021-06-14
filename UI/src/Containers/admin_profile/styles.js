import {StyleSheet} from 'react-native';
import Metrics from '../../Themes/Metrics';
import {widthPercentageToDP} from '../../Themes/PercentageToDPConverter';

export default StyleSheet.create({
  screen: {
    minHeight: Metrics.screenHeight,
    paddingVertical: Metrics.paddingLarge,
    paddingHorizontal: Metrics.paddingSmall,
    paddingBottom: Metrics.paddingLarge * 2,
    display: 'flex',
  },
  title: {
    fontSize: Metrics.h1,
    marginBottom: Metrics.marginMedium,
  },
  imageView: {
    alignSelf: 'center',
    height: widthPercentageToDP('50%'),
    width: widthPercentageToDP('50%'),
  },
  image: {
    alignSelf: 'center',
    height: widthPercentageToDP('50%'),
    width: widthPercentageToDP('50%'),
    borderWidth: 3,
    borderRadius: 100,
    marginBottom: Metrics.marginSmall,
  },
  edit: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    borderRadius: 100,
    height: Metrics.h2,
    width: Metrics.h2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLoading: {
    position: 'absolute',
    height: widthPercentageToDP('50%'),
    width: widthPercentageToDP('50%'),
    justifyContent: 'center',
    borderRadius: 100,
  },
  name: {
    fontSize: Metrics.h2,
    textAlign: 'center',
    marginBottom: Metrics.marginMedium,
  },
  card: {
    marginTop : Metrics.marginSmall,
    padding: Metrics.paddingExtraSmall,
    backgroundColor : 'white',
    shadowRadius : 10,
    shadowColor :'black',
    shadowOpacity : 10,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: Metrics.h3 * 1.2,
    marginLeft: Metrics.marginSmall,
  },
});