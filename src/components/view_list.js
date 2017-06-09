import React,{Component} from 'react';
import './style.css';

class ViewList extends Component {
	render(){
		const listElements = this.props.list.map((item, index)=>(
			<div className={item.complete?'alert alert-success':'alert alert-danger'}>
				<li key={index} className='list-group-item'>
					<span onClick={()=>this.props.complete(item._id)} className={item.complete?'fa fa-check-square-o px-2':'fa fa-square-o px-2'}></span>
					<span className={item.complete?'strike':''}>{`${item.title}`}</span>
					<span className='ml-auto'>
						<span className='fa fa-info-circle px-2'></span>
						<button className='btn btn-outline-danger' onClick={()=>this.props.delete(item._id)}>Delete</button>
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