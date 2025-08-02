import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MENU_ITEMS } from '../config/constants';
import { COMMON_STYLES, COLORS } from '../config/styles';

const Menu = () => {
    const navigation = useNavigation();

    const handleNavigation = (route) => {
        navigation.navigate(route);
    };

    // Modern, consistent icons
    const getIcon = (id) => {
        switch (id) {
            case 'course':
                return '📖';
            case 'contact':
                return '📧';
            case 'about':
                return 'ℹ️';
            case 'profile':
                return '👨‍🎓';
            default:
                return '📋';
        }
    };

    return (
        <View style={styles.menuContainer}>
            {MENU_ITEMS.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={styles.menuItem}
                    onPress={() => handleNavigation(item.route)}
                    activeOpacity={0.6}
                >
                    <View style={styles.iconContainer}>
                        <Text style={styles.iconText}>
                            {getIcon(item.id)}
                        </Text>
                    </View>
                    <Text style={styles.menuText} numberOfLines={1}>
                        {item.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        padding: 16,
        marginHorizontal: 0,
        marginVertical: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: COLORS.SHADOW,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 4,
        borderRadius: 16,
        minWidth: '23%',
        maxWidth: '25%',
        flex: 1,
    },
    iconContainer: {
        backgroundColor: COLORS.LIGHT_GRAY,
        borderRadius: 18,
        padding: 12,
        marginBottom: 8,
        shadowColor: COLORS.SHADOW,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
    },
    iconText: {
        fontSize: 20,
        textAlign: 'center',
    },
    menuText: {
        fontSize: 11,
        color: COLORS.TEXT_SECONDARY,
        fontFamily: 'JosefinSans_400Regular',
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 14,
    },
});

export default Menu; 