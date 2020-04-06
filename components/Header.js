import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                source={require('../assets/icons/icon_hamburger.png')}
                style={{
                    marginHorizontal:30,
                    marginTop:80,
                    height:40,
                    width:40,
                }}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        position:"absolute",
        top:0,
        left:0,
        right:0,
    }
})
