import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addGiftee } from '../actions/getGiftees';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';


class AddGifteeForm extends Component {

  state = {
    birthday: false,
    birthdate: '',
    xmas: false,
    hanukka: false,
    mothersday: false,
    fathersday: false,
    valentines: false,
    anniday: false,
    annidate: ''
  }

  birthdayToggle = () => {
    this.setState({
      birthday: !this.state.birthday,
    });
  }

  xmasToggle = () => {
    this.setState({
      xmas: !this.state.xmas,
    });
  }

  hanukkaToggle = () => {
    this.setState({
      hanukka: !this.state.hanukka,
    });
  }

  mothersdayToggle = () => {
    this.setState({
      mothersday: !this.state.mothersday,
    });
  }

  fathersdayToggle = () => {
    this.setState({
      fathersday: !this.state.fathersday,
    });
  }

  valentinesToggle = () => {
    console.log('valentines day toggle');
    this.setState({
      valentines: !this.state.valentines,
    });
  }

  annidayToggle = () => {
    this.setState({
      anniday: !this.state.anniday,
    });
  }

  resetState = () => {
    this.setState({
      birthday: false,
      xmas: false,
      hanukka: false,
      mothersday: false,
      fathersday: false,
      valentines: false,
      anniday: false,
      annidate: '',
      birthdate: ''
    })
  }



  selectBDay(date){
    let strDate = date/*.toString().slice(3,10)*/
    this.setState({
      birthdate: strDate
    })
  }

  bDayCalendarPop = () => {
    if(this.state.birthday === true && this.state.birthdate === ''){
      let today = new Date();
      return (
        <div>
          select birthday
          <InfiniteCalendar
            onSelect={date => this.selectBDay(date)}
            displayOptions={{
              showHeader: false
            }}
            width={200}
            height={200}
            selected={today}
            />
        </div>
      )
    }
  }

  selectAnniDate(date){
    let strDate = date/*.toString().slice(3,10)*/
    this.setState({
      annidate: strDate
    })
    console.log(this.state.annidate);
  }

  anniDateCalendarPop = () => {
    if(this.state.anniday === true && this.state.annidate === ''){
      let today = new Date();
      return (
        <div>
          select anniversary
          <InfiniteCalendar
            onSelect={date => this.selectAnniDate(date)}
            displayOptions={{
              showHeader: false
            }}
            width={200}
            height={200}
            selected={today}
            />
        </div>
      )
    }
  }

  render () {

    // var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    // const dateToFormat = '1976-04-19T12:59-0500';
    // console.log('annidatedate', this.state.annidate)
    return (
      <div>
        <form
          onSubmit={e => { this.props.addGifteeAction(e.target.first.value, e.target.last.value, e.target.relationship.value, e.target.email.value, e.target.age.value, this.state.birthday, this.state.birthdate, e.target.birthday_price.value, this.state.xmas, e.target.xmas_price.value, this.state.hanukka, e.target.hanukka_price.value, this.state.mothersday, e.target.mothersdat_price.value, this.state.fathersday, e.target.fathersday_price.value, this.state.valentines, e.target.valentines_price.value, this.state.anniday, this.state.annidate, e.target.anniday_price.value, e.target.budget.value
          )
          e.preventDefault();
          this.resetState();
          e.target.reset();
        }}

        >
          <div className="form-group">
            <input className="form-control" name="first" placeholder="First Name" />
            <input className="form-control" name="last" placeholder="Last Name"/>
            <input className="form-control" name="relationship" placeholder="Relationship"/>
            <input className="form-control" name="email" placeholder="email"/>
            <input className="form-control" type="number" name="age" placeholder="Age"/>

            <p>
              <input
                type="checkbox"
                name="birthday"
                checked={this.state.birthday}
                onChange={this.birthdayToggle}
                id="birthday"
              />
              <label          htmlFor="birthday">Birthday</label>
            </p>

            {this.bDayCalendarPop()}

            {this.state.birthday ? <input className="form-control" type="number" name="birthday_price" placeholder="Birthday Budget"/> : ''}

            <p>
              <input
                type="checkbox"
                name="xmas"
                checked={this.state.xmas}
                onChange={this.xmasToggle}
                id="xmas"
              />
            <label          htmlFor="xmas">Christmas</label>
            </p>

            {this.state.xmas ? <input className="form-control" type="number" name="xmas_price" placeholder="Christmas Budget"/> : ''}

            <p>
              <input
                type="checkbox"
                name="hanukka"
                checked={this.state.hanukka}
                onChange={this.hanukkaToggle}
                id="hanukka"
              />
            <label          htmlFor="hanukka">Hanukka</label>
            </p>

            {this.state.hanukka ? <input className="form-control" type="number" name="hanukka_price" placeholder="Hanukka Budget"/> : ''}

            <p>
              <input
                type="checkbox"
                name="mothersday"
                checked={this.state.mothersday}
                onChange={this.mothersdayToggle}
                id="mothersday"
              />
            <label          htmlFor="mothersday">Mothers Day</label>
            </p>

            {this.state.mothersday ? <input className="form-control" type="number" name="mothersday_price" placeholder="Mothers Day Budget"/> : ''}

            <p>
              <input
                type="checkbox"
                name="fathersday"
                checked={this.state.fathersday}
                onChange={this.fathersdayToggle}
                id="fathersday"
              />
            <label          htmlFor="fathersday">Fathers Day</label>
            </p>

            {this.state.fathersday ? <input className="form-control" type="number" name="fathersday_price" placeholder="Fathers Day Budget"/> : ''}

            <p>
              <input
                type="checkbox"
                name="valentines"
                checked={this.state.valentines}
                onChange={this.valentinesToggle}
                id="valentines"
              />
            <label          htmlFor="valentines">Valentines Day</label>
            </p>

            {this.state.valentines ? <input className="form-control" type="number" name="valentines_price" placeholder="Valentines Day Budget"/> : ''}

            <p>
              <input
                type="checkbox"
                name="anniday"
                checked={this.state.anniday}
                onChange={this.annidayToggle}
                id="anniday"
              />
            <label          htmlFor="anniday">Anniversary</label>
            </p>

            {this.anniDateCalendarPop()}

            {this.state.anniday ? <input className="form-control" type="number" name="anniday_price" placeholder="Anniversary Budget"/> : ''}

            <select name='budget'>
              <option value='$0-$14'>$0-$14</option>
              <option value='$15-$29'>$15-$29</option>
              <option value='$30-$49'>$30-$49</option>
              <option value='$50-$99'>$50-$99</option>
              <option value='$100'>$100+</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>


      </div>
    )
  }
}


// function mapStateToProps(state, props){
//   return {
//     getGifts: state.getGifts
//   }
// }

function matchDispatchToProps(dispatch){
  return {
    addGifteeAction: bindActionCreators(addGiftee, dispatch),

  }
}
export default connect(null, matchDispatchToProps)(AddGifteeForm);
