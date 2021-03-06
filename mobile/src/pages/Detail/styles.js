import {StyleSheet} from 'react-native';
import Constants from "expo-constants";

export default StyleSheet.create({
  container : {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header:{
    flexDirection: 'row',
    justifyContent : "space-between",
    alignItems: "center"
  },

  incident : {
    padding: 24,
    borderRadius : 8,
    backgroundColor : '#FFF',
    marginBottom : 15,
   },

  incidentProp: {
    fontSize: 14,
    marginTop : 24,
    color : "#41d4",
    fontWeight : 'bold'
   },

   incidentValue : {
    marginTop : 8,
    fontSize : 15,
    color : '#737380'
   },

   contact : {
    padding: 24,
    borderRadius : 8,
    backgroundColor : '#FFF',
    marginBottom : 15,
   },
   
   heroTitle : {
     fontSize: 20,
     fontWeight : 'bold',
     color : '#13131a',
     lineHeight : 30
   },
   
   heroDescription : {
     fontSize : 15,
     color : "#737380",
     marginTop : 16
   },

   actions: {
     marginTop : 16,
     flexDirection : 'row',
     justifyContent : 'space-between'
   },

   action : {
    backgroundColor : "#e02041",
    height : 50,
    borderRadius : 8,
    width : '48%',
    justifyContent : 'center',
    alignItems : 'center'
   },

   actionText : {
     color : "#FFF",
     fontSize : 15,
     fontWeight : 'bold'
   }
})