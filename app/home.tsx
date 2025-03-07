import { Text, View, StyleSheet, Image, TextInput, Button, Pressable, ScrollView, SafeAreaView  } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import {useRouter} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Index() {
      const [fontsLoaded] = useFonts({
        "RedditSans-Regular": require("../assets/fonts/RedditSans-Regular.ttf"),
        "RedditSans-SemiBold": require("../assets/fonts/RedditSans-SemiBold.ttf"),
        "RedditSans-Bold": require("../assets/fonts/RedditSans-Bold.ttf"),
        "RedditSans-Medium": require("../assets/fonts/RedditSans-Medium.ttf"),
        "RedditSans-Light": require("../assets/fonts/RedditSans-Light.ttf"),
        "RedditSans-Italic": require("../assets/fonts/RedditSans-Italic.ttf"),
        "RedditSans-BoldItalic": require("../assets/fonts/RedditSans-BoldItalic.ttf"),
      });






// const [tagActive, setTagActive] = useState(false);
const router = useRouter();
const [elementVisible, setElementVisible] = useState(false);

    const tags = [
      "Media Art", "70mm", "Home Movies",
      "Old Hollywood", "Weddings", "Politics",
      "Newsreels", "Television"
    ];

    const [activeTags, setActiveTags] = useState({});

      const toggleTag = (tag) => {
        setActiveTags((prevTags) => ({
          ...prevTags,
          [tag]: !prevTags[tag] // Toggle state
        }));
      };


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
                <Pressable
                style={styles.buttonMajor} onPress={() => setElementVisible(!elementVisible)}
                >
                <Text style={styles.buttonText}>Categories</Text>
                </Pressable>
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

          <Pressable
          style={styles.archiveBox}
           onPress={() => router.push("archive")}
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

            <View
            style={styles.imageRow}
            >
                <View style={styles.imageWrap}><Image
                     source={require('@/assets/images/fr-pic1.png')}
                     style={styles.materialImage}
                /></View>
                <View style={styles.imageWrap}><Image
                     source={require('@/assets/images/fr-pic2.png')}
                     style={styles.materialImage}
                /></View>
                <View style={styles.imageWrap}><Image
                     source={require('@/assets/images/fr-pic3.png')}
                     style={styles.materialImage}
                /></View>
            </View>

            <View
            style={styles.tagRow}
            >

                <View style={styles.tag}><Text style={styles.tagText}>Nitrate</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Media Art</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Animation</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>70mm</Text></View>
                <View style={styles.tagEllipses}><Text style={styles.tagTextEllipses}>...</Text></View>

            </View>




          </Pressable>

        </View>

        {/* TAG SELECTION OVERLAY */}
        {elementVisible && (
          <Pressable style={styles.overlay} onPress={() => setElementVisible(false)}>
            <View style={styles.select}>
              <Pressable onPress={() => {}} style={styles.selectWrapper}>
                <Text style={styles.selectHeader}>Pick all the categories that interest you:</Text>
                <View style={styles.selectContainer}>
                  {tags.map((tag, index) => (
                    <Pressable
                      key={index}
                      style={[styles.tagSelect, activeTags[tag] && styles.tagActivated]}
                      onPress={() => toggleTag(tag)}
                    >
                      <Text style={styles.tagTextSelect}>{tag}</Text>
                    </Pressable>
                  ))}
                </View>
                <View style={styles.selectButton}>
                  <Text style={styles.selectButtonText}>Search</Text>
                </View>
              </Pressable>
            </View>
          </Pressable>
        )}






    </View>
    </ScrollView>

//         DISPLAY END ***************
  );
}

const styles = StyleSheet.create({

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0)", // Semi-transparent black
      justifyContent: "center",
      alignItems: "center",
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
        width: "98%",
        alignItems: 'center',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    headerText: {
        color: '#484848',
        fontFamily: 'RedditSans-Bold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
        paddingLeft: "2%",
        paddingRight: "2%"
    },
    suggestText: {
        color: '#484848',
        fontFamily: 'RedditSans-Italic',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 13,

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
         height: 52,
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
        fontSize: 18,
        textAlign: 'center',

    },

    archiveHeadWrap: {

        width: "88%",
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
        right: -55,
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
        height: 22,


    },


    fundWrap: {
        width: "100%",
        height: undefined,
        marginTop: 20,
        marginLeft: 12,
        flexDirection: "row",
        marginBottom: 5,
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
        height: 27,
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
        marginTop: 6,
        },
    redText: {
        color: '#DC2103',
        },
    materialText: {
        fontFamily: "RedditSans-Regular",
        color: '#484848',
        fontSize: 14,
        marginLeft: 52,
        marginTop: 8,
        },

    text: {
        color: 'black',
    },
    mainLogo: {
        width: "50%",
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
        alignSelf: "center"

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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: "100%",
    padding: 20,
    height: "100%",

    alignItems: "center",
  },
  selectWrapper: {
    width: "100%",
    alignItems: "center"
  },
  selectHeader: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    fontFamily: "RedditSans-Bold",
  },
  selectContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",
    padding: 20,
  },
  tagSelect: {
    backgroundColor: "#797979",
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
  tagActivated: {
    backgroundColor: "#971717",
  },
  tagTextSelect: {
    color: "white",
    fontSize: 16,
  },
  selectButton: {
    marginTop: 15,
    backgroundColor: "#A3A3A3",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    width: 200,
    justifyContent: "center"
  },
  selectButtonText: {
    color: "white",

    fontFamily: "RedditSans-Bold",
    fontSize: 25,
  },



});
