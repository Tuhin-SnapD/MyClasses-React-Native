import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Courses from "../api/Courseapi";
import { COMMON_STYLES, COLORS } from '../config/styles';

const Course = ({ navigation }) => {
  const courseCard = ({ item }) => {
    const handleCourseDetails = () => {
      navigation.navigate('CourseDetails', {
        courseId: item.id,
      });
    };

    return (
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.cardImage}
            source={item.image}
            resizeMode="cover"
          />
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>₹{item.price}</Text>
          </View>
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.courseTitle}>
            {item.title}
          </Text>
          
          <Text style={styles.courseDescription}>
            {item.description}
          </Text>
          
          <View style={styles.courseInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Subjects:</Text>
              <View style={styles.subjectsContainer}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.course1}</Text>
                </View>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.course2}</Text>
                </View>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.course3}</Text>
                </View>
              </View>
            </View>
          </View>
          
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={handleCourseDetails}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Courses}
        renderItem={courseCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...COMMON_STYLES.mainContainer,
  },
  listContainer: {
    padding: 20,
  },
  cardContainer: {
    ...COMMON_STYLES.cardContainer,
    marginBottom: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  priceTag: {
    ...COMMON_STYLES.priceTag,
    position: 'absolute',
    top: 12,
    right: 12,
  },
  priceText: {
    ...COMMON_STYLES.priceText,
  },
  contentContainer: {
    paddingHorizontal: 4,
  },
  courseTitle: {
    fontSize: 24,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 12,
    lineHeight: 28,
  },
  courseDescription: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    lineHeight: 24,
    marginBottom: 16,
  },
  courseInfo: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'Nunito_600SemiBold',
    marginRight: 12,
    minWidth: 80,
  },
  subjectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  badge: {
    ...COMMON_STYLES.badge,
    marginRight: 8,
    marginBottom: 4,
  },
  badgeText: {
    ...COMMON_STYLES.badgeText,
  },
  detailsButton: {
    ...COMMON_STYLES.buttonStyle,
    marginTop: 8,
  },
  buttonText: {
    ...COMMON_STYLES.buttonText,
  },
});

export default Course;

