import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Header } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//imports html/javascript from each page when their respective link is clicked
import {Join} from './components/Pages/Join';
import {Login} from './components/Pages/Login';
import {Survey} from './components/Pages/Survey';

//Home doesn't have a file in ./components/Pages sof the function is here
const Home = () => (
  <div></div>
)

class App extends Component {

  state = {
      dryness: "",
      oilness: "",
      redness: "",
      sensitivity: "",
      acne: "",
      wrinkles: false,
      scarring: false
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
  <div classNameName="App">
      {/*Routing to connect hyper links to other pages */ }
      <Router>
        <div>
          {/*Hyperlinks to click on to go to each page*/}
          {/*Links need to be styled*/}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/survey">Survey</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Join}/>
          <Route path="/login" component={Login}/>
          <Route path="/survey" component={Survey}/>
        </div>
      </Router>
      <form onSubmit={this.handleSubmit}>
        {/*Start of survey. Eventually will be moved to survey page. */}
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
                  <input type="radio" name="frequency" value="1" name="dryness"/>
                   <label>
                    <span className='answer-num'>
                      1 = Not Dry
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency" value="2" name="dryness"/>
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency" value="3" name="dryness"/>
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency" value="4" name="dryness"/>
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency" value="5" name="dryness"/>
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
                  <input type="radio" name="frequency2" value="1" name="oiliness"/>
                   <label>
                    <span className='answer-num'>
                      1 = Not Oily
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency2" value="2" name="oiliness"/>
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency2" value="3" name="oiliness"/>
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency2" value="4" name="oiliness"/>
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency2" value="5" name="oiliness"/>
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
                  <input type="radio" name="frequency3" value="1" name="redness"/>
                   <label>
                    <span className='answer-num'>
                      1 = Not Inflamed
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency3" value="2" name="redness"/>
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency3" value="3" name="redness"/>
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency3" value="4" name="redness"/>
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency3" value="5" name="redness"/>
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
                  <input type="radio" name="frequency4" value="1" name="sensitivity"/>
                   <label>
                    <span className='answer-num'>
                      1 = Not Sensitive
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency4" value="2" name="sensitivity"/>
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency4" value="3" name="sensitivity"/>
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency4" value="4" name="sensitivity"/>
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency4" value="5" name="sensitivity"/>
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
                  <input type="radio" name="frequency5" value="1" name="acne"/>
                   <label>
                    <span className='answer-num'>
                      1 = No Acne
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency5" value="2" name="acne"/>
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency5" value="3" name="acne"/>
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency5" value="4" name="acne"/>
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency5" value="5" name="acne"/>
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
                  <input type="radio" name="frequency6" value="true" name="wrinkles"/>
                   <label>
                    <span className='answer'>
                      Yes
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="frequency6" checked="checked" value="false" name="wrinkles"/>
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
                  <input
                    type="radio"
                    name="scarring"
                    value="true"
                    name="scarring"
                    onChange={e => this.change(e)}/>
                   <label>
                    <span className='answer'>
                      Yes
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="scarring"
                    checked="checked"
                    value="false"
                    name="scarring"
                    onChange={e => this.change(e)}/>
                   <label>
                    <span className='answer'>
                      No
                    </span>
                  </label>
                </div>
              </div>
            </div>
        </div>

        <div
          className="ui button"
          type="submit"
          value="Submit"
          onClick={e => this.onSubmit(e)}>
          Submit
        </div>
      </form>
</div>

    );
  }
}

export default App;
