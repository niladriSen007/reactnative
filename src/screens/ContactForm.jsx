import { View, Text,StyleSheet,TextInput,Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
// import { TextInput } from 'react-native-web'
import  CheckBox  from 'expo-checkbox'
// import { color } from 'react-native-reanimated'

export default function ContactForm() {

    const [isChecked,setIsChecked] = useState(false)

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        age:0,
    })

    // const handleChange = (e) =>{
    //     const [name,value] = e.target;
    //     setFormData(prevFormData=>{
    //         return{
    //             ...prevFormData,
    //             [name]:value,
    //         }
    //     })
    // }

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [age,setAge] = useState("")


    // console.log(name)

    const submit =() =>{
        Alert.alert(name,email,age);
    }
    



  return (
    <View>
      <Text style={styles.mainHeading}>Login Form</Text>
      <Text style={styles.subHeading}>Fill Your Details</Text>
      <View style={styles.formContainer}>
            <Text style={styles.labels}>Enter Your Name</Text>
            <TextInput style={styles.inputbox} value={name} name="name" onChangeText={(actualData)=>setName(actualData)}/>
            <Text style={styles.labels}>Enter Your Email</Text>
            <TextInput style={styles.inputbox} autoCapitalize="none" autoCorrect={false} value={email} name="email" onChangeText={(actualData)=>setEmail(actualData)}/>
            <Text style={styles.labels}>Enter Your Password</Text>
            <TextInput style={styles.inputbox} autoCapitalize="none" autoCorrect={false}  secureTextEntry={true} value={password} name="password" onChangeText={(actualData)=>setPassword(actualData)}/>
            <Text style={styles.labels}>Enter password Again</Text>
            <TextInput style={styles.inputbox} autoCapitalize="none" autoCorrect={false} secureTextEntry={true} value={confirmPassword} name="confirmPassword" onChangeText={(actualData)=>setConfirmPassword(actualData)}/>
            <Text style={styles.labels}>Enter Your Age</Text>
            <TextInput style={styles.inputbox} autoCapitalize="none" autoCorrect={false} keyboardType="numbe-pad" value={age} name="age" onChangeText={(actualData)=>setAge(actualData)}/>
            <View style={styles.checkBoxContainer}>
                <CheckBox 
                value={isChecked} 
                onValueChange={()=>{
                    setIsChecked(!isChecked)
                }}
                color={isChecked?"#4630EB":undefined}
                />
                <Text style={styles.checkBoxText}>Check this to accept Terms and Conditions</Text>
            </View>
            <TouchableOpacity style={[styles.button,{backgroundColor : isChecked ? "indigo":"gray"}]}  disabled={!isChecked} onPress={submit}>
                <Text style={[{color:isChecked?"#fff":"#111"}]} >Login</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainHeading:{
        fontWeight:'800',
        fontSize:32,
    },
    subHeading:{
        marginTop:16,
        fontSize:20,
        color:"gray",
    },
    formContainer:{
        marginTop:64
    },
    labels:{
        color:"gray",
        opacity:.9,
  
    },
    inputbox:{
        // width:100,
        // height:60,
        borderColor:"#111",
        borderWidth:2,
        marginVertical:8,
        padding:6
    },
    checkBoxContainer:{
        display:"flex",
        flexDirection:"row",
        marginVertical:16,
        
    },
    checkBoxText:{
        color:"gray",
        marginLeft:5
    },
    button:{
        width:"100%",
        padding:16,
        
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
    },

})