import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

// @ts-ignore
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  image: {
    width: 170,
    height: 190
  },
  signinContainer: {
    width: 170,
    height: 200,
    paddingTop: 30
  },
  signin: {
    backgroundColor: '#12A19B',
    width: 270
  }
})
