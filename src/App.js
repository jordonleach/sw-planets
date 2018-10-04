import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

class App extends Component {
	constructor() {
		super()
		this.state = {
			planets: [],
			searchfield: '',
			showModal: false
		};
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	componentDidMount() {
		fetch('https://swapi.co/api/planets/?format=json')
			.then(response => response.json())
			.then(data => this.setState({planets: data.results}));
	}

	handleOpenModal () {
    this.setState({ showModal: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredPlanets = this.state.planets.filter(planet => {
			return planet.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.planets.length === 0) {
			return <h1>Loading...</h1>
		} else {
				return (
					<div className='tc'>
						<div>
							<h1 className='f1 washed-yellow dib br2 pa3 ma2 bw2 shadow-5'><span>Star Wars</span><br/>Planets</h1>
						</div>
						<SearchBox searchChange={this.onSearchChange}/>
						<CardList planets={filteredPlanets} onClick={this.handleOpenModal}/>
						<ReactModal
							isOpen={this.state.showModal}
							onAfterOpen={this.afterOpenModal}
           		onRequestClose={this.handleCloseModal}
           		contentLabel="Example Modal"
           	>
           		<h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
           		<button onClick={this.handleCloseModal}>Close</button>
           	</ReactModal>
					</div>
				);
		}
	}
}

export default App;