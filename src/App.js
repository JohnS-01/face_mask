import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import 'semantic-ui-css/semantic.min.css';
//import { Button, Container, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
  <div classNameName="App">
      <div className="ui form">
          {/* Question 1 */}
          <div className="inline fields">
              <label>
                <span className="question">
                  How dry is your skin?
                </span>
              </label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                 <label>
                  <span className='answer-num'>
                    1 = Not Dry
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                 <label>
                  <span className='answer-num'>
                    2
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                 <label>
                  <span className='answer-num'>
                    3
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                 <label>
                  <span className='answer-num'>
                    4
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>
                  <span className='answer-num'>
                    5 = Very Dry
                  </span>
                </label>
              </div>
            </div>
          </div>
          <br />
          {/* Question 2 */}
          <div className="inline fields">
              <label>
                <span className="question">
                  How oily is your skin?
                </span>
              </label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency2" />
                 <label>
                  <span className='answer-num'>
                    1 = Not Oily
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency2" />
                 <label>
                  <span className='answer-num'>
                    2
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency2" />
                 <label>
                  <span className='answer-num'>
                    3
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency2" />
                 <label>
                  <span className='answer-num'>
                    4
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency2" />
                <label>
                  <span className='answer-num'>
                    5 = Very Oily
                  </span>
                </label>
              </div>
            </div>
          </div>
          <br />
          {/* Question 3 */}
          <div className="inline fields">
              <label>
                <span className="question">
                  How red (inflamed) is your skin?
                </span>
              </label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency3" />
                 <label>
                  <span className='answer-num'>
                    1 = Not Inflamed
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency3" />
                 <label>
                  <span className='answer-num'>
                    2
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency3" />
                 <label>
                  <span className='answer-num'>
                    3
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency3" />
                 <label>
                  <span className='answer-num'>
                    4
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency3" />
                <label>
                  <span className='answer-num'>
                    5 = Very Inflamed
                  </span>
                </label>
              </div>
            </div>
          </div>
          <br />
          {/* Question 4 */}
          <div className="inline fields">
              <label>
                <span className="question">
                  How sensitive is your skin?
                </span>
              </label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency4" />
                 <label>
                  <span className='answer-num'>
                    1 = Not Sensitive
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency4" />
                 <label>
                  <span className='answer-num'>
                    2
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency4" />
                 <label>
                  <span className='answer-num'>
                    3
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency4" />
                 <label>
                  <span className='answer-num'>
                    4
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency4" />
                <label>
                  <span className='answer-num'>
                    5 = Very Sensitive
                  </span>
                </label>
              </div>
            </div>
          </div>
          <br />
          {/* Question 5 */}
          <div className="inline fields">
              <label>
                <span className="question">
                  How much does acne affect your skin?
                </span>
              </label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency5" />
                 <label>
                  <span className='answer-num'>
                    1 = No Acne
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency5" />
                 <label>
                  <span className='answer-num'>
                    2
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency5" />
                 <label>
                  <span className='answer-num'>
                    3
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency5" />
                 <label>
                  <span className='answer-num'>
                    4
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency5" />
                <label>
                  <span className='answer-num'>
                    5 = Frequent Breakouts
                  </span>
                </label>
              </div>
            </div>
          </div>
          <br />
          {/* Question 6 */}
          <div className="inline fields">
              <label>
                <span className="question">
                  Do you deal with wrinkles?
                </span>
              </label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency6" />
                 <label>
                  <span className='answer'>
                    Yes
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency6" />
                 <label>
                  <span className='answer'>
                    No
                  </span>
                </label>
              </div>
            </div>
          </div>
          <br />
          {/* Question 7 */}
          <div className="inline fields">
              <label>
                <span className="question">
                  Do you deal with facial scarring?
                </span>
              </label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency7" />
                 <label>
                  <span className='answer'>
                    Yes
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency7"  />
                 <label>
                  <span className='answer'>
                    No
                  </span>
                </label>
              </div>
            </div>
          </div>
      </div>
</div>
    );
  }
}

export default App;
