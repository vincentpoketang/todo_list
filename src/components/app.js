import React, {Component} from 'react';
import ViewList from './view_list';
import AddForm from './add_form';
import './style.css';
import axios from 'axios';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list: []
		}
		this.BASE_URL = 'http://api.scottbowlerdev.com';
		this.API_KEY = '?key=jackrayallday';
	}
	componentDidMount(){
		this.getData();
	}
	getData(){
		axios.get(`${this.BASE_URL}/todos${this.API_KEY}`).then((resp)=>{
			console.log('componentDidMount Server Response:',resp.data.todos);
			
			this.setState({
				list:resp.data.todos
			})
		});
	}
	addItem(item){
		console.log('addItem in App. Item is:',item);
		//const addItem = {completed: false, ...item};
		axios.post(`${this.BASE_URL}/todos${this.API_KEY}`,item).then((resp)=>{
			console.log('Server resp:',resp.data.success);
			if(resp.data.success){
				this.getData();
			}
		});
	}
	deleteItem(index){
		/*const {list} = this.state;
		list.splice(index,1);
		this.setState({
			list:[...list]
		});*/
		console.log('Item id of item to be deleted:',index);
		axios.delete(`${this.BASE_URL}/todos/${index + this.API_KEY}`).then((resp)=>{
			console.log('Resp from Delete',resp);
			if(resp.data.success){
				this.getData();
			}
		});
	}
	completeItem(index){
		/*const {list} = this.state;
		list[index].complete = !list[index].complete;
		this.setState({
			list:[...list]
		});*/
		console.log('Item id of item to be complete:',index);
		axios.put(`${this.BASE_URL}/todos/${index + this.API_KEY}`).then((resp)=>{
			console.log('Resp from Complete',resp);
			if(resp.data.success){
				this.getData();
			}
		});
	}
	render(){
		return(
			<div className="container">
				<h1>To Do List</h1>
				<AddForm add={(item)=>this.addItem(item)}/>
				<br/>
				<ViewList 
					list={this.state.list} 
					delete={(index)=>this.deleteItem(index)} 
					complete={(index)=>this.completeItem(index)}
				/>
			</div>
		);
	}
}

export default App;
