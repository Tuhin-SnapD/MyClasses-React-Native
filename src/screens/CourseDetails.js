import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Courses from "../api/Courseapi";
import { COMMON_STYLES, COLORS } from '../config/styles';

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;
  const selectedCourse = Courses.find((elements) => {
    return id === elements.id;
  });

  const handleJoinCourse = () => {
    // Here you would typically handle course enrollment
    alert(`Successfully enrolled in ${selectedCourse.title}!`);
    navigation.navigate('Course');
  };

  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        {/* Course Image */}
        <View style={styles.imageContainer}>
          <Image 
            style={styles.courseImage}
            source={selectedCourse.image}
            resizeMode="cover"
          />
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>₹{selectedCourse.price}</Text>
          </View>
        </View>

        {/* Course Information */}
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>
            {selectedCourse.title}
          </Text>
          
          <Text style={styles.courseDescription}>
            {selectedCourse.description}
          </Text>

          {/* Subjects */}
          <View style={styles.subjectsSection}>
            <Text style={styles.sectionTitle}>Course Subjects</Text>
            <View style={styles.subjectsContainer}>
              <View style={styles.subjectBadge}>
                <Text style={styles.subjectText}>{selectedCourse.course1}</Text>
              </View>
              <View style={styles.subjectBadge}>
                <Text style={styles.subjectText}>{selectedCourse.course2}</Text>
              </View>
              <View style={styles.subjectBadge}>
                <Text style={styles.subjectText}>{selectedCourse.course3}</Text>
              </View>
            </View>
          </View>

          {/* Course Features */}
          <View style={styles.featuresSection}>
            <Text style={styles.sectionTitle}>What You'll Learn</Text>
            <View style={styles.featuresList}>
              <View style={styles.featureItem}>
                <Text style={styles.featureText}>✓ Comprehensive study materials</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureText}>✓ Expert instructor guidance</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureText}>✓ Practice tests and assignments</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureText}>✓ 24/7 doubt resolution</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureText}>✓ Certificate upon completion</Text>
              </View>
            </View>
          </View>

          {/* Enrollment Section */}
          <View style={styles.enrollmentSection}>
            <View style={styles.priceSection}>
              <Text style={styles.priceLabel}>Course Fee:</Text>
              <Text style={styles.priceValue}>₹{selectedCourse.price}</Text>
            </View>
            
            <TouchableOpacity
              style={styles.enrollButton}
              onPress={handleJoinCourse}
              activeOpacity={0.8}
            >
              <Text style={styles.enrollButtonText}>Enroll Now</Text>
            </TouchableOpacity>
          </View>
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
  imageContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  courseImage: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
  priceTag: {
    ...COMMON_STYLES.priceTag,
    position: 'absolute',
    top: 16,
    right: 16,
  },
  priceText: {
    ...COMMON_STYLES.priceText,
  },
  courseInfo: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 16,
    padding: 24,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  courseTitle: {
    fontSize: 28,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 16,
    lineHeight: 32,
  },
  courseDescription: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    lineHeight: 24,
    marginBottom: 24,
  },
  subjectsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    ...COMMON_STYLES.subHeader,
    marginBottom: 16,
  },
  subjectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  subjectBadge: {
    ...COMMON_STYLES.badge,
  },
  subjectText: {
    ...COMMON_STYLES.badgeText,
  },
  featuresSection: {
    marginBottom: 24,
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    lineHeight: 22,
  },
  enrollmentSection: {
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER,
    paddingTop: 24,
    alignItems: 'center',
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  priceLabel: {
    fontSize: 18,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'Nunito_600SemiBold',
    marginRight: 12,
  },
  priceValue: {
    fontSize: 24,
    color: COLORS.PRIMARY,
    fontFamily: 'Nunito_700Bold',
    fontWeight: 'bold',
  },
  enrollButton: {
    ...COMMON_STYLES.buttonStyle,
    minWidth: 200,
  },
  enrollButtonText: {
    ...COMMON_STYLES.buttonText,
  },
});

export default CourseDetails;