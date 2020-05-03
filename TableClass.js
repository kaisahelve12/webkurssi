import React from 'react';


export default class TableClass extends React.Component {
  constructor(props)
  {
    super(props);

  }
  
render()
{
    const otsikot =[{nimi: "nimi", osoite: "osoite", avuosi: "aloitusvuosi"}];
    let TableHeader = otsikot.map((item) => {
        return <td>{item.nimi}   {item.osoite}   {item.avuosi}</td>
    });

    const data = [{enimi: "Maija Mallikas", osoite: "Asematie 5", aloitusvuosi : 2018}, {enimi: "Antti Aalto", osoite: "Kirkkokatu 3", aloitusvuosi : 2019}, {enimi: "Liisa Laitinen", osoite: "Lastutie 6", aloitusvuosi: 2017}, {enimi: "Ville Virta", osoite: "Virtatie 7", aloitusvuosi: 2016}];
    
    let TableRow= data.map((item)=> {
          return<tr>{item.enimi}  {item.osoite}  {item.aloitusvuosi}</tr>
      });
      const otsikko =[{name: "name", address: "address", year: "year"}];
      let TableHeaders = otsikko.map((item) => {
          return <td>{item.name}   {item.address}   {item.year}</td>
      });
  
    return(
      <div>
        <table border ='1'>
            <tr>{TableHeader}</tr>
            {TableRow}
        </table>
        <table border ='1'>
            <tr>{TableHeaders}</tr>
            {TableRow}
        </table>
      </div>
    );
  }
}
