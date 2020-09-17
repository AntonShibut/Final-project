import React from 'react'


export default class FormSearche extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault(); //логика по поиску
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Фильм:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input /* onClick={handleSubmit}*/ type="submit" value="Поиск" />
            </form>
        );
    }
}