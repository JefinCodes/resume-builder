import { useState } from 'react'
import './App.css'
import { Page, Text, View, Document, StyleSheet, Font, Link, PDFDownloadLink } from "@react-pdf/renderer"
import LocationIcon from './assets/icons/location.svg'
import PhoneIcon from './assets/icons/phone.svg'
import EmailIcon from './assets/icons/email.svg'
import WebsiteIcon from './assets/icons/website.svg'

function BasicsInput({ item, setItem }) {
	function handleChange(key, value) {
		let newItem = {...item};
		newItem[key] = value;
		setItem(newItem);
	}

	return (
		<div id="input-basics-container" className="input-containers">
			<h2>Basics</h2>
			<div id="input-basics-itembox" className="input-itembox">
				<div className="input-basics-item input-item">
					<div>
						<label htmlFor="input-basics-name">Name</label>
						<input type="text" id="input-basics-name" value={item.name} onChange={(e) => {
							handleChange('name', e.target.value);
						}} />
					</div>
					<div>
						<label htmlFor="input-basics-headline">Headline</label>
						<input type="text" id="input-basics-headline" value={item.headline} onChange={(e) => {
							handleChange('headline', e.target.value);
						}} />
					</div>
					<div>
						<label htmlFor="input-basics-location">Location</label>
						<input type="text" id="input-basics-location" value={item.location} onChange={(e) => {
							handleChange('location', e.target.value);
						}} />
					</div>
					<div>
						<label htmlFor="input-basics-phone">Phone</label>
						<input type="text" id="input-basics-phone" value={item.phone} onChange={(e) => {
							handleChange('phone', e.target.value);
						}} />
					</div>
					<div>
						<label htmlFor="input-basics-email">Email</label>
						<input type="email" id="input-basics-email" value={item.email} onChange={(e) => {
							handleChange('email', e.target.value);
						}} />
					</div>
					<div>
						<label htmlFor="input-basics-website">Website</label>
						<input type="url" id="input-basics-website" value={item.website} onChange={(e) => {
							handleChange('website', e.target.value);
						}} />
					</div>
				</div>
			</div>
		</div>
	)
}

function SummaryInput({ summary, setSummary }) {
	function handleChange(value) {
		setSummary(value);
	}

	return (
		<div id="input-summary-container" className="input-containers">
			<h2>Summary</h2>
			<input type="text" id="input-summary-desc" value={summary} onChange={(e) => {
				handleChange(e.target.value);
			}} />
		</div>
	)
}

function ExperienceInput({ items, setItems }) {
	function addItem() {
		setItems((prev) => {
			return [...prev, {
				company: "",
				position: "",
				daterange: "",
				location: "",
				website: "",
				summary: "",
			}]
		})
	}

	function handleChange(index, key, value) {
		let newItems = [...items];
		newItems[index][key] = value;
		setItems(newItems);
	}

	function removeItem(index) {
		const newItems = items.filter((item, i) => i != index);
		setItems(newItems);
	}

	return (
		<div id="input-experience-container" className="input-containers">
			<h2>Experience</h2>
			<div id="input-experience-itembox" className="input-itembox">
				{items.map((item, index) => {
					return (
						<div className="input-experience-item input-item">
							<div>
								<label htmlFor="input-experience-company">Company</label>
								<input type="text" id="input-experience-company" value={item.company} onChange={(e) => {
									handleChange(index, 'company', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-experience-position">Position</label>
								<input type="text" id="input-experience-position" value={item.position} onChange={(e) => {
									handleChange(index, 'position', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-experience-daterange">Date Range</label>
								<input type="text" id="input-experience-daterange" value={item.daterange} onChange={(e) => {
									handleChange(index, 'daterange', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-experience-location">Location</label>
								<input type="text" id="input-experience-location" value={item.location} onChange={(e) => {
									handleChange(index, 'location', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-experience-website">Website</label>
								<input type="url" id="input-experience-website" value={item.website} onChange={(e) => {
									handleChange(index, 'website', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-experience-summary">Summary</label>
								<input type="text" id="input-experience-summary" value={item.summary} onChange={(e) => {
									handleChange(index, 'summary', e.target.value);
								}} />
							</div>
							<button id="input-experience-delete-btn" className="input-delete-btn" onClick={() => {
								removeItem(index);
							}}>Delete</button>
						</div>
					)
				})}
				<button id="input-experience-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
			</div>
		</div>
	)
}

function ProjectsInput({ items, setItems }) {
	function addItem() {
		setItems((prev) => {
			return [...prev, {
				name: "",
				description: "",
				daterange: "",
				website: "",
				summary: "",
			}]
		})
	}

	function handleChange(index, key, value) {
		let newItems = [...items];
		newItems[index][key] = value;
		setItems(newItems);
	}

	function removeItem(index) {
		const newItems = items.filter((item, i) => i != index);
		setItems(newItems);
	}

	return (
		<div id="input-projects-container" className="input-containers">
			<h2>Projects</h2>
			<div id="input-projects-itembox" className="input-itembox">
				{items.map((item, index) => {
					return (
						<div className="input-projects-item input-item">
							<div>
								<label htmlFor="input-projects-name">Name</label>
								<input type="text" id="input-projects-name" value={item.name} onChange={(e) => {
									handleChange(index, 'name', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-projects-desc">Description</label>
								<input type="text" id="input-projects-desc" value={item.description} onChange={(e) => {
									handleChange(index, 'description', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-projects-daterange">Date Range</label>
								<input type="text" id="input-projects-daterange" value={item.daterange} onChange={(e) => {
									handleChange(index, 'daterange', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-projects-website">Website</label>
								<input type="url" id="input-projects-website" value={item.website} onChange={(e) => {
									handleChange(index, 'website', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-projects-summary">Summary</label>
								<input type="text" id="input-projects-summary" value={item.summary} onChange={(e) => {
									handleChange(index, 'summary', e.target.value);
								}} />
							</div>
							<button id="input-projects-delete-btn" className="input-delete-btn" onClick={() => {
								removeItem(index);
							}}>Delete</button>
						</div>
					)
				})}
				<button id="input-projects-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
			</div>
		</div>
	)
}

function ToolsAndLanguagesInput({ items, setItems }) {
	function addItem() {
		setItems((prev) => {
			return [...prev, {
				name: "",
			}]
		})
	}

	function handleChange(index, key, value) {
		let newItems = [...items];
		newItems[index][key] = value;
		setItems(newItems);
	}

	function removeItem(index) {
		const newItems = items.filter((item, i) => i != index);
		setItems(newItems);
	}

	return (
		<div id="input-toolsandlanguages-container" className="input-containers">
			<h2>Tools & Languages</h2>
			<div id="input-toolsandlanguages-itembox" className="input-itembox">
				{items.map((item, index) => {
					return (
						<div className="input-toolsandlanguages-item input-item">
							<label htmlFor="input-toolsandlanguages-name">Name</label>
							<input type="text" id="input-toolsandlanguages-name" value={item.name} onChange={(e) => {
								handleChange(index, 'name', e.target.value);
							}} />
							<button id="input-toolsandlanguages-delete-btn" className="input-delete-btn" onClick={() => {
								removeItem(index);
							}}>Delete</button>
						</div>
					)
				})}
				<button id="input-toolsandlanguages-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
			</div>
		</div>
	)
}

function ProfilesInput({ items, setItems }) {
	function addItem() {
		setItems((prev) => {
			return [...prev, {
				network: "",
				username: "",
				website: "",
			}]
		})
	}

	function handleChange(index, key, value) {
		let newItems = [...items];
		newItems[index][key] = value;
		setItems(newItems);
	}

	function removeItem(index) {
		const newItems = items.filter((item, i) => i != index);
		setItems(newItems);
	}

	return (
		<div id="input-profiles-container" className="input-containers">
			<h2>Profiles</h2>
			<div id="input-profiles-itembox" className="input-itembox">
				{items.map((item, index) => {
					return (
						<div className="input-profiles-item input-item">
							<div>
								<label htmlFor="input-profiles-network">Network</label>
								<input type="text" id="input-profiles-network" value={item.network} onChange={(e) => {
									handleChange(index, 'network', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-profiles-username">Username</label>
								<input type="text" id="input-profiles-username" value={item.username} onChange={(e) => {
									handleChange(index, 'username', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-profiles-website">Website</label>
								<input type="url" id="input-profiles-website" value={item.website} onChange={(e) => {
									handleChange(index, 'website', e.target.value);
								}} />
							</div>
							<button id="input-profiles-delete-btn" className="input-delete-btn" onClick={() => {
								removeItem(index);
							}}>Delete</button>
						</div>
					)
				})}
				<button id="input-profiles-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
			</div>
		</div>
	)
}

function EducationInput({ items, setItems }) {
	function addItem() {
		setItems((prev) => {
			return [...prev, {
				institution: "",
				typeofstudy: "",
				areaofstudy: "",
				score: "",
				daterange: "",
				website: "",
				summary: "",
			}]
		})
	}

	function handleChange(index, key, value) {
		let newItems = [...items];
		newItems[index][key] = value;
		setItems(newItems);
	}

	function removeItem(index) {
		const newItems = items.filter((item, i) => i != index);
		setItems(newItems);
	}

	return (
		<div id="input-education-container" className="input-containers">
			<h2>Education</h2>
			<div id="input-education-itembox" className="input-itembox">
				{items.map((item, index) => {
					return (
						<div className="input-education-item input-item">
							<div>
								<label htmlFor="input-education-institution">Institution</label>
								<input type="text" id="input-education-institution" value={item.institution} onChange={(e) => {
									handleChange(index, 'institution', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-education-type">Type of Study</label>
								<input type="text" id="input-education-type" value={item.typeofstudy} onChange={(e) => {
									handleChange(index, 'typeofstudy', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-education-area">Area of Study</label>
								<input type="text" id="input-education-area" value={item.areaofstudy} onChange={(e) => {
									handleChange(index, 'areaofstudy', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-education-score">Score</label>
								<input type="text" id="input-education-score" value={item.score} onChange={(e) => {
									handleChange(index, 'score', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-education-daterange">Date Range</label>
								<input type="text" id="input-education-daterange" value={item.daterange} onChange={(e) => {
									handleChange(index, 'daterange', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-education-website">Website</label>
								<input type="url" id="input-education-website" value={item.website} onChange={(e) => {
									handleChange(index, 'website', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-education-summary">Summary</label>
								<input type="text" id="input-education-summary" value={item.summary} onChange={(e) => {
									handleChange(index, 'summary', e.target.value);
								}} />
							</div>
							<button id="input-education-delete-btn" className="input-delete-btn" onClick={() => {
								removeItem(index);
							}}>Delete</button>
						</div>
					)
				})}
				<button id="input-education-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
			</div>
		</div>
	)
}

function AwardsInput({ items, setItems }) {
	function addItem() {
		setItems((prev) => {
			return [...prev, {
				title: "",
				awarder: "",
				date: "",
				website: "",
				summary: "",
			}]
		})
	}

	function handleChange(index, key, value) {
		let newItems = [...items];
		newItems[index][key] = value;
		setItems(newItems);
	}

	function removeItem(index) {
		const newItems = items.filter((item, i) => i != index);
		setItems(newItems);
	}

	return (
		<div id="input-awards-container" className="input-containers">
			<h2>Awards</h2>
			<div id="input-awards-itembox" className="input-itembox">
				{items.map((item, index) => {
					return (
						<div className="input-awards-item input-item">
							<div>
								<label htmlFor="input-awards-title">Title</label>
								<input type="text" id="input-awards-title" value={item.title} onChange={(e) => {
									handleChange(index, 'title', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-awards-awarder">Awarder</label>
								<input type="text" id="input-awards-awarder" value={item.awarder} onChange={(e) => {
									handleChange(index, 'awarder', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-awards-date">Date</label>
								<input type="text" id="input-awards-date" value={item.date} onChange={(e) => {
									handleChange(index, 'date', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-awards-website">Website</label>
								<input type="url" id="input-awards-website" value={item.website} onChange={(e) => {
									handleChange(index, 'website', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-awards-summary">Summary</label>
								<input type="text" id="input-awards-summary" value={item.summary} onChange={(e) => {
									handleChange(index, 'summary', e.target.value);
								}} />
							</div>
							<button id="input-awards-delete-btn" className="input-delete-btn" onClick={() => {
								removeItem(index);
							}}>Delete</button>
						</div>
					)
				})}
				<button id="input-awards-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
			</div>
		</div>
	)
}

function VolunteeringInput({ items, setItems }) {
	function addItem() {
		setItems((prev) => {
			return [...prev, {
				organization: "",
				position: "",
				daterange: "",
				location: "",
				website: "",
				summary: "",
			}]
		})
	}

	function handleChange(index, key, value) {
		let newItems = [...items];
		newItems[index][key] = value;
		setItems(newItems);
	}

	function removeItem(index) {
		const newItems = items.filter((item, i) => i != index);
		setItems(newItems);
	}

	return (
		<div id="input-volunteering-container" className="input-containers">
			<h2>Volunteering</h2>
			<div id="input-volunteering-itembox" className="input-itembox">
				{items.map((item, index) => {
					return (
						<div className="input-volunteering-item input-item">
							<div>
								<label htmlFor="input-volunteering-organization">Organization</label>
								<input type="text" id="input-volunteering-organization" value={item.organization} onChange={(e) => {
									handleChange(index, 'organization', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-volunteering-position">Position</label>
								<input type="text" id="input-volunteering-position" value={item.position} onChange={(e) => {
									handleChange(index, 'position', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-volunteering-daterange">Date Range</label>
								<input type="text" id="input-volunteering-daterange" value={item.daterange} onChange={(e) => {
									handleChange(index, 'daterange', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-volunteering-location">Location</label>
								<input type="text" id="input-volunteering-location" value={item.location} onChange={(e) => {
									handleChange(index, 'location', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-volunteering-website">Website</label>
								<input type="url" id="input-volunteering-website" value={item.website} onChange={(e) => {
									handleChange(index, 'website', e.target.value);
								}} />
							</div>
							<div>
								<label htmlFor="input-volunteering-summary">Summary</label>
								<input type="text" id="input-volunteering-summary" value={item.summary} onChange={(e) => {
									handleChange(index, 'summary', e.target.value);
								}} />
							</div>
							<button id="input-volunteering-delete-btn" className="input-delete-btn" onClick={() => {
								removeItem(index);
							}}>Delete</button>
						</div>
					)
				})}
				<button id="input-volunteering-add-btn" className="input-add-btn" onClick={addItem}>Add Item</button>
			</div>
		</div>
	)
}

function BasicsDisplay({ item }){
	return(
		<div>
			<h2>{item.name}</h2>
			<div>{item.headline}</div>
			<div className="display-basics-flexconatiner">
				<div className="display-icon-conatiner">
					<div>{item.location && <img src={LocationIcon} alt="Location Icon" />}</div>
					<div>{item.location}</div>
				</div>
				<div className="display-icon-conatiner">
					<div>{item.phone && <img src={PhoneIcon} alt="Phone Icon" />}</div>
					<div>{item.phone}</div>
				</div>
				<div className="display-icon-conatiner">
					<div>{item.email && <img src={EmailIcon} alt="Email Icon" />}</div>
					<div>{item.email}</div>
				</div>
				<div className="display-icon-conatiner">
					<div>{item.website && <img src={WebsiteIcon} alt="Website Icon" />}</div>
					<div><a href={item.website} target="_blank" rel="noopener noreferrer">{item.website}</a></div>
				</div>
			</div>
		</div>
	)
}

function SummaryDisplay({ summary }){
	return(
		<div>
			{summary && <h4>Summary</h4>}
			{summary && <hr />}
			{summary}
		</div>
	)
}

function ExperienceDisplay({ items }){
	return(
		<div>
			{items.length > 0 && <h4>Experience</h4>}
			{items.length > 0 && <hr />}
			<div className="display-item-conatiner">
				{items.map((item) => {
					return(
						<div>
							<div className="display-item-subcontainer-spacebetween">
								<h3>{item.company}</h3>
								<h3>{item.daterange}</h3>
							</div>
							<div className="display-item-subcontainer-spacebetween">
								<div>{item.position}</div>
								<div>{item.location}</div>
							</div>
							<div className="display-icon-conatiner">
								<div>{item.website && <img src={WebsiteIcon} alt="Website Icon" />}</div>
								<div><a href={item.website} target="_blank" rel="noopener noreferrer">{item.website}</a></div>
							</div>
							<div>{item.summary}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

function ProjectsDisplay({ items }){
	return(
		<div>
			{items.length > 0 && <h4>Projects</h4>}
			{items.length > 0 && <hr />}
			<div className="display-item-conatiner">
				{items.map((item) => {
					return(
						<div>
							<div className="display-item-subcontainer-spacebetween">
								<h3>{item.name}</h3>
								<h3>{item.daterange}</h3>
							</div>
							<div>{item.description}</div>
							<div className="display-icon-conatiner">
								<div>{item.website && <img src={WebsiteIcon} alt="Website Icon" />}</div>
								<div><a href={item.website} target="_blank" rel="noopener noreferrer">{item.website}</a></div>
							</div>
							<div>{item.summary}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

function ToolsAndLanguagesDisplay({ items }){
	return(
		<div>
			{items.length > 0 && <h4>Tools & Languages</h4>}
			{items.length > 0 && <hr />}
			<div className="display-toolsandlanguages-conatiner">
				{items.map((item) => {
					return(
						<div className="display-toolsandlanguages-subcontainer-item">
							{item.name}
						</div>
					)
				})}
			</div>
		</div>
	)
}

function ProfilesDisplay({ items }){
	return(
		<div>
			{items.length > 0 && <h4>Profiles</h4>}
			{items.length > 0 && <hr />}
			<div className="display-profiles-conatiner">
				{items.map((item) => {
					return(
						<div className="display-profiles-subcontainer-item">
							<a href={item.website} target="_blank" rel="noopener noreferrer">{item.network}{item.username && <span>(</span>}{item.username}{item.username && <span>)</span>}</a>
						</div>
					)
				})}
			</div>
		</div>
	)
}

function EducationDisplay({ items }){
	return(
		<div>
			{items.length > 0 && <h4>Education</h4>}
			{items.length > 0 && <hr />}
			<div className="display-item-conatiner">
				{items.map((item) => {
					return(
						<div>
							<div className="display-item-subcontainer-spacebetween">
								<h3>{item.institution}</h3>
								<h3>{item.daterange}</h3>
							</div>
							<div>{item.typeofstudy} {item.typeofstudy && item.areaofstudy && <span>-</span>} {item.areaofstudy}</div>
							<div>{item.score}</div>
							<div className="display-icon-conatiner">
								<div>{item.website && <img src={WebsiteIcon} alt="Website Icon" />}</div>
								<div><a href={item.website} target="_blank" rel="noopener noreferrer">{item.website}</a></div>
							</div>
							<div>{item.summary}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

function AwardsDisplay({ items }){
	return(
		<div>
			{items.length > 0 && <h4>Awards</h4>}
			{items.length > 0 && <hr />}
			<div className="display-item-conatiner">
				{items.map((item) => {
					return(
						<div>
							<div className="display-item-subcontainer-spacebetween">
								<h3>{item.title}</h3>
								<h3>{item.date}</h3>
							</div>
							<div>{item.awarder}</div>
							<div className="display-icon-conatiner">
								<div>{item.website && <img src={WebsiteIcon} alt="Website Icon" />}</div>
								<div><a href={item.website} target="_blank" rel="noopener noreferrer">{item.website}</a></div>
							</div>
							<div>{item.summary}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

function VolunteeringDisplay({ items }){
	return(
		<div>
			{items.length > 0 && <h4>Volunteering</h4>}
			{items.length > 0 && <hr />}
			<div className="display-item-conatiner">
				{items.map((item) => {
					return(
						<div>
							<div className="display-item-subcontainer-spacebetween">
								<h3>{item.organization}</h3>
								<h3>{item.daterange}</h3>
							</div>
							<div className="display-item-subcontainer-spacebetween">
								<div>{item.position}</div>
								<div>{item.location}</div>
							</div>
							<div className="display-icon-conatiner">
								<div>{item.website && <img src={WebsiteIcon} alt="Website Icon" />}</div>
								<div><a href={item.website} target="_blank" rel="noopener noreferrer">{item.website}</a></div>
							</div>
							<div>{item.summary}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

Font.register({
	family: "Times-Roman",
  	src: "https://fonts.cdnfonts.com/s/19810/times-new-roman.woff"
});

const styles = StyleSheet.create({
	page: {
		padding: 20,
		fontFamily: "Times-Roman",
		display: "flex",
		flexDirection: "column",
		gap: 15,
	},
	link: {
		color: "black",
    	textDecoration: "underline"
	},
	nameTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	commonText: {
		fontSize: 12,
	},
	gap15FlexContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 15,
	},
	sectionTitle: {
		fontSize: 12,
		fontWeight: "bold",
	},
	hr: {
		borderBottomWidth: 0.3,
    	borderBottomColor: "black",
	},
	itemContainer: {
		display: "flex",
		flexDirection: "column",
		gap: 10,
	},
	spaceBetweenFlexContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	itemTitle: {
		fontSize: 15,
		fontWeight: "bold",
	},
	items4RowContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	item4RowContainer: {
		width: "25%",
		padding: "2px 0px",
	},
	items3RowContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	item3RowContainer: {
		width: "33%",
		padding: "2px 0px",
	},
});

const MyResume = ({ basics, summary, experience, projects, toolsAndLanguages, profiles, education, award, volunteering }) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View>
				<Text style={styles.nameTitle}>{basics.name}</Text>
				<Text style={styles.commonText}>{basics.headline}</Text>
				<View style={styles.gap15FlexContainer}>
					<View>
						<Text style={styles.commonText}>{basics.location}</Text>
					</View>
					<View>
						<Text style={styles.commonText}>{basics.phone}</Text>
					</View>
					<View>
						<Text style={styles.commonText}>{basics.email}</Text>
					</View>
					<View>
						<Text style={styles.commonText}><Link src={basics.website} style={styles.link}>{basics.website}</Link></Text>
					</View>
				</View>
			</View>
			<View>
				{summary && <Text style={styles.sectionTitle}>Summary</Text>}
				{summary && <View style={styles.hr} />}
				<Text style={styles.commonText}>{summary}</Text>
			</View>
			<View>
				{experience.length > 0 && <Text style={styles.sectionTitle}>Experience</Text>}
				{experience.length > 0 && <View style={styles.hr} />}
				<View style={styles.itemContainer}>
					{experience.map((item) => {
						return(
							<View>
								<View style={styles.spaceBetweenFlexContainer}>
									<Text style={styles.itemTitle}>{item.company}</Text>
									<Text style={styles.itemTitle}>{item.daterange}</Text>
								</View>
								<View style={styles.spaceBetweenFlexContainer}>
									<Text style={styles.commonText}>{item.position}</Text>
									<Text style={styles.commonText}>{item.location}</Text>
								</View>
								<Text style={styles.commonText}><Link src={item.website} style={styles.link}>{item.website}</Link></Text>
								<Text style={styles.commonText}>{item.summary}</Text>
							</View>
						)
					})}
				</View>
			</View>
			<View>
				{projects.length > 0 && <Text style={styles.sectionTitle}>Projects</Text>}
				{projects.length > 0 && <View style={styles.hr} />}
				<View style={styles.itemContainer}>
					{projects.map((item) => {
						return(
							<View>
								<View style={styles.spaceBetweenFlexContainer}>
									<Text style={styles.itemTitle}>{item.name}</Text>
									<Text style={styles.itemTitle}>{item.daterange}</Text>
								</View>
								<Text style={styles.commonText}>{item.description}</Text>
								<Text style={styles.commonText}><Link src={item.website} style={styles.link}>{item.website}</Link></Text>
								<Text style={styles.commonText}>{item.summary}</Text>
							</View>
						)
					})}
				</View>
			</View>
			<View>
				{toolsAndLanguages.length > 0 && <Text style={styles.sectionTitle}>Tools & Languages</Text>}
				{toolsAndLanguages.length > 0 && <View style={styles.hr} />}
				<View style={styles.items4RowContainer}>
					{toolsAndLanguages.map((item) => {
						return(
							<View style={styles.item4RowContainer}>
								<Text style={styles.commonText}>{item.name}</Text>
							</View>
						)
					})}
				</View>
			</View>
			<View>
				{profiles.length > 0 && <Text style={styles.sectionTitle}>Profiles</Text>}
				{profiles.length > 0 && <View style={styles.hr} />}
				<View style={styles.items3RowContainer}>
					{profiles.map((item) => {
						return(
							<View style={styles.item3RowContainer}>
								<Text style={styles.commonText}><Link src={item.website} style={styles.link}>{item.network}{item.username && <Text style={styles.commonText}>(</Text>}{item.username}{item.username && <Text style={styles.commonText}>)</Text>}</Link></Text>
							</View>
						)
					})}
				</View>
			</View>
			<View>
				{education.length > 0 && <Text style={styles.sectionTitle}>Education</Text>}
				{education.length > 0 && <View style={styles.hr} />}
				<View style={styles.itemContainer}>
					{education.map((item) => {
						return(
							<View>
								<View style={styles.spaceBetweenFlexContainer}>
									<Text style={styles.itemTitle}>{item.institution}</Text>
									<Text style={styles.itemTitle}>{item.daterange}</Text>
								</View>
								<Text style={styles.commonText}>{item.typeofstudy} {item.typeofstudy && item.areaofstudy && <Text style={styles.commonText}>-</Text>} {item.areaofstudy}</Text>
								<Text style={styles.commonText}><Link src={item.website} style={styles.link}>{item.website}</Link></Text>
								<Text style={styles.commonText}>{item.summary}</Text>
							</View>
						)
					})}
				</View>
			</View>
			<View>
				{award.length > 0 && <Text style={styles.sectionTitle}>Awards</Text>}
				{award.length > 0 && <View style={styles.hr} />}
				<View style={styles.itemContainer}>
					{award.map((item) => {
						return(
							<View>
								<View style={styles.spaceBetweenFlexContainer}>
									<Text style={styles.itemTitle}>{item.title}</Text>
									<Text style={styles.itemTitle}>{item.date}</Text>
								</View>
								<Text style={styles.commonText}>{item.awarder}</Text>
								<Text style={styles.commonText}><Link src={item.website} style={styles.link}>{item.website}</Link></Text>
								<Text style={styles.commonText}>{item.summary}</Text>
							</View>
						)
					})}
				</View>
			</View>
			<View>
				{volunteering.length > 0 && <Text style={styles.sectionTitle}>Volunteering</Text>}
				{volunteering.length > 0 && <View style={styles.hr} />}
				<View style={styles.itemContainer}>
					{volunteering.map((item) => {
						return(
							<View>
								<View style={styles.spaceBetweenFlexContainer}>
									<Text style={styles.itemTitle}>{item.organization}</Text>
									<Text style={styles.itemTitle}>{item.daterange}</Text>
								</View>
								<View style={styles.spaceBetweenFlexContainer}>
									<Text style={styles.commonText}>{item.position}</Text>
									<Text style={styles.commonText}>{item.location}</Text>
								</View>
								<Text style={styles.commonText}><Link src={item.website} style={styles.link}>{item.website}</Link></Text>
								<Text style={styles.commonText}>{item.summary}</Text>
							</View>
						)
					})}
				</View>
			</View>
		</Page>
	</Document>
)

function App() {
	const [basics, setBasics] = useState([
		{
			name: "",
			headline: "",
			location: "",
			phone: "",
			email: "",
			website: "",
		}
	]);

	const [summary, setSummary] = useState("");

	const [experienceItems, setExperienceItems] = useState([
		{
			company: "",
			position: "",
			daterange: "",
			location: "",
			website: "",
			summary: "",
		}
	]);

	const [projectsItems, setProjectsItems] = useState([
		{
			name: "",
			description: "",
			daterange: "",
			website: "",
			summary: "",
		}
	]);

	const [toolsAndLanguagesItems, setToolsAndLanguagesItems] = useState([
		{
			name: "",
		}
	]);

	const [profilesItems, setProfilesItems] = useState([
		{
			network: "",
			username: "",
			website: "",
		}
	]);

	const [educationItems, setEducationItems] = useState([
		{
			institution: "",
			typeofstudy: "",
			areaofstudy: "",
			score: "",
			daterange: "",
			website: "",
			summary: "",
		}
	]);

	const [awardItems, setAwardItems] = useState([
		{
			title: "",
			awarder: "",
			date: "",
			website: "",
			summary: "",
		}
	]);

	const [volunteeringItems, setVolunteeringItems] = useState([
		{
			organization: "",
			position: "",
			daterange: "",
			location: "",
			website: "",
			summary: "",
		}
	]);


	return (
		<div className="application">
			<div className="input-panel">
				<BasicsInput item={basics} setItem={setBasics} />
				<SummaryInput summary={summary} setSummary={setSummary} />
				<ExperienceInput items={experienceItems} setItems={setExperienceItems} />
				<ProjectsInput items={projectsItems} setItems={setProjectsItems} />
				<ToolsAndLanguagesInput items={toolsAndLanguagesItems} setItems={setToolsAndLanguagesItems} />
				<ProfilesInput items={profilesItems} setItems={setProfilesItems} />
				<EducationInput items={educationItems} setItems={setEducationItems} />
				<AwardsInput items={awardItems} setItems={setAwardItems} />
				<VolunteeringInput items={volunteeringItems} setItems={setVolunteeringItems} />
				<button id="download-button">
					<PDFDownloadLink document={<MyResume basics={basics} summary={summary} experience={experienceItems} projects={projectsItems} toolsAndLanguages={toolsAndLanguagesItems} profiles={profilesItems} education={educationItems} award={awardItems} volunteering={volunteeringItems} />} fileName="resume.pdf">
						{({ loading }) => (loading? "Loading document...":"Download Resume")}
					</PDFDownloadLink>
				</button>
			</div>
			<div className="display-panel">
				<div className="canvas">
					<BasicsDisplay item={basics} />
					<SummaryDisplay summary={summary} />
					<ExperienceDisplay items={experienceItems} />
					<ProjectsDisplay items={projectsItems} />
					<ToolsAndLanguagesDisplay items={toolsAndLanguagesItems} />
					<ProfilesDisplay items={profilesItems} />
					<EducationDisplay items={educationItems} />
					<AwardsDisplay items={awardItems} />
					<VolunteeringDisplay items={volunteeringItems} />
				</div>
			</div>
		</div>
	)
}

export default App
