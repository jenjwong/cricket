import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'
import { sanitize } from 'google-caja'

export class BPForm extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.state = {
        isDelete:false
      }
    }

  sanitizeInput = (e) => {
    const sanitizedInput = sanitize(e.target.value)
    this.props.handleBPFormUpdate(e.target.name, sanitizedInput)
  }

  render(){
    return (
      <div className={styles.root}>
        Best BP Chart Ever
        <input type='text' name={this.props.typeName} onChange={(e) => this.sanitizeInput(e)} onTouchEnd={(e) => this.sanitizeInput(e)} value={this.props.bpState}/>
      </div>
    )
  }
}

export default BPForm;
