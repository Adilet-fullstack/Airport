import React, { useState, Component, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./airport.scss";
import data from "bootstrap/js/src/dom/data";
import { render } from "@testing-library/react";
import ReactPaginate from "react-paginate";
import Paginate from "./paginate";
import GoogleMapReact from 'google-map-react';
import Pagination from "../flight/pagination";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Airport = (e) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [iso, setIso] = useState("");
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState(false);
  const [currentsPage, setCurrentsPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const indexOfLast = currentsPage * postsPerPage;
  const indexOfFirst =indexOfLast-postsPerPage;
  const currentsPosts = result.slice(indexOfFirst, indexOfLast);
  const airChange = (e) => {
    setCountry(e.target.value);
  };
  const cityChange = (e) => {
    setCity(e.target.value);
  };
  let ApiKey = "37ac62-ded1cd";
  const getAirport = (e) => {
    e.preventDefault();
    if (country !== "") {
      axios(
        `https://aviation-edge.com/v2/public/countryDatabase?key=${ApiKey}&nameCountry=${country}`
      ).then(({ data }) => getIso(data[0].codeIso2Country));
    }
  };

  const getIso = (iso) => {
    axios(
      `https://aviation-edge.com/v2/public/airportDatabase?key=${ApiKey}&codeIso2Country=${iso}`
    ).then(({ data }) => {
        setResult(getNewArr(data));
        setStatus(true)
    });
  };

  const getNewArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      axios("https://airport-info.p.rapidapi.com/airport", {
        method: "GET",
        params: { iata: arr[i].codeIataAirport },
        headers: {
          "x-rapidapi-host": "airport-info.p.rapidapi.com",
          "x-rapidapi-key":
            "d03e4c4f56msh7e595181202a940p1f636bjsn035f6ced9d5a",
        },
      }).then(({ data }) => {
        arr[i] = data;
      });

      axios
        .request()
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    return arr;
  };

  return (
    <div>
      <form className={"search__form"} onSubmit={getAirport}>
        <label>
          <input
            className="search__input"
            placeholder={"Страна"}
            type="text"
            // pattern='A-Za-z'
            onChange={airChange}
            value={country}
          />
        </label>
        <label>

        </label>
        <button type={"submit"} className="search__btn2">
          Поиск
        </button>
      </form>
        <a href="#" onClick={()=>setStatus(false)} className={` show__btn  ${status ? "" : "disable" } ` } > Найдено аэропортов : {result.length} </a>

     <div className={` airports__list  ${!status ? "" : "disable" } ` }>
         {currentsPosts.filter((item) =>!item.error)
             .map((el, idx) => {
                 return (

                     <div key={el.id }>
                         <div className="card-wrap">
                             <div className="card-header three">
                                 <GoogleMapReact
                                     bootstrapURLKeys={{ key:"AIzaSyBXFAxSgXP7b5D25WEtjxkYqoWM2PjxaLg"}}
                                          defaultCenter={{
                                            lat: el.latitude, lng: el.longitude}}
                                         defaultZoom={11}
                                         >
                                         <AnyReactComponent
                                         lat={el.latitude}
                                         lng={el.longitude}
                                         text={el.name}
                                         />
                                         </GoogleMapReact>
                                         </div>
                             <div className={"card-inner"}>

                                    <h2 className="card-title12">{el.name}</h2>


                                 <div className="card-content212">
                                     <div>
                                         <div className={"card-content3333"}>
                                             <h4>Страна</h4> <h4>{el.country || el.nameCountry}</h4>
                                         </div>
                                         <div className={"card-content3333"}>
                                             <h4>Код страны:</h4>
                                             <h4>{el.country_iso || el.country_iso}</h4>
                                         </div>
                                         <div className={"card-content3333"}>
                                             <h4>ИАТА код:</h4>
                                             <h4>{el.iata || el.codeIataAirport}</h4>
                                         </div>
                                         <div className={"card-content3333"}>
                                             <h4>Геолокация:</h4>
                                             <h4>{el.location ? el.location : "Неизвестно"}</h4>
                                         </div>
                                         <div className={"card-content3333"}>
                                             <h4>Телефон:</h4>
                                             <h4>{el.phone ? el.phone : "Отсувстует"}</h4>
                                         </div>
                                     </div>
                                   {
                                     el.website
                                         ? <a className="card-btn "   href={el.website} target='_blank'>
                                           Перейти
                                         </a>
                                         : <p className="card-btn1"> Перейти</p>
                                   }

                                 </div>

                             </div>
                         </div>
                     </div>
                 );
             })}
             <Paginate currentsPage = {currentsPage} setCurrentsPage = {setCurrentsPage} result = {result} postsPerPage = {postsPerPage} />
     </div>


      {/*<div>*/}
      {/*    */}
      {/*    <div className="card-wrap">*/}
      {/*        <div className="card-header three">*/}
      {/*            /!*<i className="fab fa-html5"></i>*!/*/}
      {/*        </div>*/}
      {/*        <div className={'card-inner'}>*/}
      {/*            <h2 className="card-title">Манас Аэропорт</h2>*/}
      {/*            <div className="card-content">*/}
      {/*                <div>*/}
      {/*                    <h4>Cтрана:</h4>*/}
      {/*                    <h4>Код страны:</h4>*/}
      {/*                    <h4>ИАТА код:</h4>*/}
      {/*                    <h4>ИКАО код:</h4>*/}
      {/*                    <h4>Геолокация:</h4>*/}
      {/*                    <h4>Телефон:</h4>*/}
      {/*                </div>*/}
      {/*                <div className="card-content-2">*/}
      {/*                    <h4>Кыргызстан</h4>*/}
      {/*                    <h4>KG</h4>*/}
      {/*                    <h4>FRU</h4>*/}
      {/*                    <h4>UAFA</h4>*/}
      {/*                    <h4>Бишкек, Кыргызстан</h4>*/}
      {/*                    <h4>+996709549048</h4>*/}
      {/*                </div>*/}
      {/*                <a className="card-btn " href='#'>Перейти</a>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}

    </div>
  );
};

export default Airport;
