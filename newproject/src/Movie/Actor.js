import React, { useState, useEffect } from "react";

function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [actorsData, setActorsData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  } 
  

  const getActorsData = async () => {
    try {
      let respone = await fetch(dataUrl);
      let resData = await respone.json();
      setActorsData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActorsData();
  }, [inputVal]);
 
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="Actor-input">
            <div>
           
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="form-control"
                placeholder="Search By Actors Name"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            {actorsData.map((element) => {
              return (
                <div className="col-md-3 mb-3">
                  <div className="Actor-card">
                    <a href={element.person.url} target="blank">
                    {element.person.image ? (
                      <img
                        src={element.person.image.medium}
                        className="Actor-poster"
                        alt={
                          element.person.name != null
                            ? element.person.name
                            : "Not found"
                        }

                      />
                    ) : (
                      <div className="Actor-card">
                        <img
                          src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                          alt = "Not Found"
                          className="Actor-poster" 
                        />
                      </div>
                    )}
                    </a>
                
                    <h5 className="Actor-name"> {element.person.name}</h5>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Actor;