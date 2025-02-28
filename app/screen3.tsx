import { Text, View, StyleSheet, Image, TextInput, Button, Pressable } from "react-native";
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
      const handlePress = () => {
        console.log('Button pressed!');
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
          style={styles.videoBox}
          >
          <Image
                               source={require('@/assets/images/yt-new.png')}
                               style={styles.ytPic}
                          />
      </View>

      <Text style={styles.goalBigText}>$20,000 <Text style={styles.smallerGoal}>raised out of $30,000</Text></Text>

        <View
        style={styles.favButtonWrap}
        >

        <View style={styles.favButton}><Text style={styles.favText}>Favorite</Text></View>
        <View style={styles.favButton}><Text style={styles.favText}>Share</Text></View>

        </View>
          <View
          style={styles.archiveBox}
          >

                    <View
                    style={styles.tabWrapper}
                    >


                       <View
                            style={styles.singleTab}
                            >

                          <Text style={styles.tabText}>About</Text>

                         <View
                                style={styles.marker}
                                ></View>
                          </View>

                          <View
                             style={styles.singleTab}
                             >

                           <Text style={styles.tabText}>Stats</Text>

                          <View
                                 style={styles.marker}
                                 ></View>
                           </View>

                         <View
                            style={styles.singleTab}
                            >

                          <Text style={styles.tabText}>Inventory</Text>

                         <View
                                style={styles.marker}
                                ></View>
                          </View>

                         <View
                            style={styles.singleTab}
                            >

                          <Text style={styles.tabText}>Media</Text>

                         <View
                                style={styles.marker}
                                ></View>
                          </View>


                    </View>






            <Text style={styles.dummyText}>Lorem ipsum dolor sit amet,
                                           consectetur adipiscing elit.</Text>

                                           <Text style={styles.dummyText}>Morbi ullamcorper lobortis
                                           felis ut laoreet.</Text>

                                           <Text style={styles.dummyText}>Phasellus nulla orci, sollicitudin at eros quis, gravida ullamcorper dolor. </Text>











          </View>

        </View>


<View style={styles.stickyFooter}>
<View style={styles.chev}>
            <Image
                source={require('@/assets/images/chev-left.png')}
                style={styles.chevPic}
            />
</View>
<View style={styles.contact}>
<Text style={styles.connectText}>Connect...</Text>
</View>
<View style={styles.chev}>
            <Image
                source={require('@/assets/images/chev-right.png')}
                style={styles.chevPic}
            />
</View>

</View>

    </View>

//         DISPLAY END ***************
  );
}

const styles = StyleSheet.create({


    tabWrapper: {
        width: "100%",
//         backgroundColor: "red",
        height: 100,
        flexDirection: "row",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,

        },
    singleTab: {
        height: "100%",
        resizeMode:'contain',
        marginLeft: 5,
        marginRight: 5,
        flex: 1,

//         backgroundColor: "blue",

        },
    tabPic: {
        width: "100%",

        },
    marker: {

        height: "10%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#BBB6B7",
        borderRadius: 10,
        },
    tabText: {
        textAlign: "center",
        color: "#484848",
        fontSize: 18,
        fontFamily: 'RedditSans-SemiBold',
        marginTop: "78%"
        },

    stickyFooter: {
        position: "fixed",
        width: "100%",
        height: 80,
        bottom: "0%",
        borderTopColor: "gray",
        borderTopWidth: "1px",
        boxShadow: "0px -3px 10px #eee",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 13,

        },

        contact: {

             flex: 2,
             borderRadius: 10,
             backgroundColor: '#DC2103',
             justifyContent: "center",
             height: "82%",



        },

        chevPic: {

                    height: "70%",
                    width: "100%",
                    resizeMode:'contain',
                    position: "absolute",
                    alignSelf: "center",
                    marginBottom: 10,



            },

            connectText: {

                color: "white",
                textAlign: "center",
                fontSize: 30,
                fontFamily: 'RedditSans-Regular',



            },


            chev: {

                 flex: 1,
                 borderRadius: 10,
                 justifyContent: "center",


            },

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
        marginTop: 38,
        width: "88%",
        position: "relative",
        marginLeft: -43,

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

    videoBox: {

        width: "100%",
        height: undefined,
        aspectRatio: "16/9",

        marginTop: 20,
        borderRadius: 10,

        },

    ytPic: {

                height: "98%",
                width: "100%",
                resizeMode:'contain',
                position: "absolute",
                alignSelf: "center",



        },

    goalBigText: {

        color: "black",
        fontFamily: 'RedditSans-SemiBold',
        fontSize: 38,
        textAlign: 'center',
        marginTop: 10,

    },

    smallerGoal: {

        color: "black",
        fontFamily: 'RedditSans-SemiBold',
        fontSize: 21,
        textAlign: 'center',

    },

    dummyText: {

        color: "#484848",
        fontFamily: 'RedditSans-Regular',
        fontSize: 25,
        marginTop: 25,
        marginLeft: 20,


    },

    favButtonWrap: {
         height: 50,
         width: "100%",
         flexDirection: "row",
         marginTop: 5,
         marginBottom: 12,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
    },

    favButton: {
        backgroundColor: "#797979",
        height: "100%",
        flex: 1,
        marginLeft: 4,
        marginRight: 4,
        justifyContent: "center",
        borderRadius: 7,
        alignItems: "center",

    },

    favText: {

        color: "white",
        fontFamily: "RedditSans-Regular",
        fontSize: 25,

        },

    archiveBox: {

        backgroundColor: "#EBEBEB",
        borderColor: "#BDBDBD",
        borderWidth: 1,
        width: "100%",
        height: undefined,
        marginTop: 5,

        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
        height: 45,
        marginTop: 12,
        },

    imageRow: {
         height: 97,
         width: "100%",
         flexDirection: "row",
         marginTop: 5,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
    },
    imageWrap: {

        aspectRatio: 1,
        height: "100%",
        marginLeft: 11,
        marginRight: 11,

        },
    materialImage: {
        height: "100%",
        aspectRatio: 1,
        resizeMode:'contain',
        position: "absolute",
        alignSelf: "center",

    },

    tagRow: {
         height: 30,
         width: "100%",
         flexDirection: "row",
         marginTop: 17,
         marginBottom: 12,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
    },
    tagRowSelect: {
         height: 37,
         width: "100%",
         flexDirection: "row",
         marginTop: 17,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
    },
    tag: {
        backgroundColor: "#797979",
        height: "100%",
        marginLeft: 4,
        marginRight: 4,
        justifyContent: "center",
        borderRadius: 7,

    },
    tagActivate: {
        backgroundColor: "#971717",
        height: "100%",
        marginLeft: 4,
        marginRight: 4,
        justifyContent: "center",
        borderRadius: 7,

    },
    tagSelect: {
        backgroundColor: "#797979",
        height: "100%",
        marginLeft: 8,
        marginRight: 8,
        justifyContent: "center",
        borderRadius: 7,

    },
    tagActivated: {

        backgroundColor: "#971717",

        },
    tagEllipses: {
        height: "100%",
        marginLeft: 4,
        marginRight: 4,
        justifyContent: "center",
        borderRadius: 7,

    },

    tagText: {

        color: "white",
        fontFamily: 'RedditSans-Light',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 7,
        marginRight: 7,

    },
    tagTextSelect: {

        color: "white",
        fontFamily: 'RedditSans-Light',
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 7,
        marginRight: 7,

    },
    tagTextEllipses: {

        color: "#484848",
        fontFamily: 'RedditSans-Light',
        fontSize: 27,
        marginLeft: 3,


    },

    select: {

        backgroundColor: 'rgba(00,00, 00, 0.75)',
        zIndex: 50,
        position: "absolute",
        height: "100%",
        width: "100%",
        alignItems: "center",
        display: "none",

    },

    selectWrapper: {

        position: "absolute",
        height: "73%",
        width: "80%",
        alignItems: "center",

        marginTop: 170,
    },



    selectHeader: {
            color: 'white',
            fontFamily: 'RedditSans-SemiBold',
            fontSize: 46,
            paddingLeft: 3,
            paddingRight: 3,
            textAlign: 'center',

    },

    selectContainer: {

        backgroundColor: "white",
        borderRadius: 10,
        width: "100%",
        height: "55%",
        marginTop: 25,


    },

    selectButton: {

        backgroundColor: "#A3A3A3",
        borderRadius: 10,
        width: "100%",
        height: 60,
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",

    },

    selectButtonText: {

        color: "white",
        fontSize: 35,
        textAlign: "center",

    },



});
