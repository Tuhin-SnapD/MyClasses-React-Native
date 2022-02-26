import react from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';



const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Course')}>            
                {/* <Text>Courses</Text> */}
                <Image
                style={styles.iconStyle}
                source={require('../assets/course.png')}
                    />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Contact')}>    
                {/* <Text>Contact</Text> */}
                <Image
                style={styles.iconStyle}
                source={require('../assets/contact.png')}
                    />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('About')}>    
                {/* <Text>About</Text> */}
                <Image
                style={styles.iconStyle}
                source={require('../assets/about.png')}
                    />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Profile')}>    
                {/* <Text>Profile</Text> */}
                <Image
                style={styles.iconStyle}
                source={require('../assets/user.png')}
                    />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    textStyle:{
        textTransform:"uppercase",
        marginBottom: 50,
    },
    iconStyle:{
        height:50,
        width:50,
    }

});

export default Menu;


