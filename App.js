import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MessagesScreen from './screens/MessagesScreen';
import RegisterScreen from './screens/RegisterScreen';
import SaveScreen from './screens/SaveScreen';
import UsersScreen from './screens/UsersScreen';
import CreateEventScreen from './screens/CreateEventScreen';
import { ImagePicker, Location, Permissions, MapView } from 'expo';
const domain = "https://something-horizons.herokuapp.com";
//const domain = "https://hohoho-backend.herokuapp.com"; // Old Server

//Navigator
export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Users: {
    screen: UsersScreen,
  },
  Messages: {
    screen: MessagesScreen,
  },
  Save: {
    screen: SaveScreen,
  },
  Create: {
    screen: CreateEventScreen,
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'screen'
});






//Screens
// class LoginScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: null
//     }
//   };
//   static navigationOptions = {
//     title: 'Login'
//   };
//   press() {
//     this.props.navigation.navigate('RealLogin');
//   }
//   register() {
//     this.props.navigation.navigate('Register');
//   }
//   postFb() {
//     console.log('hhhhhhhh');
//     return fetch('https://fb/login')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       if (responseJson.success === true) {
//         console.log('ds', ds)
//
//       } else {
//         alert('invalid')
//       }
//       console.log(responseJson)
//     })
//     .catch((err) => {
//       console.log('it errored')
//     });
//   }
//   _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//     });
//
//     console.log('IMAGE PICKED', result);
//
//     if (!result.cancelled) {
//       console.log('did it get here')
//       console.log('result inside here', result)
//       console.log('THIS.STATE.IMAGE', this.state.image)
//       this.setState({image: result.uri})
//       console.log('THIS.STATE.IMAGE2', this.state.image)
//     }
//   };
//   componentDidMount() {
//     AsyncStorage.getItem('user')
//     .then((result) => {
//       console.log(result);
//       if(result) {
//         this.props.navigation.navigate('Users')
//       } else {
//         console.log('no user loser');
//       }
//     })
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.textBig}>Login to HoHoHo!</Text>
//         <TouchableOpacity onPress={ () => {this.press()} } style={[styles.button, styles.buttonGreen]}>
//           <Text style={styles.buttonLabel}>Tap to Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
//           <Text style={styles.buttonLabel}>Tap to Register</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.postFb()} }>
//           <Text style={styles.buttonLabel}>Register With Facebook</Text>
//         </TouchableOpacity>
//         <Button
//           title="Pick an image from camera roll"
//           onPress={ () => {this._pickImage()} }
//         />
//         { console.log('CONSOLE IN RENDER', this.state.image) }
//         {this.state.image &&
//           <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
//         </View>
//       )
//     }
//   }
//
//   class RegisterScreen extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         username: '',
//         password: ''
//       }
//     }
//     static navigationOptions = {
//       title: 'Register'
//     };
//     postLogin() {
//       console.log('hhhhhhhh');
//       return fetch(`${domain}/register`, {
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           username: this.state.username,
//           password: this.state.password,
//         })
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         /* do something with responseJson and go back to the Login view but
//         * make sure to check for responseJson.success! */
//         if (responseJson.success === true) {
//           this.props.navigation.goBack()
//         } else {
//           alert('invalid')
//         }
//         console.log(responseJson)
//       })
//       .catch((err) => {
//         /* do something if there was an error with fetching */
//         console.log('it errored')
//       });
//     }
//
//     render() {
//       return (
//         <View style={styles.container}>
//           <TextInput
//             style={styles.input}
//             placeholder = "Username"
//             onChangeText={(text) => this.setState({username: text})} />
//             <TextInput
//               style={styles.input}
//               placeholder = "Password"
//               secureTextEntry={true}
//               onChangeText={(text) => this.setState({password: text})} />
//               <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.postLogin()} }>
//                 <Text style={styles.buttonLabel}>Register</Text>
//               </TouchableOpacity>
//             </View>
//           )
//         }
//       }
//
//
//       class RealLoginScreen extends React.Component {
//         constructor(props) {
//           super(props);
//           this.state = {
//             username: '',
//             password: '',
//             message: ''
//           }
//         }
//         static navigationOptions = {
//           title: 'RealLogin'
//         };
//         postSignin() {
//           console.log('signing in');
//           return fetch(`${domain}/login`, {
//             method: 'POST',
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//               username: this.state.username,
//               password: this.state.password,
//             })
//           })
//           .then((response) => response.json())
//           .then((responseJson) => {
//             if (responseJson.success === true) {
//               console.log('ds', ds)
//               this.setState({dataSource: ds.cloneWithRows(responseJson.users)})
//             } else {
//               alert('invalid')
//             }
//             console.log(responseJson)
//           })
//           .catch((err) => {
//             console.log('it errored')
//           });
//         }
//
//         render() {
//           return (
//             <View style={styles.container}>
//               <Text>{this.state.message}</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder = "Username"
//                 onChangeText={(text) => this.setState({username: text})} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder = "Password"
//                   secureTextEntry={true}
//                   onChangeText={(text) => this.setState({password: text})} />
//                   <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.postSignin()} }>
//                     <Text style={styles.buttonLabel}>Login</Text>
//                   </TouchableOpacity>
//                 </View>
//               )
//             }
//           }
//
//
//           class UsersScreen extends React.Component {
//             static navigationOptions = ({ navigation }) => {
//               return {
//                 title: 'Users',
//                 headerRight: (<Button title='Messages' onPress={() => navigation.navigate('Messages')} />),
//               }
//             };
//             constructor(props) {
//               super(props);
//               const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//               this.state = {
//                 dataSource: ds.cloneWithRows([])
//               };
//               fetch(`${domain}/users`)
//               .then((response) => response.json())
//               .then((responseJson) => {
//                 if (responseJson.success === true) {
//                   console.log('ds', ds)
//                   this.setState({dataSource: ds.cloneWithRows(responseJson.users)})
//                 } else {
//                   alert('invalid')
//                 }
//                 console.log(responseJson)
//               })
//               .catch((err) => {
//                 console.log('it errored')
//               });
//             }
//             touchUser(user) {
//               console.log('touch user');
//               return fetch(`${domain}/messages`, {
//                 method: 'POST',
//                 headers: {
//                   "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                   to: user._id,
//                 })
//               })
//               .then((response) => response.json())
//               .then((responseJson) => {
//                 if (responseJson.success === true) {
//                   Alert.alert(
//                     'Success',
//                     'Your HO HO HO ' + user.username + ' has been sent',
//                     [{text: 'Dismiss Button'}] // Button
//                   )
//                 } else {
//                   alert('did not send')
//                 }
//                 console.log(responseJson)
//               })
//               .catch((err) => {
//                 /* do something if there was an error with fetching */
//                 console.log('it errored')
//               });
//             }
//             longTouchUser(user, lat, long) {
//               console.log('long touch user');
//               return fetch(`${domain}/messages`, {
//                 method: 'POST',
//                 headers: {
//                   "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                   to: user._id,
//                   location: {
//                     longitude: long,
//                     latitude: lat
//                   }
//                 })
//               })
//               .then((response) => response.json())
//               .then((responseJson) => {
//                 if (responseJson.success === true) {
//                   console.log('respone', responseJson)
//                   console.log('LOCATION', location)
//                   Alert.alert(
//                     'Success',
//                     'Your HO HO HO ' + user.username + ' has been sent',
//                     [{text: 'Dismiss Button'}] // Button
//                   )
//                 } else {
//                   alert('did not send')
//                 }
//                 console.log(responseJson)
//               })
//               .catch((err) => {
//                 /* do something if there was an error with fetching */
//                 console.log('it errored')
//               });
//             }
//             sendLocation = async(user) => {
