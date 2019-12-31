import React from "react";
import { ScrollView, StyleSheet, Dimensions, Picker,Modal ,View } from "react-native";
import { withNavigation } from 'react-navigation';
import { 
  Table, 
  TableWrapper, 
  Row, Rows, 
  Col, Cols,
   Cell } from 'react-native-table-component';
// Galio components
import { Block, Text, Button } from "galio-framework";
// Argon themed components

import {argonTheme} from '../../constants/'

const { width } = Dimensions.get("screen");

class RaiseAssessment extends React.Component {
  state = {
    tableData: [
      ['Assessment Amount', '2'],
      ['Interest Chargeable', 'b'],
      ['Additional Penalty', 'h'],
      ['', '2']
    ]
  }


renderTable = ()=> {
   const {tableData} = this.state
  return (
    <View style={styles.container} >
      <Table borderStyle={{borderWidth: 1}}>
        <Row data={['#', 'Tax Item', 'Amount']}  
        flexArr = {[1,6,6]} style ={styles.head}
        textStyle = {styles.text} />
        <TableWrapper style= {styles.wrapper} >
          <Col data={['1', '2', '3', '']} 
            style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
          <Rows data={tableData}  flexArr={[6, 6]} style={styles.row} textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
  </View>
  )
}

  render() {
      const {navigation, close, visible, taxPayer,year} = this.props
      
    return (
        <Modal visible ={visible} animationType="slide">
          <Block  style = {styles.payer}>
              <Text color= "#fff">{taxPayer.name} ({taxPayer.stateRegNumber})</Text>
          </Block>
          <Block style={styles.heading} >
            <Text>INFORMAL SECTOR ASSESSMENT</Text>
         </Block>
         <Block style={styles.blockContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          <Block style= {styles.raise}>
               <Text size = {18}>Raise Assessment for Year {year}</Text>
          </Block>
          <View style={styles.inputContainer}>
            <Block flex row style={{padding:20}}>
                <Text> Customer Category:</Text>
                <Block>
                  <View style ={styles.pick}>
                        <Picker
                        style={styles.picker}
                        selectedValue = "Select Profession"
                        onValueChange = {()=>console.log('changed')} >
                            <Picker.Item label="INFORMAL SECTOR/ARTISANS" value="IT"/>
                            <Picker.Item label="LAWYERS" value="Agric"/>
                      </Picker>
                  </View>
                  <View style ={styles.pick}>
                        <Picker
                        style={styles.picker}
                        selectedValue = "Select Division"
                        onValueChange = {()=>console.log('changed')} >
                            <Picker.Item label="Rice Miller" value="IT"/>
                            <Picker.Item label="Cloth Weaver" value="Agric"/>
                    </Picker>
                  </View>
                </Block>
            </Block>
            {this.renderTable()}
            <Block row style={styles.buttonContainer}>
                <Button style={styles.button} flex onPress={close} color ={argonTheme.COLORS.ERROR}>
                        Cancel
                </Button>

                <Button style={styles.button} onPress={()=>
                    navigation.navigate('Customer')} color ={argonTheme.COLORS.APP_COLOUR}>
                        Fill Assessment
                </Button>
            </Block>
          </View>
        </ScrollView>
      </Block>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    raise:{
      padding:15,
      borderBottomWidth: 1,
       borderBottomColor:argonTheme.COLORS.BORDER_COLOR
      },
    blockContainer: {
        flex :1,
        alignItems:'center',
        padding: 10,
    },
    heading:{
      padding:15,
      borderBottomColor: argonTheme.COLORS.WARNING,
      borderWidth: 2
  },
    payer :{
      backgroundColor: '#3B3736',
      justifyContent:'center',
      alignItems: 'center',
      height:80,
    },
    inputContainer:{
      flex : 1,
        minWidth: 300,
        width: '90%',
        maxWidth:'95%',
    },
    picker: {
      width: 150,
    },
    buttonContainer: {
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
    },
    button :{
        // width: 100
        width: Dimensions.get('window').width / 4,
    },
    pick:{
      margin: 10,
      // marginBottom:40,
      borderRadius: 10,
      borderWidth: 1, 
      borderColor: '#bdc3c7', 
      overflow: 'hidden'
    },
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 10, 
    backgroundColor: '#fff'
   },
  head: {  
    height: 40,  
    backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: {
     flex: 1,
      backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});

export default withNavigation(RaiseAssessment) ;