import React,{Fragment} from "react";
import {View,Text} from 'react-native'
// import { withExpoSnack,styled } from 'nativewind';

import styles from './styles'

// backgroundColor: "green",
//     height: 200,
//     width: 200,
//     display:'flex',
//     alignContent:'center',
//     flexWrap:'wrap',
//     margin:20,

// const CustomView = styled(View)

const CusView = ()=>{
  return (
    <Fragment>
      <View className='rounded-md h-full  bg-red-600' >
          <Text style={styles.text} >one</Text>
        {/* <View style={styles.children}>
        </View>
        <View style={styles.children}>
          <Text style={styles.text}>two</Text>
        </View>
        <View style={styles.children}>
          <Text style={styles.text}>three</Text>
        </View>
        <View style={styles.children}>
          <Text style={styles.text}>four</Text>
        </View> */}
      </View>
    </Fragment>
  )
}

export default CusView