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
    if(this.state.birthday === true && this.state.birthdate == ''){
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
    if(this.state.anniday === true && this.state.annidate == ''){
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
    const dateToFormat = '1976-04-19T12:59-0500';
    console.log('annidatedate', this.state.annidate)
    return (
      <div>
        <form
          onSubmit={e => { this.props.addGifteeAction(e.target.first.value, e.target.last.value, e.target.relationship.value, e.target.email.value, e.target.age.value, this.state.birthday, this.state.birthdate, this.state.xmas, this.state.hanukka, this.state.mothersday, this.state.fathersday, this.state.valentines, this.state.anniday, this.state.annidate, e.target.budget.value
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
            <label>
              Birthday
              <input type="checkbox" name="birthday" checked={this.state.birthday} onChange={this.birthdayToggle}/>
            </label>
            {this.bDayCalendarPop()}
            <label>
              Christmas
              <input type="checkbox" name="xmas" checked={this.state.xmas} onChange={this.xmasToggle}/>
            </label>
            <label>
              Hanukka
              <input type="checkbox" name="hanukka" checked={this.state.hanukka} onChange={this.hanukkaToggle}/>
            </label>
            <label>
              Mothers Day
              <input type="checkbox" name="mothersday" checked={this.state.mothersday} onChange={this.mothersdayToggle}/>
            </label>
            <label>
              Fathers Day
              <input type="checkbox" name="fathersday" checked={this.state.fathersday} onChange={this.fathersdayToggle}/>
            </label>
            <label>
              Valentines Day
              <input type="checkbox" name="valentines" checked={this.state.valentines} onChange={this.valentinesToggle}/>
            </label>
            <label>
              Anniversary
              <input type="checkbox" name="anniday" checked={this.state.anniday} onChange={this.annidayToggle}/>
            </label>
            {this.anniDateCalendarPop()}
            <select name='budget'>
              <option value='0-14'>$0-$14</option>
              <option value='15-29'>$15-$29</option>
              <option value='30-49'>$30-$49</option>
              <option value='50-99'>$50-$99</option>
              <option value='100'>$100+</option>
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
