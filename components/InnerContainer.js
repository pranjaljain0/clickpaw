import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { BorderlessButton, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import {FontAwesome} from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InnerContainer = () => {
    return (
        <ScrollView style={styles.innerContainer}>
            <Text style={styles.innerContainerText}>Hi Mindful, {<Text style={{fontWeight:'bold'}}>Find your Dream job</Text>}</Text>
                  <View style={styles.SearchBarView}>
                    <SearchBar
                            placeholder="Type Here..."
                            containerStyle={styles.SearchBar}
                            inputContainerStyle={styles.SearchBarInput}
                            platform="android"
                            
                            // onChangeText={this.updateSearch}
                            // value={search}
                        />
                        <TouchableOpacity style={styles.searchButton}>
                            <FontAwesome name="sliders" size={30}></FontAwesome>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.chipsView}>
                        <View style={styles.chipView}>
                            <Text style={styles.chipText}>Product</Text>
                        </View>
                        <View style={styles.chipView}>
                            <Text style={styles.chipText}>Design</Text>
                        </View>
                        <View style={styles.chipView}>
                            <Text style={styles.chipText}>Google</Text>
                        </View>
                    </View>
                    <View style={styles.PopularJobSec}>
                        <View style={styles.PopularJobSecTitle}>
                            <Text style={styles.TitlePrimary}>Popular Job</Text>
                            <TouchableOpacity>
                                <Text style={styles.textButtonSecondary}>show all</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView
                              horizontal={true}
                              contentContainerStyle={{ width: `${90 * 2}%` }}
                              showsHorizontalScrollIndicator={false}
                              scrollEventThrottle={200}
                              decelerationRate="fast"
                              pagingEnabled
                        >
                            <View style={styles.jobCard}>
                                <View style={styles.jobCardImages}>
                                    <View style={{
                                        height:80,
                                        width:80,
                                        backgroundColor:'#f6f7fb',
                                        borderRadius:15,
                                        justifyContent:'center'
                                    }}>
                                    <Image
                                         source={require('../assets/icons/google.png')}
                                        style={{
                                            height:50,
                                            width:50,
                                            alignSelf:'center',
                                        }}
                                    />
                                    </View>
                                </View>
                                <View style={styles.JobSectionText}>
                                    <Text style={styles.JobSectionTextTitle}>Google LLC</Text>
                                    <Text style={styles.JobSectionTextSubTitle}>Design System Developer</Text>
                                    <Text style={styles.JobSectionTextLocation}>Mountain View, California,</Text>
                                    <Text style={styles.JobSectionTextCountry}>United States</Text>
                                </View>
                            </View>

                            <View style={styles.jobCard}>
                                <View style={styles.jobCardImages}>
                                    <View style={{
                                        height:80,
                                        width:80,
                                        backgroundColor:'#f6f7fb',
                                        borderRadius:15,
                                        justifyContent:'center'
                                    }}>
                                    <Image
                                         source={require('../assets/icons/google.png')}
                                        style={{
                                            height:50,
                                            width:50,
                                            alignSelf:'center',
                                        }}
                                    />
                                    </View>
                                </View>

                                <View style={styles.JobSectionText}>
                                    <Text style={styles.JobSectionTextTitle}>Google LLC</Text>
                                    <Text style={styles.JobSectionTextSubTitle}>Design System Developer</Text>
                                    <Text style={styles.JobSectionTextLocation}>Mountain View, California,</Text>
                                    <Text style={styles.JobSectionTextCountry}>United States</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                        <View style={styles.JobCategorySection}>
                            <View style={styles.PopularJobSecTitle}>
                                <Text style={styles.TitlePrimary}>Job Category</Text>
                                <TouchableOpacity>
                                    <Text style={styles.textButtonSecondary}>show all</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView
                              horizontal={true}
                              contentContainerStyle={{ width: `${80 * 2}%` }}
                              showsHorizontalScrollIndicator={false}
                              scrollEventThrottle={200}
                              decelerationRate="fast"
                              pagingEnabled>
                            <View style={styles.jobCategoryCard}>
                                    <View 
                                    style={{
                                        height:80,
                                        width:80,
                                        backgroundColor:'#fff',
                                        borderRadius:15,
                                        justifyContent:'center',
                                        alignSelf:'center'
                                    }}>
                                    <Image
                                         source={require('../assets/icons/laptop_emoji_boy.png')}
                                        style={{
                                            height:50,
                                            width:50,
                                            alignSelf:'center',
                                        }}
                                    />
                                    </View>
                                    <Text style={styles.JobCategorySectionText}>Design Job</Text>
                            </View>

                            <View style={styles.jobCategoryCard}>
                                    <View 
                                    style={{
                                        height:80,
                                        width:80,
                                        backgroundColor:'#fff',
                                        borderRadius:15,
                                        justifyContent:'center',
                                        alignSelf:'center'
                                    }}>
                                    <Image
                                         source={require('../assets/icons/laptop_emoji_girl.png')}
                                        style={{
                                            height:50,
                                            width:50,
                                            alignSelf:'center',
                                        }}
                                    />
                                    </View>
                                    <Text style={styles.JobCategorySectionText}>Developer Job</Text>
                            </View>

                            <View style={styles.jobCategoryCard}>
                                    <View 
                                    style={{
                                        height:80,
                                        width:80,
                                        backgroundColor:'#fff',
                                        borderRadius:15,
                                        justifyContent:'center',
                                        alignSelf:'center'
                                    }}>
                                    <Image
                                         source={require('../assets/icons/artist_emoji_girl.png')}
                                        style={{
                                            height:50,
                                            width:50,
                                            alignSelf:'center',
                                        }}
                                    />
                                    </View>
                                    <Text style={styles.JobCategorySectionText}>Engineer Job</Text>
                            </View>
                        </ScrollView>
                        </View>
        </ScrollView>
    )
}

export default InnerContainer

const styles = StyleSheet.create({
    innerContainer:{
        marginTop:140,
    },
    innerContainerText:{
        fontSize:40,
        marginHorizontal:30,
        fontFamily:'ProductSans',
    },
    SearchBarView:{
        flexDirection:'row',
        marginHorizontal:30,
        marginTop:20,
    },
    searchButton:{
        padding:20,
        backgroundColor:'#eff4ff',
        borderRadius:50,
        marginLeft:5
    },
    SearchBar:{
        flex:1,
        backgroundColor:'#f6f7fb',
        borderColor:'#f6f7fb',
        padding:10,
        borderRadius:11,
        justifyContent:'center',
    },
    SearchBarInput:{
        backgroundColor:'#f6f7fb',
        borderColor:'#f6f7fb',
    },
    chipsView:{
        flexDirection:'row',
        marginTop:10,
        marginHorizontal:30,
    },
    chipView:{
        paddingHorizontal:8,
        paddingVertical:5,
        borderColor:'#d1d1d1',
        borderRadius:8,
        borderWidth:1.5,
        margin:3,
    },
    chipText:{
        color:'#d1d1d1',
        fontFamily:'ProductSans',
    },
    PopularJobSec:{
        backgroundColor:'#f6f7fb',
        marginVertical:30,
        borderRadius:50,
        paddingHorizontal:30,
    },
    PopularJobSecTitle:{
        marginTop:20,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    TitlePrimary:{
        fontSize:20,
        fontFamily:'ProductSansBold'
    },
    textButtonSecondary:{
        fontSize:16,
        color:'#a0a0a0',
        fontFamily:'ProductSans',
    },
    jobCard:{
        padding:20,
        backgroundColor:'#fff',
        margin:20,
        borderRadius:15,
        width:windowWidth-140,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    JobSectionText:{
        margin:10,
    },
    JobSectionTextTitle:{
        fontSize:18,
        fontFamily:'ProductSans'
    },
    JobSectionTextSubTitle:{
        fontSize:18,
        fontFamily:'ProductSansBold'
    },
    JobSectionTextLocation:{
        fontSize:18,
        fontFamily:'ProductSans',
    },
    JobSectionTextCountry:{
        fontSize:18,
        fontFamily:'ProductSans',
    },
    JobCategorySection:{
        
    },
    jobCategoryCard:{
        backgroundColor:'#ebfaff',
        margin:10,
        padding:20,
        borderRadius:11,
    },
    JobCategorySectionText:{
        fontFamily:'ProductSansBold',
        fontSize:20,
        margin:10,
    }


})
