import React from "react";
import { DataTable } from 'react-native-paper';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import RaiseAssessment from '../screens/modals/RaiseAssesment'
// Argon themed components
// import { argonTheme, tabs } from "../constants/";
// import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class Elements extends React.Component {
  state = {
    isAssessmentMode : false,
  }

  assessmentHandler = ()=>{
    this.setState({
      isAssessmentMode: true
    })
  }

  closeAssessmentHandler = ()=>{
    this.setState({
      isAssessmentMode: false,
    })
  }

  render() {
    const {isAssessmentMode} = this.state
    return (
      <Block flex>
        <RaiseAssessment visible ={isAssessmentMode} close= {this.closeAssessmentHandler}/>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          <Block flex>
            <Text>This is single Individual or Coorporate record</Text>
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
            activeOpacity={0.6} 
           onPress={this.assessmentHandler}>
              <Text>New Customer Assessment</Text>
          </TouchableOpacity>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default Elements;