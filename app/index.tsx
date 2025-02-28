import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Index() {
      const [fontsLoaded] = useFonts({
        "RedditSans-Regular": require("../assets/fonts/RedditSans-Regular.ttf"),
        "RedditSans-SemiBold": require("../assets/fonts/RedditSans-SemiBold.ttf"),
        "RedditSans-Bold": require("../assets/fonts/RedditSans-Bold.ttf"),
        "RedditSans-Medium": require("../assets/fonts/RedditSans-Medium.ttf"),
        "RedditSans-Light": require("../assets/fonts/RedditSans-Light.ttf"),
      });



  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
      }
  return (

//          DISPLAY BEGIN ***************
    <View
        style={styles.container}
    >


        <View
            style={styles.top}
        >
            <Image
                source={require('@/assets/images/fr-search.png')}
                style={styles.searchImage}
            />
            <Image
                source={require('@/assets/images/filmraft-logo1.png')}
                style={styles.mainLogo}
            />
            <Image
                 source={require('@/assets/images/fr-burger.png')}
                 style={styles.burgerImage}
            />
        </View>


        <View
            style={styles.middle}
        >
            <Text style={styles.headerText}>Find a film archive in need!</Text>
            <Text style={styles.suggestText}>Search by archive, title, subject, or credits</Text>
            <TextInput style={styles.searchBar} placeholder="Search" keyboardType="numeric"/>

            <View
            style={styles.buttonRow}
            >
                <View
                style={styles.buttonMajor}
                >
                <Text style={styles.buttonText}>Categories</Text>
                </View>
                <View
                style={styles.buttonMinor}
                >
                <Text style={styles.buttonText}>Filter</Text>
                </View>
                <View
                style={styles.buttonMinor}
                >
                <Text style={styles.buttonText}>Sort</Text>
                </View>
            </View>

          <View
          style={styles.archiveBox}
          >
                  <View
                  style={styles.archiveHeadWrap}
                  >
                    <View
                    style={styles.archiveHeader}
                    >
                    <Text style={styles.archiveTitle}>Public University Film Library</Text>
                    <Text style={styles.archiveLocation}>United States</Text>

                    </View>
                    <View
                    style={styles.vulnerabilityDesc}
                    >

                    <Text style={styles.vulnerabilityText}>VULNERABILITY SCORE</Text>

                    </View>

                   <View
                   style={styles.circle}
                   >
                   <Text style={styles.circleScore}>10</Text>
                   <Text style={styles.circleScoreDesc}>CRITICAL</Text>
                   </View>


                  </View>

            <View
            style={styles.fundWrap}
            >
                <View
                style={styles.fundBar}
                >
                    <View
                    style={styles.funded}
                    >
                    <Text style={styles.fundedText}>$20,000</Text>
                    </View>
                </View>
            <View
            style={styles.textWrap}
            >
            <Text style={styles.goalText}>$30,000</Text>
            <Text style={styles.goalText}>Goal</Text>
            </View>
            </View>

            <Text style={styles.statText}>Notable contents:</Text>
            <Text style={styles.materialText}>Magnificent Ambersons (Welles Cut), Captain Kangaroo, Soviet Soap Commercials</Text>
            <Text style={styles.statText}>Hours of Film: 100,000</Text>
            <Text style={styles.statText}>Condition: <Text style={styles.redText}>40% Very Poor</Text></Text>
            <Text style={styles.statText}>Time Spread:</Text>

            <View
            style={styles.timeWrap}
            >
            <Image
                 source={require('@/assets/images/fr-timechart.png')}
                 style={styles.timeImage}
            />
            </View>




          </View>

        </View>

    </View>
//         DISPLAY END ***************
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        flex: 1,
        width: "100%",
        backgroundColor: '#195072',
        justifyContent: "center",
    },
    middle: {
        flex: 9,
        alignItems: 'center',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    headerText: {
        color: '#484848',
        fontFamily: 'RedditSans-SemiBold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
        paddingLeft: "2%",
        paddingRight: "2%"
    },
    suggestText: {
        color: '#484848',
        fontFamily: 'RedditSans-Regular',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 13,
        fontStyle: "oblique",
    },
    searchBar: {
         height: 65,
         marginTop: 18,
         borderWidth: 3,
         width: "100%",
         padding: 15,
         fontSize: 19,
         borderRadius: 90,
         borderColor: '#D9D9D9',

    },
    buttonRow: {
         height: 45,
         marginTop: 18,
         width: "100%",
         flexDirection: "row",
         justifyContent: "center",


    },
    buttonMajor: {

         width: "45%",
         borderRadius: 10,
         marginLeft: "2.2%",
         marginRight: "2.2%",
         backgroundColor: '#195072',
         justifyContent: "center",

    },
    buttonMinor: {

         width: "21%",
         borderRadius: 10,
         marginLeft: "2.2%",
         marginRight: "2.2%",
         backgroundColor: '#195072',
         justifyContent: "center",
    },
    buttonText: {

        color: "white",
        fontFamily: 'RedditSans-Light',
        fontSize: 16,
        textAlign: 'center',

    },

    archiveHeadWrap: {

        width: "88%",
        position: "relative",

        },

    circle: {

        borderRadius: "50%",
        position: "absolute",
        width: 100,
        height: 100,
        backgroundColor: "#FF2600",
        borderWidth: 2,
        borderColor: "#DC2103",
        right: -55,
        top: -15,
        justifyContent: "center",

        },

    circleScore: {

        color: 'white',
        fontFamily: "RedditSans-Bold",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 50,

        },
    circleScoreDesc: {

        color: 'white',
        fontFamily: "RedditSans-Regular",
        fontSize: 12,
        textAlign: "center",

        },

    archiveBox: {

        backgroundColor: "#EBEBEB",
        borderColor: "#BDBDBD",
        borderWidth: 1,
        width: "100%",
        height: undefined,
        marginTop: 32,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },

    archiveHeader: {

        backgroundColor: '#195072',
        width: "100%",
        height: 65,
        borderRadius: 10,
        justifyContent: "center",
        paddingRight: 40,

    },

    archiveTitle: {
        color: 'white',
        fontFamily: "RedditSans-SemiBold",
        fontSize: 17,
        textAlign: "center",

    },

    archiveLocation: {
        color: 'white',
        fontSize: 14,
        textAlign: "center",
        marginTop: 2,

    },

    vulnerabilityDesc: {

        backgroundColor: '#BBBAB9',
        width: "70%",
        marginLeft: "30%",
        borderWidth: 1,
        borderColor: "#9B9B9B",
        height: 20,
        borderRadius: 3,
        justifyContent: "center",
        paddingRight: 20,

    },
    vulnerabilityText: {
        color: '#676767',
        fontFamily: "RedditSans-SemiBold",
        textAlign: "center",
    },


    fundWrap: {
        width: "100%",
        height: undefined,
        marginTop: 20,
        marginLeft: 12,
        flexDirection: "row",
        },
    fundBar: {
        backgroundColor: "#797979",
        width: "80%",
        borderRadius: 7,
        height: 25,
        },
    funded: {
        backgroundColor: "#DC2103",
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        width: "70%",
        height: "100%",
        justifyContent: "center",
        },
    fundedText: {
        color: "white",
        marginLeft: 8,
        fontSize: 18,
        fontFamily: "RedditSans-Regular",
        },
    goalText: {
        fontFamily: "RedditSans-SemiBold",
        color: '#484848',
        fontSize: 10,
        marginLeft: 5,
        },

    statText: {
        fontFamily: "RedditSans-Bold",
        color: '#484848',
        fontSize: 20,
        marginLeft: 38,
        marginTop: 10,
        },
    redText: {
        color: '#DC2103',
        },
    materialText: {
        fontFamily: "RedditSans-Regular",
        color: '#484848',
        fontSize: 13,
        marginLeft: 52,
        marginTop: 8,
        },

    text: {
        color: 'black',
    },
    mainLogo: {
        width: '52%',
        height: undefined,
        aspectRatio: 1,
        resizeMode:'contain',
        position: "absolute",
        alignSelf: "center"

    },
    searchImage: {
        width: '7%',
        height: undefined,
        aspectRatio: 1,
        resizeMode:'contain',
        position: "absolute",
        left: "20px",
    },
    burgerImage: {
        width: '7%',
        height: undefined,
        aspectRatio: 1,
        resizeMode:'contain',
        position: "absolute",
        right: "20px",
        },
    timeImage: {
        height: 39,
        aspectRatio: 1,
        resizeMode:'contain',
        position: "absolute",
        alignSelf: "center"

    },
    timeWrap: {

        width: "100%",
        height: 50,
        marginTop: 15,
//         backgroundColor: "blue",

        },



});
