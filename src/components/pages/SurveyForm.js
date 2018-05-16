import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

class Survey extends Component {

  state = {
      dryness: "",
      oiliness: "",
      redness: "",
      sensitivity: "",
      acne: "",
      wrinkles: false,
      scarring: false
  }

  /*function to allow changing values for text inputs
    might not be need for radio buttons */
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  /* For the sumbit button for the survey */
  onSubmit = (e) => {
    e.preventDefault(); //stops JSON information from being posted to url
    console.log(this.state);
  }

  render() {
    return (
  <div className="App">
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
                  <input
                    type="radio"
                    name="dryness"
                    value="1"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      1 = Not Dry
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="dryness"
                    value="2"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="dryness"
                    value="3"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                      name="dryness"
                      value="4"
                      onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="dryness"
                    value="5"
                    onChange={e => this.change(e)} />
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
                  <input
                    type="radio"
                    name="oiliness"
                    value="1"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      1 = Not Oily
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="oiliness"
                    value="2"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="oiliness"
                    value="3"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="oiliness"
                    value="4"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="oiliness"
                    value="5"
                    onChange={e => this.change(e)} />
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
                  <input
                    type="radio"
                    name="redness"
                    value="1"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      1 = Not Inflamed
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="redness"
                    value="2"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="redness"
                    value="3"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="redness"
                    value="4"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="redness"
                    value="5"
                    onChange={e => this.change(e)} />
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
                  <input
                    type="radio"
                    name="sensitivity"
                    value="1"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      1 = Not Sensitive
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="sensitivity"
                    value="2"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="sensitivity"
                    value="3"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="sensitivity"
                    value="4"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="sensitivity"
                    value="5"
                    onChange={e => this.change(e)} />
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
                  <input
                    type="radio"
                    name="acne"
                    value="1"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      1 = No Acne
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="acne"
                    value="2"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      2
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="acne"
                    value="3"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      3
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="acne"
                    value="4"
                    onChange={e => this.change(e)} />
                   <label>
                    <span className='answer-num'>
                      4
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="acne"
                    value="5"
                    onChange={e => this.change(e)} />
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
                  <input
                    type="radio"
                    name="wrinkles"
                    value="true"
                    onChange={e => this.change(e)} />
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
                    name="wrinkles"
                    checked="checked"
                    value="false"
                    onChange={e => this.change(e)} />
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

export default Survey;
