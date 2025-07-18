import { useState } from 'react'
import './App.css'

function Basics({ type }) {
	const [ items, setItems ] = useState(["Default"])

	function addItem(){
		const itemNameInput = document.querySelector('#input-basics-item-name-input')
		const itemName = itemNameInput.value
		setItems((prev) => {
			return [...prev, itemName]
		})
		itemNameInput.value = ""
	}

	if (type == "input") {
		return (
			<div id="input-basics-container" className="input-containers">
				<h2>Basics</h2>
				<div id="input-basics-itembox" className="input-itembox">
					{items.map((itemName) => {
						return(
							<div key={itemName} className="input-basics-item input-item">
								<h3>{itemName}</h3>
								<div>
									<label htmlFor={"input-basics-name-" + itemName}>Name</label>
									<input type="text" id={"input-basics-name-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-basics-headline-" + itemName}>Headline</label>
									<input type="text" id={"input-basics-headline-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-basics-location-" + itemName}>Location</label>
									<input type="text" id={"input-basics-location-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-basics-phone-" + itemName}>Phone</label>
									<input type="number" id={"input-basics-phone-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-basics-email-" + itemName}>Email</label>
									<input type="email" id={"input-basics-email-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-basics-website-" + itemName}>Website</label>
									<input type="url" id={"input-basics-website-" + itemName} />
								</div>
								<button id={"input-basics-delete-btn-" + itemName} className="input-delete-btn">Delete</button>
							</div>
						)
					})}
					<input type="text" id="input-basics-item-name-input" />
					<button id="input-basics-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
				</div>
			</div>
		)
	}
}

function Summary({ type }) {
	if (type == "input") {
		return (
			<div id="input-summary-container" className="input-containers">
				<h2>Summary</h2>
				<input type="text" id="input-summary-desc" />
			</div>
		)
	}
}

function Experience({ type }) {
	const [ items, setItems ] = useState(["Default"])

	function addItem(){
		const itemNameInput = document.querySelector('#input-experience-item-name-input')
		const itemName = itemNameInput.value
		setItems((prev) => {
			return [...prev, itemName]
		})
		itemNameInput.value = ""
	}

	if (type == "input") {
		return (
			<div id="input-experience-container" className="input-containers">
				<h2>Experience</h2>
				<div id="input-experience-itembox" className="input-itembox">
					{items.map((itemName) => {
						return(
							<div key={itemName} className="input-experience-item input-item">
								<h3>{itemName}</h3>
								<div>
									<label htmlFor={"input-experience-company-" + itemName}>Company</label>
									<input type="text" id={"input-experience-company-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-experience-position-" + itemName}>Position</label>
									<input type="text" id={"input-experience-position-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-experience-daterange-" + itemName}>Date Range</label>
									<input type="text" id={"input-experience-daterange-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-experience-location-" + itemName}>Location</label>
									<input type="text" id={"input-experience-location-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-experience-website-" + itemName}>Website</label>
									<input type="url" id={"input-experience-website-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-experience-summary-" + itemName}>Summary</label>
									<input type="text" id={"input-experience-summary-" + itemName} />
								</div>
								<button id={"input-experience-delete-btn-" + itemName} className="input-delete-btn">Delete</button>
							</div>
						)
					})}
					<input type="text" id="input-experience-item-name-input" />
					<button id="input-experience-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
				</div>
			</div>
		)
	}
}

function Projects({ type }) {
	const [ items, setItems ] = useState(["Default"])

	function addItem(){
		const itemNameInput = document.querySelector('#input-projects-item-name-input')
		const itemName = itemNameInput.value
		setItems((prev) => {
			return [...prev, itemName]
		})
		itemNameInput.value = ""
	}

	if (type == "input") {
		return (
			<div id="input-projects-container" className="input-containers">
				<h2>Projects</h2>
				<div id="input-projects-itembox" className="input-itembox">
					{items.map((itemName) => {
						return(
							<div key={itemName} className="input-projects-item input-item">
								<h3>{itemName}</h3>
								<div>
									<label htmlFor={"input-projects-name-" + itemName}>Name</label>
									<input type="text" id={"input-projects-name-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-projects-desc-" + itemName}>Description</label>
									<input type="text" id={"input-projects-desc-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-projects-daterange-" + itemName}>Date Range</label>
									<input type="text" id={"input-projects-daterange-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-projects-website-" + itemName}>Website</label>
									<input type="url" id={"input-projects-website-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-projects-summary-" + itemName}>Summary</label>
									<input type="text" id={"input-projects-summary-" + itemName} />
								</div>
								<button id={"input-projects-delete-btn-" + itemName} className="input-delete-btn">Delete</button>
							</div>
						)
					})}
					<input type="text" id="input-projects-item-name-input" />
					<button id="input-projects-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
				</div>
			</div>
		)
	}
}

function ToolsAndLanguages({ type }) {
	const [ items, setItems ] = useState(["Default"])

	function addItem(){
		const itemNameInput = document.querySelector('#input-toolsandlanguages-item-name-input')
		const itemName = itemNameInput.value
		setItems((prev) => {
			return [...prev, itemName]
		})
		itemNameInput.value = ""
	}

	if (type == "input") {
		return (
			<div id="input-toolsandlanguages-container" className="input-containers">
				<h2>Tools & Languages</h2>
				<div id="input-toolsandlanguages-itembox" className="input-itembox">
					{items.map((itemName) => {
						return(
							<div key={itemName} className="input-toolsandlanguages-item input-item">
								<h3>{itemName}</h3>
								<label htmlFor={"input-toolsandlanguages-name-" + itemName}>Name</label>
								<input type="text" id={"input-toolsandlanguages-name-" + itemName} />
								<button id={"input-toolsandlanguages-delete-btn-" + itemName} className="input-delete-btn">Delete</button>
							</div>
						)
					})}
					<input type="text" id="input-toolsandlanguages-item-name-input" />
					<button id="input-toolsandlanguages-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
				</div>
			</div>
		)
	}
}

function Profiles({ type }) {
	const [ items, setItems ] = useState(["Default"])

	function addItem(){
		const itemNameInput = document.querySelector('#input-profiles-item-name-input')
		const itemName = itemNameInput.value
		setItems((prev) => {
			return [...prev, itemName]
		})
		itemNameInput.value = ""
	}

	if (type == "input") {
		return (
			<div id="input-profiles-container" className="input-containers">
				<h2>Profiles</h2>
				<div id="input-profiles-itembox" className="input-itembox">
					{items.map((itemName) => {
						return(
							<div key={itemName} className="input-profiles-item input-item">
								<h3>{itemName}</h3>
								<div>
									<label htmlFor={"input-profiles-network-" + itemName}>Network</label>
									<input type="text" id={"input-profiles-network-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-profiles-username-" + itemName}>Username</label>
									<input type="text" id={"input-profiles-username-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-profiles-website-" + itemName}>Website</label>
									<input type="url" id={"input-profiles-website-" + itemName} />
								</div>
								<button id={"input-profiles-delete-btn-" + itemName} className="input-delete-btn">Delete</button>
							</div>
						)
					})}
					<input type="text" id="input-profiles-item-name-input" />
					<button id="input-profiles-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
				</div>
			</div>
		)
	}
}

function Education({ type }) {
	const [ items, setItems ] = useState(["Default"])

	function addItem(){
		const itemNameInput = document.querySelector('#input-education-item-name-input')
		const itemName = itemNameInput.value
		setItems((prev) => {
			return [...prev, itemName]
		})
		itemNameInput.value = ""
	}

	if (type == "input") {
		return (
			<div id="input-education-container" className="input-containers">
				<h2>Education</h2>
				<div id="input-education-itembox" className="input-itembox">
					{items.map((itemName) => {
						return(
							<div key={itemName} className="input-education-item input-item">
								<h3>{itemName}</h3>
								<div>
									<label htmlFor={"input-education-institution-" + itemName}>Institution</label>
									<input type="text" id={"input-education-institution-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-education-type-" + itemName}>Type of Study</label>
									<input type="text" id={"input-education-type-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-education-area-" + itemName}>Area of Study</label>
									<input type="text" id={"input-education-area-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-education-score-" + itemName}>Score</label>
									<input type="text" id={"input-education-score-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-education-daterange-" + itemName}>Date Range</label>
									<input type="text" id={"input-education-daterange-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-education-website-" + itemName}>Website</label>
									<input type="url" id={"input-education-website-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-education-summary-" + itemName}>Summary</label>
									<input type="text" id={"input-education-summary-" + itemName} />
								</div>
								<button id={"input-education-delete-btn-" + itemName} className="input-delete-btn">Delete</button>
							</div>
						)
					})}
					<input type="text" id="input-education-item-name-input" />
					<button id="input-education-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
				</div>
			</div>
		)
	}
}

function Awards({ type }) {
	const [ items, setItems ] = useState(["Default"])

	function addItem(){
		const itemNameInput = document.querySelector('#input-awards-item-name-input')
		const itemName = itemNameInput.value
		setItems((prev) => {
			return [...prev, itemName]
		})
		itemNameInput.value = ""
	}

	if (type == "input") {
		return (
			<div id="input-awards-container" className="input-containers">
				<h2>Awards</h2>
				<div id="input-awards-itembox" className="input-itembox">
					{items.map((itemName) => {
						return(
							<div key={itemName} className="input-awards-item input-item">
								<h3>{itemName}</h3>
								<div>
									<label htmlFor={"input-awards-title-" + itemName}>Title</label>
									<input type="text" id={"input-awards-title-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-awards-awarder-" + itemName}>Awarder</label>
									<input type="text" id={"input-awards-awarder-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-awards-date-" + itemName}>Date</label>
									<input type="text" id={"input-awards-date-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-awards-website-" + itemName}>Website</label>
									<input type="url" id={"input-awards-website-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-awards-summary-" + itemName}>Summary</label>
									<input type="text" id={"input-awards-summary-" + itemName} />
								</div>
								<button id={"input-awards-delete-btn-" + itemName} className="input-delete-btn">Delete</button>
							</div>
						)
					})}
					<input type="text" id="input-awards-item-name-input" />
					<button id="input-awards-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
				</div>
			</div>
		)
	}
}

function Volunteering({ type }) {
	const [ items, setItems ] = useState(["Default"])

	function addItem(){
		const itemNameInput = document.querySelector('#input-volunteering-item-name-input')
		const itemName = itemNameInput.value
		setItems((prev) => {
			return [...prev, itemName]
		})
		itemNameInput.value = ""
	}

	if (type == "input") {
		return (
			<div id="input-volunteering-container" className="input-containers">
				<h2>Volunteering</h2>
				<div id="input-volunteering-itembox" className="input-itembox">
					{items.map((itemName) => {
						return(
							<div key={itemName} className="input-volunteering-item input-item">
								<h3>{itemName}</h3>
								<div>
									<label htmlFor={"input-volunteering-organization-" + itemName}>Organization</label>
									<input type="text" id={"input-volunteering-organization-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-volunteering-position-" + itemName}>Position</label>
									<input type="text" id={"input-volunteering-position-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-volunteering-daterange-" + itemName}>Date Range</label>
									<input type="text" id={"input-volunteering-daterange-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-volunteering-location-" + itemName}>Location</label>
									<input type="text" id={"input-volunteering-location-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-volunteering-website-" + itemName}>Website</label>
									<input type="url" id={"input-volunteering-website-" + itemName} />
								</div>
								<div>
									<label htmlFor={"input-volunteering-summary-" + itemName}>Summary</label>
									<input type="text" id={"input-volunteering-summary-" + itemName} />
								</div>
								<button id={"input-volunteering-delete-btn-" + itemName} className="input-delete-btn">Delete</button>
							</div>
						)
					})}
					<input type="text" id="input-volunteering-item-name-input" />
					<button id="input-volunteering-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
				</div>
			</div>
		)
	}
}

function App() {
	return (
		<div className="application">
			<div className="input-panel">
				<Basics type="input" />
				<Summary type="input" />
				<Experience type="input" />
				<Projects type="input" />
				<ToolsAndLanguages type="input" />
				<Profiles type="input" />
				<Education type="input" />
				<Awards type="input" />
				<Volunteering type="input" />
			</div>
			<div className="display-panel">
				<div className="canvas">

				</div>
			</div>
		</div>
	)
}

export default App
