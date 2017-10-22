import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addOccasions } from '../actions/getOccasions';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';


class AddOccasionsForm extends Component {

  state = {
    birthday: false,
    birthdate: '',
    birthday_price: null,
    xmas: false,
    xmas_price: null,
    hanukka: false,
    hanukka_price: null,
    mothersday: false,
    mothersday_price: null,
    fathersday: false,
    fathersday_price: null,
    valentines: false,
    valentines_price: null,
    anniday: false,
    annidate: '',
    anniday_price: null
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
    console.log('valentines hit');
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
      birthdate: '',
      birthday_price: null,
      xmas: false,
      xmas_price: null,
      hanukka: false,
      hanukka_price: null,
      mothersday: false,
      mothersday_price: null,
      fathersday: false,
      fathersday_price: null,
      valentines: false,
      valentines_price: null,
      anniday: false,
      annidate: '',
      anniday_price: null

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

    // console.log('giftee from add occasions form', this.props.giftee.first_name, this.props.giftee);
    return (
      <div className="row">
        
        <form
          onSubmit={e => { this.props.addOccasionsAction(
            this.props.giftee.id,
            this.state.birthday,
            this.state.birthdate,
            this.state.birthday_price,
            this.state.xmas,
            this.state.xmas_price,
            this.state.hanukka,
            this.state.hanukka_price,
            this.state.mothersday,
            this.state.mothersday_price,
            this.state.fathersday,
            this.state.fathersday_price,
            this.state.valentines,
            this.state.valentines_price,
            this.state.anniday,
            this.state.annidate,
            this.state.anniday_price
          )
          e.preventDefault();
          this.resetState();
          e.target.reset();
        }}

        >
          <div className="col s6">
            <p>
              <input
                type="checkbox"
                name="birthday"
                checked={this.state.birthday}
                onChange={this.birthdayToggle}
                id="birthday"
              />
              <label className='form-control1' htmlFor="birthday">Birthday</label>
            </p>

            {this.bDayCalendarPop()}

            {this.state.birthday ? <input
                className="form-control"
                type="number"
                name="birthday_price"
                placeholder="Birthday Budget"
                onChange={e => this.setState({ birthday_price: e.target.value })}
            />
            : ''}

            <p>
              <input
                type="checkbox"
                name="xmas"
                checked={this.state.xmas}
                onChange={this.xmasToggle}
                id="xmas"
              />
            <label className='form-control1' htmlFor="xmas">Christmas</label>
            </p>

            {this.state.xmas ? <input className="form-control" type="number" name="xmas_price" placeholder="Christmas Budget" onChange={e => this.setState({xmas_price: e.target.value})}/> : ''}

            <p>
              <input
                type="checkbox"
                name="hanukka"
                checked={this.state.hanukka}
                onChange={this.hanukkaToggle}
                id="hanukka"
              />
            <label className='form-control1' htmlFor="hanukka">Hanukka</label>
            </p>

            {this.state.hanukka ? <input className="form-control" type="number" name="hanukka_price" placeholder="Hanukka Budget" onChange={e => this.setState({hanukka_price: e.target.value})}/> : ''}

            <p>
              <input
                type="checkbox"
                name="mothersday"
                checked={this.state.mothersday}
                onChange={this.mothersdayToggle}
                id="mothersday"
              />
            <label className='form-control1' htmlFor="mothersday">Mothers Day</label>
            </p>

            {this.state.mothersday ? <input className="form-control" type="number" name="mothersday_price" placeholder="Mothers Day Budget" onChange={e => this.setState({mothersday_price: e.target.value})}/> : ''}

          </div>
          <div className="col s6">

            <p>
              <input
                type="checkbox"
                name="fathersday"
                checked={this.state.fathersday}
                onChange={this.fathersdayToggle}
                id="fathersday"
              />
            <label className='form-control1' htmlFor="fathersday">Fathers Day</label>
            </p>

            {this.state.fathersday ? <input className="form-control" type="number" name="fathersday_price" placeholder="Fathers Day Budget" onChange={e => this.setState({fathersday_price: e.target.value})}/> : ''}

            <p>
              <input
                type="checkbox"
                name="valentines"
                checked={this.state.valentines}
                onChange={this.valentinesToggle}
                id="valentines"
              />
            <label className='form-control1'  htmlFor="valentines">Valentines Day</label>
            </p>

            {this.state.valentines ? <input className="form-control" type="number" name="valentines_price" placeholder="Valentines Day Budget" onChange={e => this.setState({valentines_price: e.target.value})}/> : ''}

            <p>
              <input
                type="checkbox"
                name="anniday"
                checked={this.state.anniday}
                onChange={this.annidayToggle}
                id="anniday"
              />
            <label className='form-control1' htmlFor="anniday">Anniversary</label>
            </p>

            {this.anniDateCalendarPop()}

            {this.state.anniday ? <input className="form-control" type="number" name="anniday_price" placeholder="Anniversary Budget" onChange={e => this.setState({anniday_price: e.target.value})}/> : ''}


            <div className="form-group">
              <input type="submit" className="btn btn-primary" />
            </div>

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
    addOccasionsAction: bindActionCreators(addOccasions, dispatch),

  }
}
export default connect(null, matchDispatchToProps)(AddOccasionsForm);
