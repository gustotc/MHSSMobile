const React = require('react-native');
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    padding: 10,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop:
      Platform.OS === 'android' ? deviceHeight / 6 : deviceHeight / 6 + 10,
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: deviceHeight / 8 - 10,
  },
  signupBtn: {
    height: 50,
    marginTop: 10,
  },
  linkBtn: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
};
