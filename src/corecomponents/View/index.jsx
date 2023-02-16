import React,{Fragment} from "react";
import {View,Text} from 'react-native'
import styles from './styles'

const CusView = ()=>{
  return (
    <Fragment>
      <View style={styles.mainBody}>
        <View style={styles.children}>
          <Text style={styles.text}>one</Text>
        </View>
        <View style={styles.children}>
          <Text style={styles.text}>two</Text>
        </View>
        <View style={styles.children}>
          <Text style={styles.text}>three</Text>
        </View>
        <View style={styles.children}>
          <Text style={styles.text}>four</Text>
        </View>
      </View>
    </Fragment>
  )
}

export default CusView