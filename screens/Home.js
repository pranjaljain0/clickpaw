import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import InnerContainer from '../components/InnerContainer'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <InnerContainer/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
    },
    innerContainer:{
        marginTop:80,
    },
    innerContainerText:{
        fontSize:30,
        fontFamily:'ProductSans',
    }
})
