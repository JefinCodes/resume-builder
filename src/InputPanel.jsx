import './InputPanel.css'

function Basics() {
    return (
        <div id="input-basics-container" className="input-containers">
            <h2>Basics</h2>
            <div id="input-basics-itembox" className="input-itembox">
                <div className="input-basics-item input-item">
                    <div>
                        <label htmlFor="input-basics-name">Name</label>
                        <input type="text" id="input-basics-name" />
                    </div>
                    <div>
                        <label htmlFor="input-basics-headline">Headline</label>
                        <input type="text" id="input-basics-headline" />
                    </div>
                    <div>
                        <label htmlFor="input-basics-location">Location</label>
                        <input type="text" id="input-basics-location" />
                    </div>
                    <div>
                        <label htmlFor="input-basics-phone">Phone</label>
                        <input type="number" id="input-basics-phone" />
                    </div>
                    <div>
                        <label htmlFor="input-basics-email">Email</label>
                        <input type="email" id="input-basics-email" />
                    </div>
                    <div>
                        <label htmlFor="input-basics-website">Website</label>
                        <input type="url" id="input-basics-website" />
                    </div>
                    <button id="input-basics-delete-btn" className="input-delete-btn">Delete</button>
                </div>
                <button id="input-basics-add-btn" className="input-add-btn">Add Item</button>
            </div>
        </div>
    )
}

function Summary() {
    return (
        <div id="input-summary-container" className="input-containers">
            <h2>Summary</h2>
            <input type="text" id="input-summary-desc" />
        </div>
    )
}

function Experience() {
    return (
        <div id="input-experience-container" className="input-containers">
            <h2>Experience</h2>
            <div id="input-experience-itembox" className="input-itembox">
                <div className="input-experience-item input-item">
                    <div>
                        <label htmlFor="input-experience-company">Company</label>
                        <input type="text" id="input-experience-company" />
                    </div>
                    <div>
                        <label htmlFor="input-experience-position">Position</label>
                        <input type="text" id="input-experience-position" />
                    </div>
                    <div>
                        <label htmlFor="input-experience-daterange">Date Range</label>
                        <input type="text" id="input-experience-daterange" />
                    </div>
                    <div>
                        <label htmlFor="input-experience-location">Location</label>
                        <input type="text" id="input-experience-location" />
                    </div>
                    <div>
                        <label htmlFor="input-experience-website">Website</label>
                        <input type="url" id="input-experience-website" />
                    </div>
                    <div>
                        <label htmlFor="input-experience-summary">Summary</label>
                        <input type="text" id="input-experience-summary" />
                    </div>
                    <button id="input-experience-delete-btn" className="input-delete-btn">Delete</button>
                </div>
                <button id="input-experience-add-btn" className="input-add-btn">Add Item</button>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div id="input-projects-container" className="input-containers">
            <h2>Projects</h2>
            <div id="input-projects-itembox" className="input-itembox">
                <div className="input-projects-item input-item">
                    <div>
                        <label htmlFor="input-projects-name">Name</label>
                        <input type="text" id="input-projects-name" />
                    </div>
                    <div>
                        <label htmlFor="input-projects-desc">Description</label>
                        <input type="text" id="input-projects-desc" />
                    </div>
                    <div>
                        <label htmlFor="input-projects-daterange">Date Range</label>
                        <input type="text" id="input-projects-daterange" />
                    </div>
                    <div>
                        <label htmlFor="input-projects-website">Website</label>
                        <input type="url" id="input-projects-website" />
                    </div>
                    <div>
                        <label htmlFor="input-projects-summary">Summary</label>
                        <input type="text" id="input-projects-summary" />
                    </div>
                    <button id="input-projects-delete-btn" className="input-delete-btn">Delete</button>
                </div>
                <button id="input-projects-add-btn" className="input-add-btn">Add Item</button>
            </div>
        </div>
    )
}

function ToolsAndLanguages() {
    return (
        <div id="input-toolsandlanguages-container" className="input-containers">
            <h2>Tools & Languages</h2>
            <div id="input-toolsandlanguages-itembox" className="input-itembox">
                <div className="input-toolsandlanguages-item input-item">
                    <label htmlFor="input-toolsandlanguages-name">Name</label>
                    <input type="text" id="input-toolsandlanguages-name" />
                    <button id="input-toolsandlanguages-delete-btn" className="input-delete-btn">Delete</button>
                </div>
                <button id="input-toolsandlanguages-add-btn" className="input-add-btn">Add Item</button>
            </div>
        </div>
    )
}

function Profiles() {
    return (
        <div id="input-profiles-container" className="input-containers">
            <h2>Profiles</h2>
            <div id="input-profiles-itembox" className="input-itembox">
                <div className="input-profiles-item input-item">
                    <div>
                        <label htmlFor="input-profiles-network">Network</label>
                        <input type="text" id="input-profiles-network" />
                    </div>
                    <div>
                        <label htmlFor="input-profiles-username">Username</label>
                        <input type="text" id="input-profiles-username" />
                    </div>
                    <div>
                        <label htmlFor="input-profiles-website">Website</label>
                        <input type="url" id="input-profiles-website" />
                    </div>
                    <button id="input-profiles-delete-btn" className="input-delete-btn">Delete</button>
                </div>
                <button id="input-profiles-add-btn" className="input-add-btn">Add Item</button>
            </div>
        </div>
    )
}

function Education() {
    return (
        <div id="input-education-container" className="input-containers">
            <h2>Education</h2>
            <div id="input-education-itembox" className="input-itembox">
                <div className="input-education-item input-item">
                    <div>
                        <label htmlFor="input-education-institution">Institution</label>
                        <input type="text" id="input-education-institution" />
                    </div>
                    <div>
                        <label htmlFor="input-education-type">Type of Study</label>
                        <input type="text" id="input-education-type" />
                    </div>
                    <div>
                        <label htmlFor="input-education-area">Area of Study</label>
                        <input type="text" id="input-education-area" />
                    </div>
                    <div>
                        <label htmlFor="input-education-score">Score</label>
                        <input type="text" id="input-education-score" />
                    </div>
                    <div>
                        <label htmlFor="input-education-daterange">Date Range</label>
                        <input type="text" id="input-education-daterange" />
                    </div>
                    <div>
                        <label htmlFor="input-education-website">Website</label>
                        <input type="url" id="input-education-website" />
                    </div>
                    <div>
                        <label htmlFor="input-education-summary">Summary</label>
                        <input type="text" id="input-education-summary" />
                    </div>
                    <button id="input-education-delete-btn" className="input-delete-btn">Delete</button>
                </div>
                <button id="input-education-add-btn" className="input-add-btn">Add Item</button>
            </div>
        </div>
    )
}

function Awards() {
    return (
        <div id="input-awards-container" className="input-containers">
            <h2>Awards</h2>
            <div id="input-awards-itembox" className="input-itembox">
                <div className="input-awards-item input-item">
                    <div>
                        <label htmlFor="input-awards-title">Title</label>
                        <input type="text" id="input-awards-title" />
                    </div>
                    <div>
                        <label htmlFor="input-awards-awarder">Awarder</label>
                        <input type="text" id="input-awards-awarder" />
                    </div>
                    <div>
                        <label htmlFor="input-awards-date">Date</label>
                        <input type="text" id="input-awards-date" />
                    </div>
                    <div>
                        <label htmlFor="input-awards-website">Website</label>
                        <input type="url" id="input-awards-website" />
                    </div>
                    <div>
                        <label htmlFor="input-awards-summary">Summary</label>
                        <input type="text" id="input-awards-summary" />
                    </div>
                    <button id="input-awards-delete-btn" className="input-delete-btn">Delete</button>
                </div>
                <button id="input-awards-add-btn" className="input-add-btn">Add Item</button>
            </div>
        </div>
    )
}

function Volunteering() {
    return (
        <div id="input-volunteering-container" className="input-containers">
            <h2>Volunteering</h2>
            <div id="input-volunteering-itembox" className="input-itembox">
                <div className="input-volunteering-item input-item">
                    <div>
                        <label htmlFor="input-volunteering-organization">Organization</label>
                        <input type="text" id="input-volunteering-organization" />
                    </div>
                    <div>
                        <label htmlFor="input-volunteering-position">Position</label>
                        <input type="text" id="input-volunteering-position" />
                    </div>
                    <div>
                        <label htmlFor="input-volunteering-daterange">Date Range</label>
                        <input type="text" id="input-volunteering-daterange" />
                    </div>
                    <div>
                        <label htmlFor="input-volunteering-location">Location</label>
                        <input type="text" id="input-volunteering-location" />
                    </div>
                    <div>
                        <label htmlFor="input-volunteering-website">Website</label>
                        <input type="url" id="input-volunteering-website" />
                    </div>
                    <div>
                        <label htmlFor="input-volunteering-summary">Summary</label>
                        <input type="text" id="input-volunteering-summary" />
                    </div>
                    <button id="input-volunteering-delete-btn" className="input-delete-btn">Delete</button>
                </div>
                <button id="input-volunteering-add-btn" className="input-add-btn">Add Item</button>
            </div>
        </div>
    )
}

function InputPanel() {
  return (
    <div className="input-panel">
        <Basics />
        <Summary />
        <Experience />
        <Projects />
        <ToolsAndLanguages />
        <Profiles />
        <Education />
        <Awards />
        <Volunteering />
    </div>
  )
}

export default InputPanel