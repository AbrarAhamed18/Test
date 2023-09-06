import './cards.css'
import React,{useState} from 'react'



const Cards = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [visibleCardCount, setVisibleCardCount] = useState(3);

  const handleSeeMoreClick = () => {
    setVisibleCardCount(Data.length);
    setIsVisible(true);
  };

  
  

  const Data=[
    {
      id:1,
      Title:'Game Automation Manager',
      description: 'Madbox is a fast-growing mobile gaming  has been made for teams to take as much owne, unleash...',
      country: '🇪🇸 BARCELONA',
      rcountry:'BARCELONA',
      job: 'Automation',
      rjob: 'Automation'
    },
    {
      id:2,
      Title:'Data Engineer',
      description: 'Your journey at Madbox as a Data Engineer :',
      country: '🇪🇸 BARCELONA',
      rcountry:'BARCELONA',
      job: 'Data Automation',
      rjob: 'Data Automation'
    },
    
    {
      id:3,
      Title:'Head of Finance',
      description: 'Madbox is a fast-growing mobile gaming company with a very unique way of developing games. Everything has been made for teams to take as much ownership as possible, unleash',
      country: '🇫🇷 PARIS',
      rcountry:'PARIS',
      job: '🏦 Finance',
      rjob: 'Finance'
    },
    {
      id:4,
      Title:'Senior Core Developer - BCN',
      description: "At Madbox, we strongly believe in improving our efficiency day after day in order to become faster and stronger. To make that happen, we've dedicated entire teams to automation",
      country: '🇪🇸 BARCELONA',
      rcountry:'BARCELONA',
      job: '🎮 Game Automation',
      rjob: 'Game Automation'
    },
   
   
    {
      id:5,
      Title:'Lead Game Designer - Paris',
      description: "Madbox is a fast-growing mobile gaming company with a very unique way of developing games. Everything has been made for teams to take as much ownership as possible, unleash",
      country: '🇫🇷 PARIS',
      rcountry:'PARIS',
      job: '🎮 Game Design',
      rjob:'Game Design'
    },
    
    {
      id:6,
      Title:'Senior Core Developer - Paris',
      description: "At Madbox, we strongly believe in improving our efficiency day after day in order to become faster and stronger. To make that happen, we've dedicated entire teams to automation",
      country: '🇫🇷 PARIS',
      rcountry:'PARIS',
      job: '🎮 Game Automation',
      rjob: 'Game Automation'
      
    },


  ]

  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);

 
  const handleCheckboxChange = (country) => {
    if (selectedCountry.includes(country)) {
      setSelectedCountry(selectedCountry.filter(selectedCountry => selectedCountry !== country));
    } else {
      setSelectedCountry([...selectedCountry, country]);
    }
  };

  const handleTitleCheckboxChange = (job) => {
    if (selectedTitles.includes(job)) {
      setSelectedTitles(selectedTitles.filter(selectedTitle => selectedTitle !== job));
    } else {
      setSelectedTitles([...selectedTitles, job]);
    }
  };

  

  const filteredData = Data.filter(item =>
    (selectedCountry.length === 0 || selectedCountry.includes(item.rcountry)) &&
    (selectedTitles.length === 0 || selectedTitles.includes(item.rjob))
  );


     
 


  return (
    <>
    {isVisible && (<div className='filter'>
    <div className='location'>
      <h2>📍 Location</h2>
      <div className='locin'>{
        Array.from(new Set(Data.map(item=>item.rcountry))).map(country =>(
      
      
    <label  country={country}>
      
      <input
        type="checkbox"
        
        
        onChange={() => handleCheckboxChange(country)}/>
        
      {country} 
    </label>))}
  </div>
  </div>

    <div className="team">
    <h2>👥 Teams</h2>
    <div className="teamin">{
      Array.from(new Set(Data.map(item => item.rjob))).map(job => (
        <label className="checkbox-label" key={job}>
          <input
                type="checkbox"
                onChange={() => handleTitleCheckboxChange(job)}
                checked={selectedTitles.includes(job)}
                
              />
              {job}
            </label>))}
    
    
    
   
    </div>
</div>

</div>)}
    <section className="main">
      <div className='secContent grid'>
      
        {
            filteredData.slice(0, visibleCardCount).map(({id, Title,description , country, job })=>{
              return(
                  <div key={id} className="singleData">
                      <div className="cardInfo">
                        <h4 className="destTitle">{Title}</h4>
                      <div className="desc">
                        <p>{description}</p>
                      </div>
                      <div className="propContent">
                      <div className='country'>
                        <span>{country}</span>
                      </div>
                      <div className="job">
                        <span>{job}</span>
                      </div>
                      </div>
                      <div className="Applybtn">
                      <button className='Abtn btn flex'>
                        <h3>Apply</h3>
                      </button>
                      </div>
                      
                      </div>
                  </div>

                 
                  
              )
            })
          }
            
          
          </div>
          <div className="seeMorebtn">
            
            {visibleCardCount < Data.length ? (
        <button className='Smbtn btn'  onClick={handleSeeMoreClick}><h4>See More</h4></button>
      ) : null}  
      
      </div>
    </section>
    </>
  )
}

export default Cards