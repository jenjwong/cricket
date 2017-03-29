import React, { PropTypes as T } from 'react'
import AuthService from '../../../utils/AuthService'
import styles from './styles.module.css'

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
  }

  render(){
    return (
      <div className={styles.root}>
      BPChart
      </div>
    )
  }
}

export default Home;
