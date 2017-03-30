import React, { PropTypes as T } from 'react'
import AuthService from '../../../utils/AuthService'
import styles from './styles.module.css'
import { sanitize } from 'google-caja'
import BPForm from '../../../components/BPChart/BPForm'

export class BPChart extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      systolic: '',
      diastolic: '',
      bpData: [],
    }
  }

  componentDidMount() {
    this.setState({bpData: this.props.auth.getPressures()})
  }

  handleBPFormUpdate = (key, val) => {
    const isNum = /^\d+$/
    const updatedVal = {...this.state}
    if (isNum.test(val) || val.length === 0) {
      if (this.state.systolic.length < 3 && key === 'systolic' ||this.state.diastolic.length < 3 && key === 'diastolic') {
        updatedVal[key] = val
        this.setState(updatedVal)
        return
      }
      updatedVal[key] = ''
      console.log(updatedVal[key], 'why start at one')
      this.setState(updatedVal)
    }
  }

  handleSubmitPressure = (pressures) => {
    if (this.state.systolic.length > 1  && this.state.systolic.length < 4  && this.state.systolic.length > 1 && this.state.diastolic.length < 4) {
      this.props.auth.submitPressure({diastolic: parseInt(this.state.diastolic), systolic: parseInt(this.state.systolic)})
    }
  }

  getPressures = () => {
    this.props.auth.getPressures()
  }

  logout = () => {
    this.props.auth.logout()
    this.context.router.push('/login')
  }

  render(){
    console.log(this.state,  'PARENT STATE')
    return (
      <div className={styles.root}>
        <BPForm bpState={this.state.diastolic} handleBPFormUpdate={this.handleBPFormUpdate} typeName={'diastolic'}/>
        <BPForm bpState={this.state.systolic} handleBPFormUpdate={this.handleBPFormUpdate} typeName={'systolic'}/>
        <button onClick={this.handleSubmitPressure}>submitPressure</button>
        <button onClick={this.logout}>LogOut</button>
      </div>
    )
  }
}

export default BPChart;
