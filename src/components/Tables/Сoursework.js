import React from 'react';
import { Table } from 'antd';


let url = 'https://jsonplaceholder.typicode.com/posts?userId=10';


/*const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];*/

const columns = [
    {
        title: 'userId',
        dataIndex: 'userId',
        key: 'userId',
    },
    {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'body',
        dataIndex: 'body',
        key: 'body',
    },
];



export default class Kursovie extends React.Component {

    updateData = (value) => {
        this.setState({ text: value })
      }

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

            <div className="students" >
              
                <h1>Курсовые</h1>
                <h2>{error}</h2>
                <Table 
                onRow={(record, rowIndex) => {
                    return {
                      onClick: event => {}, // click row
                      onDoubleClick: event => {}, // double click row
                      onContextMenu: event => {}, // right button click row
                      onMouseEnter: event => {}, // mouse enter row
                      onMouseLeave: event => {}, // mouse leave row
                    };
                  }}
                dataSource={todos} columns={columns} />

            </div>


        );
    }
}

