import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { render } from '@testing-library/react';
import { Button } from '@material-ui/core';
import AccessibleIcon from '@material-ui/icons/Accessible';


const buttonArray = [
  {
    id : 0,
    text: 'ФИО',
    icon: <PersonIcon />,
  },
  {
    id : 1,
    text: 'Группа',
    icon: <PeopleOutlineIcon />,
  },
  {
    id : 2,
    text: 'Возраст',
    icon: <DateRangeIcon />,
  },
  {
    id : 3,
    text: 'Студенты',
    icon: <AccountBalanceIcon />,
  },
  {
    id : 4,
    text: 'Курсовые',
    icon: <AccessibleIcon />,
  }
]

export default class Navigator extends React.Component {

  render() {

    return <div className=" navigator">
<h1>Навигатор</h1>
{buttonArray.map((button,i) =>
(   
        <div>
          
          {button.icon}
          <button  
          onClick = {() => { this.props.updateData(button.id) }} 
          className=" buttonInput" > {button.text} </button>
         
        </div>
      ))}
    </div>

  }
}

