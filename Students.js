import React from 'react';


export default class Students extends React.Component {
  constructor(props)
  {
    super(props);

  }
  
render()
{
    const data = [{etunimi: "Maija", sukunimi: "Korhonen", aloitusvuosi : 2018}, {etunimi: "Antti", sukunimi: "Heikkilä", aloitusvuosi : 2019}, {etunimi: "Liisa", sukunimi: "Laine", aloitusvuosi: 2017}, {etunimi: "Ville", sukunimi: "Virta", aloitusvuosi: 2016}];
    
    let kappaleet= data.map((item)=> {
          return <li>Etunimi oli {item.etunimi} sukunimi oli {item.sukunimi} ja aloitusvuosi oli {item.aloitusvuosi}</li>
      });
  
    return(
      <div>
        <ul>{kappaleet}</ul>
      </div>
    );
  }
}


