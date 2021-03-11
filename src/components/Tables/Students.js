import React from 'react';
import { Table } from 'antd';

const url = 'https://jsonplaceholder.typicode.com/users';


//const dataSource = [
//  {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//    address: '10 Downing Street',
//  },
//  {
//       key: '2',
//       name: 'John',
//       age: 42,
//       address: '10 Downing Street',
//  },
//];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },

];


export default class Students extends React.Component {

    state = {
        todos: [],
        error: ''
    }
    async componentDidMount() {
        let todos = [];
        try {
            const result = await fetch(url)
            todos = await result.json()
            console.log(todos);
        }
        catch (err) {
            this.setState(
                { error: "Ошибка получения данных" }
            )
        }
        this.setState(
            { todos, }
        )
    }

    render() {
        const { error, todos } = this.state;
        return (

            <div className="students">
                <h1>Список студентов</h1>
                <h2>{error}</h2>
                <Table
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: (event) => {
                                console.log(record.id);
                                this.props.updateStudentsWork(record.id);
                            },
                            onDoubleClick: event => { }, // double click row
                            onContextMenu: event => { }, // right button click row
                            onMouseEnter: event => { }, // mouse enter row
                            onMouseLeave: event => { }, // mouse leave row
                        };
                    }}
                    dataSource={todos} columns={columns} />


            </div>


        );
    }
}

//В onClick ты должен вызывать функцию 
//с параметром record.id.В этой функции ты вызываешь пропс 
//с новым значением меняя пропс, ты рендеришь класс курсовых работ