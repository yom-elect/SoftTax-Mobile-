import React, {useState} from 'react';
import {View,StyleSheet, Picker, Button} from 'react-native';
import {  Text } from "galio-framework";
import RaiseAssessment from '../screens/modals/RaiseAssesment'
import {argonTheme} from '../constants/'


const NewAssessment = ({navigation}) => {

    const [isAssessmentMode, setIsAssessmentMode] = useState(false)
    const [selectedYear, setSelectedYear] = useState('')
    const user = navigation.getParam('taxPayer')

      assessmentHandler = ()=>{
        setIsAssessmentMode(true)
      }
    
      closeAssessmentHandler = ()=>{
        setIsAssessmentMode(false)
      }
    
    return (
        <View>
             <RaiseAssessment 
              taxPayer = {user}
              year= {selectedYear}
             visible ={isAssessmentMode} 
             close= {this.closeAssessmentHandler}/>
            <View style= {styles.payer}>
              <Text color='#fff'>{user.name}({user.stateRegNumber}) </Text>
            </View>
            <View>
              <View style={styles.heading}>
                <Text size ={18} >Raise Direct Assessment</Text>
              </View>
              <View style ={styles.pick}>
                <Picker
                    //style={styles.picker}
                    selectedValue = {selectedYear}
                    onValueChange = {(itemValue,itemIndex)=>setSelectedYear(itemValue)} >
                        <Picker.Item label= "Select Start Year" value ="" disable/>
                        <Picker.Item label="2011" value='2011'/>
                        <Picker.Item label="2012" value='2012'/>
                </Picker>
              </View>
                <View>
                <Button title= "Informal Sector" 
                color={argonTheme.COLORS.APP_COLOUR} 
                onPress={assessmentHandler}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
  heading:{
      padding:15,
      borderBottomColor: argonTheme.COLORS.WARNING,
      borderWidth: 2
  },
  payer :{
    backgroundColor: '#3B3736',
    height : 44,
    justifyContent:'center',
    alignItems: 'center',
  },
  wrapper:{
    flex:1,
    // padding :20,
    // marginBottom: 20
  },
  pick:{
    margin: 10,
    marginBottom:40,
    borderRadius: 10,
    borderWidth: 1, 
    borderColor: '#bdc3c7', 
    overflow: 'hidden'
  },
})
export default NewAssessment;