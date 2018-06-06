// import React from 'react';
// import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

// export default class TripRow extends React.Component {
//     render() {
//         const { navigate } = this.props.nav;
//         const { touchStyle, textStyle } = styles;
//         return (
//             <View>
//                 <TouchableHighlight style={touchStyle}
//                     onPress={() => navigate('PackingList')}>
//                         <Text style={textStyle}>{this.props.trip}</Text>
//                  </TouchableHighlight>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     touchStyle: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         borderWidth: 1,
//         borderColor: '#919190',
//         padding: 20,
//         marginTop: 20,
//         marginRight: 20,
//         marginLeft: 20
//     },
//     textStyle: {
//         fontSize: 20,
//         fontWeight: '300'
//     }
// })