import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { COMMON_STYLES, COLORS } from '../config/styles';
import { APP_CONFIG } from '../config/constants';

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert("Error", "Please fill up all the fields");
      return;
    }
    
    if (!agree) {
      Alert.alert("Error", "Please agree to the terms and conditions");
      return;
    }
    
    Alert.alert("Success", `Thank you ${name}! We'll get back to you soon.`);
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.mainHeader}>Get in Touch</Text>
          <Text style={styles.description}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Text>
          
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Email us at:</Text>
            <Text style={styles.contactEmail}>{APP_CONFIG.SUPPORT_EMAIL}</Text>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your full name"
              value={name}
              onChangeText={setName}
              placeholderTextColor={COLORS.TEXT_LIGHT}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={COLORS.TEXT_LIGHT}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your phone number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholderTextColor={COLORS.TEXT_LIGHT}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Message</Text>
            <TextInput
              style={[styles.inputStyle, styles.multilineStyle]}
              placeholder="Tell us how we can help you..."
              value={message}
              onChangeText={setMessage}
              numberOfLines={6}
              multiline={true}
              textAlignVertical="top"
              placeholderTextColor={COLORS.TEXT_LIGHT}
            />
          </View>

          {/* Terms and Conditions */}
          <View style={styles.termsContainer}>
            <Checkbox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? COLORS.PRIMARY : COLORS.BORDER}
              style={styles.checkbox}
            />
            <Text style={styles.termsText}>
              I have read and agree to the{' '}
              <Text style={styles.termsLink}>Terms & Conditions</Text>
            </Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={[styles.submitButton, !agree && styles.submitButtonDisabled]}
            onPress={submit}
            disabled={!agree}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
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
    marginBottom: 16,
  },
  description: {
    ...COMMON_STYLES.paraStyle,
    textAlign: 'center',
    marginBottom: 20,
  },
  contactInfo: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  contactLabel: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    marginBottom: 4,
  },
  contactEmail: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontFamily: 'Nunito_600SemiBold',
    fontWeight: '600',
  },
  formContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 16,
    padding: 24,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  inputContainer: {
    ...COMMON_STYLES.inputContainer,
  },
  inputLabel: {
    ...COMMON_STYLES.inputLabel,
  },
  inputStyle: {
    ...COMMON_STYLES.inputStyle,
  },
  multilineStyle: {
    height: 120,
    textAlignVertical: 'top',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  checkbox: {
    marginRight: 12,
  },
  termsText: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'JosefinSans_400Regular',
    flex: 1,
    lineHeight: 20,
  },
  termsLink: {
    color: COLORS.PRIMARY,
    fontFamily: 'Nunito_600SemiBold',
    fontWeight: '600',
  },
  submitButton: {
    ...COMMON_STYLES.buttonStyle,
    marginTop: 8,
  },
  submitButtonDisabled: {
    backgroundColor: COLORS.GRAY,
    shadowOpacity: 0,
    elevation: 0,
  },
  submitButtonText: {
    ...COMMON_STYLES.buttonText,
  },
});

export default Contact;