import React from 'react';
import StudentsTable from './Tables/Students'
import KursTable from './Tables/Сoursework'


const Array2 = [
  {
    title : 'Филимонов Кирилл Константинович', 
  },
  {
    title: 'ИВТ-11-17',
  },
  {
    title: '21',
  },
  {
    title: <StudentsTable/>,
  },
  {
    title: <KursTable/>,
  }
]

export default class Dashboard extends React.Component {

  handlClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(false);
  }

  render() {
    //console.log(this.props.text);


    return (

      <div className="dashboard"> Dashboard
        <button onClick={this.handlClick} className="buttonExit"> Выйти </button>

        <div className="FIO">
          {
             Array2[this.props.id].title
        
          }


        </div>

      </div>


    );
  }
}

