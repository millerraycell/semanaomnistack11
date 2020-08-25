import React from "react";
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity ,Text, Image, Linking} from "react-native";
import * as MailComposer from 'expo-mail-composer'; 

import logoImg from "../../assets/logo.png";
import styles from './styles';

export default function Detail(){
  const message = 'Ola APAD, estou entrando em contato, pois gostaria de ajudar no caso "cadelinha atropelada", com o valor de R$ 120.00';
  const navigation = useNavigation();

  function navigateBack(){
    navigation.goBack()
  };


  function sendMail(){
    MailComposer.composeAsync({
      subject: 'Heroi do caso: Cadelinha Atropelada',
      recipients : ['millerraycell@gmail.com'],
      body : message,
    })
  };

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=+5595991513463&text=${message}`)
  }
  return(
    <View style = {styles.container}>

      <View style = {styles.header}>
        <TouchableOpacity onPress = {navigateBack}>
          <Feather name = "arrow-left" 
                  size = {18}
                  color = "#e82041"/>
        </TouchableOpacity>
        
        <Image source={logoImg} />
      </View>

      <View style = {styles.incident}>
        <View style = {styles.incident}>
          <Text style = {[styles.incidentProp, {marginTop:0}]}>ONG:</Text>
          <Text style = {styles.incidentValue}>APAD</Text>

          <Text style = {styles.incidentProp}>Caso:</Text>
          <Text style = {styles.incidentValue}>Cadelinha atropelada</Text>

          <Text style = {styles.incidentProp}>Valor:</Text>
          <Text style = {styles.incidentValue}>R$ 120.00</Text> 
        </View> 
      </View>

      <View style ={styles.contact}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em Contato</Text>
        
        <View style = {styles.actions}>
          <TouchableOpacity style = {styles.action} onPress={sendWhatsapp}>
            <Text style = {styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
            
          <TouchableOpacity style = {styles.action} onPress={sendMail}>
            <Text style = {styles.actionText}>E-mail</Text>
          </TouchableOpacity>     
           
        </View>
      </View>


    </View>
  );
};