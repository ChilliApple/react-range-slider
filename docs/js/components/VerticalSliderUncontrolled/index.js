/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';
import { Slider } from 'reactrangeslider'; // eslint-disable-line import/no-unresolved
import Codemirror from 'react-codemirror';
require('codemirror/mode/jsx/jsx');

export default class VerticalSliderUncontrolled extends Component {

  state: any = {
    value: 50,
  };

  onChange: Function = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.root}>
        <span className={styles.description}>
          A uncontrolled vertical-slider with single handle
        </span>
        <span className={styles.info}>
          parameters - step: 2, orientation: vertical
        </span>
        <span className={styles.info}>
          styling using classes
        </span>
        <div className={styles.sliderWrapper}>
          <Slider
            step={2}
            orientation="vertical"
            defaultValue={value}
            onChange={this.onChange}
            handleClassName={styles.sliderHandle}
          />
        </div>
        <div className={styles.stateValue}>
          <span className={styles.valueText}>value: </span>
          {value}
        </div>
        <div className={styles.code}>
          <Codemirror
            value={'<Slider\n  step={2}\n  orientation="vertical"\n  ' +
              'defaultValue={value}\n  onChange={this.onChange}\n  ' +
              'handleClassName={styles.sliderHandle}\n/>'}
            options={{
              lineNumbers: true,
              mode: 'jsx',
              readOnly: true,
            }}
          />
        </div>
      </div>
    );
  }
}
