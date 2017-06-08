import React,{Component} from 'react';
import './style.css';

class ViewList extends Component {
	render(){
		const listElements = this.props.list.map((item, index)=>(
			<div className={item.completed?'alert alert-success':'alert alert-danger'}>
				<li key={index} className='list-group-item'>
					<span onClick={()=>this.props.complete(index)} className={item.completed?'fa fa-check-square-o px-2':'fa fa-square-o px-2'}></span>
					<span className={item.completed?'strike':''}>{`${item.title}`}</span>
					<span className='ml-auto'>
						<span className='fa fa-info-circle px-2'></span>
						<button className='btn btn-outline-danger' onClick={()=>this.props.delete(index)}>Delete</button>
					</span>
				</li>
			</div>
		));
		return (
			<div>
				<ul className='list-group'>
					{listElements}
				</ul>
			</div>
		)
	}
}

export default ViewList;