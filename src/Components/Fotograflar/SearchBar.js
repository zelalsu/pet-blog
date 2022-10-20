import React, { Component } from 'react';
import "./searchbar.css"

 class SearchBar extends Component {
	 state=
	 {
		search:''
	 };

	inputChanged = event =>
	{
		 console.log(event.target.value);

		this.setState({
			search:event.target.value 
		});
	}
	searchImage = () =>
	{
		 console.log("basarılı");
		this.props.onSearchImage(this.state.search)//propslara parametre olarak geçiliyor. App js e parametre olarak search keyword u gidiyor
	//app.js te axios ile search parametresi gidiyor
	}

	render()
	{
		return (
			//inputumuzda hem enter  a basınca çalılıyor hem de arama butonuna basınca çalışıyor
			<div className="search-bar-container ui input">
			<input type="text" onKeyPress={(e) => {
			if(e.key === 'Enter')
			{
				this.searchImage();
			}
			}} 
			onChange={this.inputChanged} placeholder="Ara..."/>
				<button className="ui icon button" onClick={this.searchImage}>
						<i className="search icon"></i>
				</button>						
				</div>
						
		)
	}
	
}

export default SearchBar;