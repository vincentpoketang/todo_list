import React,{Component} from 'react';
export default class AddForm extends Component{
	constructor(props){
		super(props);
		this.state={
			form: {
				title: '',
				details: ''
			}
		}
	}
	handleInputChange(event, type){
		const {form} = this.state;
		form[type] = event.target.value;
		this.setState({
			form:{...form}
		});
	}
	handleFormSubmit(event){
		event.preventDefault();
		const {form} = this.state;
		this.props.add(form);
		this.setState({
			form:{
				title:'',
				details:''
			}
		});
	}
	render(){
		const {form} = this.state;
		return (
			<form onSubmit={(event)=>this.handleFormSubmit(event)} className='form-inline'>
				<input 
					value={form.title} 
					className='form-control mb-2 mr-sm-2 mb-sm-0' 
					placeholder='Title'
					onChange={(event)=>this.handleInputChange(event,'title')}
				/>
				<input 
					value={form.details} 
					className='form-control mb-2 mr-sm-2 mb-sm-0' 
					placeholder='Details'
					onChange={(event)=>this.handleInputChange(event,'details')}
				/>
				<button className='btn btn-outline-success'>Add Item</button>
			</form>
		)
	}
}