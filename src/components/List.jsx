import list from "../assets/data/accomplishments.json"

export default function List() {
    return (<>
        <div className="accordion" id="accordionMain">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingMain">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMain" aria-expanded="true" aria-controls="collapseMain">
                        LIST OF ACCOMPLISHMENTS TO DATE
                    </button>
                </h2>
                <div id="collapseMain" className="accordion-collapse collapse" aria-labelledby="headingMain" data-bs-parent="#accordionMain">
                    <div className="accordion-body">
                        <div className="accordion" id="accordionSub">
                            {list.map((accomplishment, index) => (
                                <div key={index} className="accordion-item">
                                    <h6 className="accordion-header" id={`heading${index}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                            {accomplishment.category}
                                        </button>
                                    </h6>
                                    <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionSub">
                                        <div className="accordion-body">
                                            {accomplishment.items && (
                                                <ul>
                                                    {accomplishment.items.map((item, subIndex) => (
                                                        <li key={subIndex}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}