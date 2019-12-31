import React from "react";
import { DataTable } from 'react-native-paper';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import RaiseAssessment from '../screens/modals/RaiseAssesment'
// Argon themed components
// import { argonTheme, tabs } from "../constants/";
// import { Button, Select, Icon, Input, Header, Switch } from "../components/";
import Header from "../components/Header";


const { width } = Dimensions.get("screen");

class Elements extends React.Component {
  state = {
    taxPayer : {}
  }

  componentDidMount(){
    const user = this.props.navigation.getParam('user')
    this.setState({taxPayer: user})
  }
  
  render() {
    const {navigation} = this.props
    const {taxPayer} = this.state
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          <Block flex style= {styles.payer}>
              <Text color= "#fff">{taxPayer.name}({taxPayer.stateRegNumber})</Text>
          </Block>
          <Block >
            <DataTable>
              <DataTable.Header>
              <DataTable.Title>Assesment Number</DataTable.Title>
              <DataTable.Title numeric>Due Date</DataTable.Title>
              <DataTable.Title numeric>Amount</DataTable.Title>
              <DataTable.Title numeric>Rebate</DataTable.Title>
              <DataTable.Title numeric>Payment</DataTable.Title>
              <DataTable.Title numeric>Outstanding</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>CON-0010172-1435003375 (2018)</DataTable.Cell>
              <DataTable.Cell numeric>159</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>POO-0010172-1435003375 (2015)</DataTable.Cell>
              <DataTable.Cell numeric>237</DataTable.Cell>
              <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>SCGT-0010172-1435003375 (2012)</DataTable.Cell>
              <DataTable.Cell numeric>237</DataTable.Cell>
              <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>INF-0010172-1435003375 (2011)</DataTable.Cell>
              <DataTable.Cell numeric>237</DataTable.Cell>
              <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>CON-0010172-1435003376 (2019)</DataTable.Cell>
              <DataTable.Cell numeric>237</DataTable.Cell>
              <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={(page) => { console.log(page); }}
              label="1-2 of 6"
            />
            </DataTable>
          </Block>
          <TouchableOpacity 
            style= {{justifyContent:'center', alignItems:'center'}}
            activeOpacity={0.6} 
           onPress={()=>navigation.navigate('NewAssessment', {taxPayer})}>
              <Text >New Customer Assessment</Text>
          </TouchableOpacity>
        </ScrollView>
      </Block>
    );
  }
}

// Elements.navigationOptions = navData => {
//   return  {
//     header: <Header title="Assessment"  navigation={navData} />
//   }
// }

const styles = StyleSheet.create({
  payer :{
    backgroundColor: '#3B3736',
    height : 44,
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default Elements;