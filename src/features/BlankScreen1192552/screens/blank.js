import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)
    this.state = { CheckBox_5: true, CheckBox_19: true, CheckBox_21: true }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <CheckBox
        title="New Construction"
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
      <CheckBox
        title="Interior Remodel"
        containerStyle={styles.CheckBox_19}
        checked={this.state.CheckBox_19}
        onPress={nextChecked => this.setState({ CheckBox_19: nextChecked })}
      />
      <CheckBox
        title="Exterior Remodel"
        checked={this.state.CheckBox_21}
        onPress={nextChecked => this.setState({ CheckBox_21: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  CheckBox_5: {},
  CheckBox_19: { alignSelf: "flex-start" },
  CheckBox_21: {}
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
