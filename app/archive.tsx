import { Text, View, StyleSheet, Image, TextInput, Button, Pressable, ScrollView, SafeAreaView } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import { WebView } from 'react-native-webview';
import {useRouter} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Index() {
      const [fontsLoaded] = useFonts({
        "RedditSans-Regular": require("../assets/fonts/RedditSans-Regular.ttf"),
        "RedditSans-SemiBold": require("../assets/fonts/RedditSans-SemiBold.ttf"),
        "RedditSans-Bold": require("../assets/fonts/RedditSans-Bold.ttf"),
        "RedditSans-Medium": require("../assets/fonts/RedditSans-Medium.ttf"),
        "RedditSans-Light": require("../assets/fonts/RedditSans-Light.ttf"),
      });

  const [selectedTab, setSelectedTab] = useState("About");

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  const tabContent = {
    About: "This archive preserves a rich collection of historical films...",
    Stats: "100,000 hours of film preserved, with 40% in very poor condition.",
    Inventory: (
                   <View>
                     <Text style={styles.dummyText}>The following is a partial selection of this archive's inventory:</Text>
                     <View style={styles.tableContainer}>
                       <View style={styles.tableHeader}>
                         <Text style={styles.tableHeaderText}>Item</Text>
                         <Text style={styles.tableHeaderText}>Year</Text>
                          <Text style={styles.tableHeaderText}>Details</Text>
                       </View>
                       {/* Empty rows */}
                       {[...Array(5)].map((_, index) => (
                         <View key={index} style={styles.tableRow}>
                           <Text style={styles.tableCell}></Text>
                           <Text style={styles.tableCell}></Text>
                         </View>
                       ))}
                     </View>
                   </View>
                 ),
    Media: "View images and clips from our collections.",
  };



  const handleSharePress = () => {
    setShareActive(true);

    setTimeout(() => {
      setShareActive(false);
    }, 50); // Change back after 300ms
  };

const [favoriteActive, setFavoriteActive] = useState(false);
const [shareActive, setShareActive] = useState(false);

const toggleFavorite = () => {
  setFavoriteActive(!favoriteActive);
};

const toggleShare = () => {
  setShareActive(!shareActive);
};

const router = useRouter();
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

<View>

<ScrollView >

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
            <Pressable onPress={() => router.push("home")}
                style={styles.logoWrap}
            >
            <Image
            source={require('@/assets/images/filmraft-logo1.png')}
                            style={styles.mainLogo}
            />
             </Pressable>
            <Image
                 source={require('@/assets/images/fr-burger.png')}
                 style={styles.burgerImage}
            />
        </View>


        <View
            style={styles.middle}
        >

         <View
                  style={styles.archiveBoxArch}

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


                  </View>




<View style={styles.videoBox}>
  <WebView
    source={{ uri: "https://www.youtube.com/embed/smXWZDupnkw" }}
    style={styles.webview}
    javaScriptEnabled={true}
    domStorageEnabled={true}
  />
</View>

      <Text style={styles.goalBigText}>$20,000 <Text style={styles.smallerGoal}>raised out of $30,000</Text></Text>


<View style={styles.favButtonWrap}>
  <Pressable
    style={[styles.favButton, { backgroundColor: favoriteActive ? "#DC2103" : "#797979" }]}
    onPress={toggleFavorite}
  >
    <Text style={styles.favText}>{favoriteActive ? "Favorited" : "Favorite"}</Text>
  </Pressable>

  <Pressable
    style={[styles.favButton, { backgroundColor: shareActive ? "#195072" : "#797979" }]}
    onPress={handleSharePress}
  >
    <Text style={styles.favText}>Share</Text>
  </Pressable>
</View>
          <View
          style={styles.archiveBox}
          >


  <View style={styles.tabWrapper}>
    {[
      { name: "About", image: require("@/assets/images/fr-about.png") },
      { name: "Stats", image: require("@/assets/images/fr-stat.png") },
      { name: "Inventory", image: require("@/assets/images/fr-film.png") },
      { name: "Media", image: require("@/assets/images/fr-media.png") },
    ].map((tab, index) => (
      <Pressable key={index} style={styles.singleTab} onPress={() => handleTabPress(tab.name)}>
        <View style={styles.imgGate}>
          <Image source={tab.image} style={styles.tabPic} />
        </View>
        <Text style={[styles.tabText, selectedTab === tab.name && styles.activeTabText]}>{tab.name}</Text>
        <View style={[styles.marker, selectedTab === tab.name && styles.activeMarker]} />
      </Pressable>
    ))}
  </View>





        <Text style={styles.dummyText}>{tabContent[selectedTab]}</Text>











          </View>

        </View>




    </View>

    </ScrollView >

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

      tableContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#BDBDBD",
        borderRadius: 5,
      },
      tableHeader: {
        flexDirection: "row",
        backgroundColor: "#195072",
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
      tableHeaderText: {
        flex: 1,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#BDBDBD",
        paddingVertical: 8,
        paddingHorizontal: 10,
      },
      tableCell: {
        flex: 1,
        textAlign: "center",
      },

    activeTabText: {
      color: "#231F20"

    },

    activeMarker: {
      backgroundColor: "#231F20"
    },


    tabWrapper: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
    },
    singleTab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
    },
    imgGate: {
        width: 40, // Set fixed width or adjust dynamically
        height: 40, // Ensure it has a height
        justifyContent: "center",
        alignItems: "center",
    },
    tabPic: {
        width: "100%",
        height: "100%",
        resizeMode: "contain", // Ensures image fits within container
    },
    tabText: {
        textAlign: "center",
        color: "#484848",
        fontSize: 16,
        fontFamily: 'RedditSans-SemiBold',
        marginTop: 5, // Adds space between image and text
    },

    marker: {

        height: "10%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#BBB6B7",
        borderRadius: 10,
        },


    stickyFooter: {
        position: "absolute",
        width: "100%",
        height: 80,
        bottom: 0,

        borderTopWidth: 0,
        boxShadow: "0px -3px 10px #aaaaaa",
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
                 marginBottom: 10,


            },

    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {

        width: "100%",
        height: 90,

        backgroundColor: '#195072',
        justifyContent: "center",
    },
    middle: {
        width: "100%",

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

        width: "100%",
        position: "relative",

        },

    circle: {

        borderRadius: 50,
        position: "absolute",
        width: 100,
        height: 100,
        backgroundColor: "#FF2600",
        borderWidth: 2,
        borderColor: "#DC2103",
        right: -10,
        top: -15,
        justifyContent: "center",

        },

    circleScore: {

        color: 'white',
        fontFamily: "RedditSans-Bold",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 58,
        height: 48,

        },
    circleScoreDesc: {

        color: 'white',
        fontFamily: "RedditSans-Regular",
        fontSize: 12,
        textAlign: "center",

        },

    archiveBoxArch: {

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
        paddingRight: 75,

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
        marginLeft: "20%",
        borderWidth: 1,
        borderColor: "#9B9B9B",
        height: 20,
        borderRadius: 3,
        justifyContent: "center",
        paddingRight: 40,

    },
    vulnerabilityText: {
        color: '#676767',
        fontFamily: "RedditSans-SemiBold",
        textAlign: "center",
        height: 22,


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
        marginLeft: 10,


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
        paddingLeft: "5%",
        paddingRight: "5%",
        marginBottom: 200,
        paddingBottom: 50,

        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },









    text: {
        color: 'black',
    },
    mainLogo: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode:'contain',



    },

    logoWrap: {
        alignSelf: "center",
        width: '50%',



    },

    searchImage: {
        width: '7%',
        height: undefined,
        aspectRatio: 1,
        resizeMode:'contain',
        position: "absolute",
        left: 20,
    },
    burgerImage: {
        width: '7%',
        height: undefined,
        aspectRatio: 1,
        resizeMode:'contain',
        position: "absolute",
        right: 20,
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
