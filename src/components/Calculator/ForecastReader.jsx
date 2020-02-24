import React from "react";
// import CSVReader from "react-csv-reader";
import { CSVReader } from 'react-papaparse'
import '../../stylesheets/Reader.scss'

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

const ForecastReader = ({ handleForce }) => {
  return (
    <div className="react-csv">
      <CSVReader
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
    </div>
  )
}


export default ForecastReader