import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { COMMON_STYLES, COLORS } from '../config/styles';
import { SOCIAL_LINKS, SOCIAL_ICONS, APP_CONFIG } from '../config/constants';

const About = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: SOCIAL_LINKS.GITHUB,
      icon: SOCIAL_ICONS.GITHUB,
    },
    {
      name: 'LinkedIn',
      url: SOCIAL_LINKS.LINKEDIN,
      icon: SOCIAL_ICONS.LINKEDIN,
    },
    {
      name: 'HackerRank',
      url: SOCIAL_LINKS.HACKERRANK,
      icon: SOCIAL_ICONS.HACKERRANK,
    },
  ];

  const handleSocialLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://avatars.githubusercontent.com/u/67930437?v=4"
              }}
            />
          </View>
          
          <Text style={styles.nameText}>{APP_CONFIG.DEVELOPER}</Text>
          <Text style={styles.titleText}>Full Stack Developer</Text>
          
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>React Native</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>JavaScript</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Node.js</Text>
            </View>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>
              Passionate developer with a love for creating innovative solutions. 
              I specialize in React Native development and enjoy building apps that 
              make a difference in people's lives. Always eager to learn new technologies 
              and contribute to exciting projects.
            </Text>
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.skillsSection}>
          <Text style={styles.sectionTitle}>Skills & Expertise</Text>
          <View style={styles.skillsCard}>
            <View style={styles.skillRow}>
              <Text style={styles.skillLabel}>Frontend Development</Text>
              <Text style={styles.skillValue}>React Native, React.js, JavaScript</Text>
            </View>
            <View style={styles.skillRow}>
              <Text style={styles.skillLabel}>Backend Development</Text>
              <Text style={styles.skillValue}>Node.js, Express.js, MongoDB</Text>
            </View>
            <View style={styles.skillRow}>
              <Text style={styles.skillLabel}>Tools & Platforms</Text>
              <Text style={styles.skillValue}>Git, VS Code, Expo, Firebase</Text>
            </View>
          </View>
        </View>

        {/* Social Links Section */}
        <View style={styles.socialSection}>
          <Text style={styles.sectionTitle}>Connect With Me</Text>
          <View style={styles.socialContainer}>
            {socialLinks.map((social, index) => (
              <TouchableOpacity
                key={index}
                style={styles.socialButton}
                onPress={() => handleSocialLink(social.url)}
                activeOpacity={0.7}
              >
                <Image
                  style={styles.socialIcon}
                  source={{ uri: social.icon }}
                />
                <Text style={styles.socialText}>{social.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>
            Let's build something amazing together! 🚀
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...COMMON_STYLES.mainContainer,
  },
  contentContainer: {
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    ...COMMON_STYLES.profileImage,
  },
  nameText: {
    fontSize: 28,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 18,
    color: COLORS.PRIMARY,
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 16,
    textAlign: 'center',
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  badge: {
    ...COMMON_STYLES.badge,
  },
  badgeText: {
    ...COMMON_STYLES.badgeText,
  },
  aboutSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    ...COMMON_STYLES.subHeader,
    marginBottom: 16,
    textAlign: 'center',
  },
  aboutCard: {
    ...COMMON_STYLES.cardContainer,
  },
  aboutText: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    lineHeight: 24,
    textAlign: 'center',
  },
  skillsSection: {
    marginBottom: 30,
  },
  skillsCard: {
    ...COMMON_STYLES.cardContainer,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  skillLabel: {
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'Nunito_600SemiBold',
    flex: 1,
  },
  skillValue: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    flex: 2,
    textAlign: 'right',
  },
  socialSection: {
    marginBottom: 30,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 12,
  },
  socialButton: {
    ...COMMON_STYLES.socialButton,
    minWidth: 100,
    paddingVertical: 16,
  },
  socialIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  socialText: {
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    textAlign: 'center',
    fontWeight: '500',
  },
  footerSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: COLORS.TEXT_LIGHT,
    fontFamily: 'JosefinSans_400Regular',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default About;