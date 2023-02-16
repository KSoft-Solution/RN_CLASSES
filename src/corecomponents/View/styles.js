import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainBody: {
    backgroundColor: "green",
    height: 200,
    width: 200,
    display:'flex',
    alignContent:'center',
    flexWrap:'wrap',
    margin:20,
  },
  children: {
    backgroundColor: "cyan",
    height: 100,
    width: 100,
    padding:10,
    borderColor:'red',
    borderWidth:2,
    textAlign:'center',
  },
  text:{
    fontSize:16,
    fontWeight:'700',
    color:'#fff',
    textAlign:'center'
  }
});

export default styles;
