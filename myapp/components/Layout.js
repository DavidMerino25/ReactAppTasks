import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor='#7371fc' />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5efff',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    }

})

export default Layout