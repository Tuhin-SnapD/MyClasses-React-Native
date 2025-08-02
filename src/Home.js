import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Menu from "./components/Menu";
import { COMMON_STYLES, COLORS } from './config/styles';
import { APP_CONFIG } from './config/constants';

const Home = (props) => {
  const description1 = "Welcome to MyClasses, your premier destination for quality education and skill development. We offer comprehensive courses designed to help you achieve your academic and career goals."
  const description2 = `Our platform is developed by ${APP_CONFIG.DEVELOPER}, bringing you cutting-edge learning experiences with modern technology and expert instruction.`
  
  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <Image 
              style={styles.headerImage} 
              resizeMode="contain" 
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2436/2436636.png"
              }} 
            />
          </View>
          
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.companyName}>
            {props.companyName}
          </Text>
          
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{description1}</Text>
            <Text style={styles.descriptionText}>{description2}</Text>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Choose MyClasses?</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>📚</Text>
              <Text style={styles.featureTitle}>Expert Content</Text>
              <Text style={styles.featureDesc}>Curated by industry experts</Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🎯</Text>
              <Text style={styles.featureTitle}>Focused Learning</Text>
              <Text style={styles.featureDesc}>Targeted study materials</Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🚀</Text>
              <Text style={styles.featureTitle}>Flexible Schedule</Text>
              <Text style={styles.featureDesc}>Learn at your own pace</Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🏆</Text>
              <Text style={styles.featureTitle}>Proven Results</Text>
              <Text style={styles.featureDesc}>High success rates</Text>
            </View>
          </View>
        </View>

        {/* Menu Section */}
        <View style={styles.menuSection}>
          <View style={styles.divider} />
          <Text style={styles.menuTitle}>Explore Our Platform</Text>
          <View style={styles.menuWrapper}>
            <Menu />
          </View>
          <View style={styles.divider} />
        </View>

        {/* Footer Section */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>
            Start your learning journey today and unlock your potential! 🎓
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    ...COMMON_STYLES.mainContainer,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  headerImage: {
    width: 80,
    height: 80,
    tintColor: COLORS.PRIMARY,
  },
  welcomeText: {
    fontSize: 18,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    marginBottom: 8,
  },
  companyName: {
    fontSize: 32,
    color: COLORS.PRIMARY,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  descriptionContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    padding: 24,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  descriptionText: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  featuresSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    ...COMMON_STYLES.subHeader,
    textAlign: 'center',
    marginBottom: 24,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  featureCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    minWidth: '45%',
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureIcon: {
    fontSize: 36,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'Nunito_600SemiBold',
    textAlign: 'center',
    marginBottom: 8,
  },
  featureDesc: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    textAlign: 'center',
    lineHeight: 20,
  },
  menuSection: {
    marginVertical: 24,
  },
  menuTitle: {
    ...COMMON_STYLES.subHeader,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuWrapper: {
    marginHorizontal: -4,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.BORDER,
    marginVertical: 20,
  },
  footerSection: {
    alignItems: 'center',
    marginTop: 24,
  },
  footerText: {
    fontSize: 16,
    color: COLORS.TEXT_LIGHT,
    fontFamily: 'JosefinSans_400Regular',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Home;

