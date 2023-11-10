import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to import the correct icon library
import { theme } from '../../themes';
import { useSelector } from 'react-redux';

const UserDetailsScreen = ({onDrawerOpen}) => {

  const profileImage  = "https://images.prismic.io/profilephotos/15306430-5a6d-4436-80eb-dcf42533233d_wellington-new-zealand-profile-photos-portrait-photographer-models-headshots-dashing.jpg?ixlib=vue-2.9.0&auto=format%2C%20compress"

  // const user = useSelector((state) => state.auth.userInfo)
  const user = {}
  user.location = "Wellington, New Zealand"
  user.connections = 100
  user.name = "John Doe"
  user.jobTitle = "Software Engineer"
  user.about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nunc nisl ultricies nunc, vitae aliquam nisl nunc eu nisl. Donec euismod, nisl eget tempor aliquam, nunc nisl ultricies nunc, vitae aliquam nisl nunc eu nisl."

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={()=> onDrawerOpen}>
          <View style={styles.profileImageBackground}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
        </View>
      </TouchableOpacity>

      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userJobTitle}>{user.jobTitle}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <FontAwesome name="map-marker" size={16} color={colors.placeholder} /> {user.location}
        </Text>
        <Text style={styles.infoText}>
          <FontAwesome name="users" size={16} color={colors.placeholder} /> {user.connections} Connections
        </Text>
      </View>

      <View style={styles.separator} />

      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.aboutText}>{user.about}</Text>

      {/* Add more sections as needed, such as work experience, education, skills, etc. */}
    </View>
  );
};

export default UserDetailsScreen;

const { colors, spacing, typography, button, input } = theme;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.large,
    marginTop: spacing.large,
  },
  profileImageContainer: {
    backgroundColor: colors.primary,
      borderRadius: 56, // Half of the image size
      padding: spacing.medium
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: spacing.medium,
  },
  userName: {
    fontSize: typography.h2.fontSize,
    fontWeight: typography.h2.fontWeight,
    marginBottom: spacing.small,
    color: colors.text,
  },
  userJobTitle: {
    fontSize: typography.subtitle.fontSize,
    color: colors.placeholder,
    marginBottom: spacing.large,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.large,
  },
  infoText: {
    color: colors.placeholder,
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: spacing.large,
  },
  sectionTitle: {
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    marginBottom: spacing.medium,
    color: colors.text,
  },
  aboutText: {
    fontSize: typography.body.fontSize,
    color: colors.text,
    marginBottom: spacing.medium,
  },
});