import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import "./airline.scss";
import "./pagination"
import { render } from "@testing-library/react";
import Pagination from "./pagination";


const Flight = (e) => {
  const [country, setCountry] = useState("");
  const [airline, setAirline] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);
  const [loading, setLoading] = useState(false);

  const airChange = (e) => {
    setCountry(e.target.value);
  };

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst =indexOfLast-postPerPage;
  const currentPosts = airline.slice(indexOfFirst, indexOfLast);
  let ApiKey = "37ac62-ded1cd";
  const Airline = (e) => {
    e.preventDefault();
    if (country !== "") {
      axios(
        `https://aviation-edge.com/v2/public/countryDatabase?key=${ApiKey}&nameCountry=${country}`
      ).then(({ data }) => getAirline(data[0].codeIso2Country));
    }
  };
  const getAirline = (iso) => {
    axios(
      `https://aviation-edge.com/v2/public/airlineDatabase?key=${ApiKey}&codeIso2Country=${iso}`
    ).then(({ data }) =>
      setAirline(data.filter((item) => item.statusAirline === "active"))
    );
    axios
      .request()
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className={"airline"}>
      <h2 className={"airline__title"}>Получить об авиакомпании</h2>
      <form className={"search__form"} onSubmit={Airline}>
        <label>
          <input
            className="search__input"
            placeholder={"Страна"}
            type="text"
            onChange={airChange}
            value={country}
          />
        </label>

        <button type={"submit"} className="search__btn2">
          Поиск
        </button>
      </form>
      <div className="row">
        {currentPosts
          .filter((item) => !item.error)
          .map((el, idx) => {
            return (
              <div
                key={el.id || el.airlineId}
                className={" col-xl-4 col-lg-6 col-md-6  "}
                id={"container"}
              >
                <div className="card-wrap1 ">
                  <div className={"card-inner"}>
                    <div className={"card-innerTitle"}>
                      <h2 className="card-title1">{el.nameAirline}</h2>
                    </div>

                    <div className="card-content ">
                      <div className={""}>
                        <div className={"card-content1"}>
                          <h4 className={"card-nametitle"}>Страна: </h4>{" "}
                          <h4>{el.country || el.nameCountry}</h4>
                        </div>
                        <div className={"card-content1"}>
                          <h4 className={"card-nametitle"}>Код страны: </h4>
                          <h4>{el.codeIso2Country}</h4>
                        </div>
                        <div className={"card-content1"}>
                          <h4 className={"card-nametitle"}>ИАТА код: </h4>
                          <h4>
                            {el.codeIataAirline
                              ? el.codeIataAirline
                              : "Неизвестно"}
                          </h4>
                        </div>
                        <div className={"card-content1"}>
                          <h4 className={"card-nametitle"}>Позывной: </h4>
                          <h4 className={"card-sign"}>
                            {el.callsign ? el.callsign : "Неизвестно"}
                          </h4>
                        </div>
                        <div className={"card-content1"}>
                          <h4 className={"card-nametitle"}>Основание: </h4>
                          <h4>{el.founding ? el.founding : "Неизвестно"} </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage} airline = {airline} postPerPage = {postPerPage}/>
      </div>

    </div>
  );
};

export default Flight;
