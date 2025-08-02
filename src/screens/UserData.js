import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { COMMON_STYLES, COLORS } from '../config/styles';
import { STUDENT_DATA } from '../config/constants';

const UserData = () => {
  const [students] = useState(STUDENT_DATA);

  const renderStudentCard = ({ item }) => {
    return (
      <View style={styles.studentCard}>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.studentImage} 
            source={{ uri: item.image }}
            resizeMode="cover"
          />
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>

        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>{item.name}</Text>
          <Text style={styles.studentCourse}>{item.course}</Text>
          
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Email:</Text>
              <Text style={styles.contactValue}>{item.email}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Phone:</Text>
              <Text style={styles.contactValue}>{item.mobile}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.viewProfileButton}>
            <Text style={styles.viewProfileText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.mainHeader}>Our Students</Text>
          <Text style={styles.subHeader}>
            Meet our talented students who are pursuing their educational goals with dedication and passion.
          </Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{students.length}</Text>
              <Text style={styles.statLabel}>Total Students</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statLabel}>Active Courses</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Success Rate</Text>
            </View>
          </View>
        </View>

        {/* Students List */}
        <View style={styles.studentsSection}>
          <Text style={styles.sectionTitle}>Student Directory</Text>
          <FlatList
            data={students}
            renderItem={renderStudentCard}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        {/* Footer */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>
            Join our community of learners and start your journey today!
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
  headerSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  mainHeader: {
    ...COMMON_STYLES.mainHeader,
    marginBottom: 12,
  },
  subHeader: {
    ...COMMON_STYLES.paraStyle,
    textAlign: 'center',
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 16,
    padding: 20,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    color: COLORS.PRIMARY,
    fontFamily: 'Nunito_700Bold',
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    textAlign: 'center',
    marginTop: 4,
  },
  studentsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    ...COMMON_STYLES.subHeader,
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    gap: 16,
  },
  studentCard: {
    ...COMMON_STYLES.cardContainer,
    marginBottom: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  studentImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  statusBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: COLORS.SUCCESS,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: COLORS.WHITE,
    fontSize: 12,
    fontFamily: 'JosefinSans_400Regular',
    fontWeight: '600',
  },
  studentInfo: {
    paddingHorizontal: 4,
  },
  studentName: {
    fontSize: 20,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 4,
  },
  studentCourse: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 16,
  },
  contactInfo: {
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'Nunito_600SemiBold',
    minWidth: 60,
  },
  contactValue: {
    fontSize: 14,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'JosefinSans_400Regular',
    flex: 1,
  },
  viewProfileButton: {
    ...COMMON_STYLES.buttonSecondary,
    alignSelf: 'flex-start',
  },
  viewProfileText: {
    ...COMMON_STYLES.buttonText,
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

export default UserData;