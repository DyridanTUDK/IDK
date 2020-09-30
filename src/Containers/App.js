import React from 'react'
// import { robots } from './robots'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import { Component } from 'react'
import Scroll from '../Components/Scroll'
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then(users=>{this.setState({robots: users})})
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){
            return <h1>Loading.....</h1>
        }
        else{
        return(
            <div className='tc'>
            <h1 style={{fontSize:'7vw'}}>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
        );
        }
    }
}
export default App