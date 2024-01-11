import React from 'react';
import {View, StyleSheet, Text,Alert} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const DrawerList = [
  {icon: 'home-outline', label: 'Home', navigateTo: 'Menu'},
  {icon: 'account-multiple', label: 'Profile', navigateTo: 'Profile'},
  {icon: 'notification-clear-all', label: 'Notifications', navigateTo: 'notification'},
  {icon: 'bookshelf', label: 'Assets', navigateTo: 'Product'},
];
const DrawerLayout = ({icon, label, navigateTo,iconColor}) => {
  const navigation = useNavigation();
  // console.log(userData);
  return (
    <DrawerItem
      icon={({color, size}) => <Icon name={icon} color={iconColor} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = props => {
    
    return DrawerList.map((element, i) => {
      return (
        <DrawerLayout
          key={i}
          icon={element.icon}
          label={element.label}
          navigateTo={element.navigateTo}
          iconColor={'#663399'}
        />
      );
    });
  };
function DrawerContent({navigation,...props}) {
    const handleLogout = () => {
        Alert.alert('Log-out', 'Are you sure you want to log out?', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Log-out',
            onPress: () => {
              auth()
                .signOut()
                .then(() => console.log('User signed out!'));
              navigation.navigate('Home');
            },
          },
        ]);
      };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                  source={require('../assets/male.png')}
                  size={60}
                  style={{marginTop: 5}}
                />
                <View style={{marginLeft: 10, flexDirection: 'column'}}>
                  <Title style={styles.title}>Faisal Ashfaq</Title>
                  <Text style={styles.caption}>faisal.gitrex@gmail.com</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <TouchableOpacity onPress={handleLogout}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={'#663399'} size={size} />
          )}
          label="Sign-Out"
        />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    color: '#6e6e6e',
    width: '110%',
    
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0,
    borderBottomColor: '#663399',
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#663399',
    borderTopWidth: 1,
  },
 
});