import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu'

const Home = (props) => {
  const description = "MyClasses, One of the world's best-known online learning resources, We have several thousand courses from leading educational providers."
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image style={styles.headerImage} resizeMode="contain" source={require("./../assets/logo.jpg")} />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={styles.mainHeader, {
          fontSize: 25,
          color: "#4c5dab",
          marginTop: 0
        }}>{props.companyName}</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle,
        {
          marginVertical: 10,
        },
        ]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1.8,
    display: "flex",
    marginTop: 50,
    borderRadius: 15
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    // textTransform: "uppercase"
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 23,
    margin:15,
  },
  lineStyle: {
    marginBottom:10,
    borderWidth: 0.7,
    borderBottomColor:"grey",
  }
});

export default Home

