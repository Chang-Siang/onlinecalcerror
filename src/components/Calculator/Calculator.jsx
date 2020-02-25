import React from 'react';
import { Component } from 'react';
import { readRemoteFile } from 'react-papaparse'
import moment from 'moment';
import { MAPE, RMSE } from '../../lib/Metrics'
// Bs components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

// view components
import DatePick from './DatePick'
import ForecastReader from './ForecastReader'
import ClacScore from './ClacScore'
import CalcSaveResult from './CalcSaveResult'
import '../../stylesheets/Calculator.scss';

let ajaxUrl = "http://localhost:3020/"


let defFrom = ""
let defTo = ""

class Calculator extends Component {
    // ---------------------------------------------------
    // 生命週期
    // ---------------------------------------------------
    constructor() {
        super()
        // this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            isFileUpload: false,
            originData: [],
            username: "",
            from: "",
            to: "",
            mape: 0,
            rmse: 0,
        }
    }

    componentDidMount() {
        console.log('componentDidMount()');
        this.loadOriginData();
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    loadOriginData = () => {
        readRemoteFile('https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/elec_data/elec_merge_20160101_20190930.csv', {
            download: true,
            header: true,
            complete: (results) => {
                defFrom = new Date(results.data[0].date)
                defTo = new Date(results.data[(results.data).length - 2].date)
                this.setState({
                    originData: results.data,
                    from: defFrom,
                    to: defTo,
                })
            }
        })
    }

    ajaxServerItemAdd = (addItem) => {
        //處理payload
        const payload = addItem

        //作POST
        fetch(ajaxUrl + 'ranking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((response) => {
                //ok 代表狀態碼在範圍 200-299
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then((item) => {
                //這裡可以顯示一些訊息，或是結束指示動畫…
                alert("儲存成功")

            })
            .catch((error) => {
                //這裡可以顯示一些訊息
                // alert("儲存失敗")
                console.error('error:', error)
            })
    }

    // ---------------------------------------------------
    // 主程式
    // ---------------------------------------------------
    getOriginData = () => {
        const newData = [...this.state.originData]

        // time filte
        return newData
            .filter((column) => (
                this.state.from <= (new Date(column.date)) && (new Date(column.date)) <= this.state.to
            ))
            .map((column) => (
                column.kW
            ))
    }

    forecastDataCleaning = (data) => {
        // 展開運算子, 壓平陣列
        let newData = [].concat(...data)
        isNaN(newData[0]) && newData.splice(0, 1)

        // data clean
        return newData
            .filter((item) => (
                item
            ))
    }

    dataCheck = (forecastData) => {
        let originData = this.getOriginData()
        // console.log('originData', originData)
        // console.log('forecastData', forecastData)

        if (originData.length !== forecastData.length) {
            alert('上傳資料長度錯誤')
            return
        }

        this.calculateScore(originData, forecastData)
    }

    calculateScore = (originData, forecastData) => {
        let rmse = RMSE(originData, forecastData)
        let mape = MAPE(originData, forecastData)

        this.setState({
            isFileUpload: true,
            rmse: rmse,
            mape: mape,
        })
    }

    // ---------------------------------------------------
    // handle action
    // ---------------------------------------------------
    handleFromChange = (from) => {
        // 檢查是否為合法日期
        const temp = new Date(from)

        if (!isNaN(temp.valueOf())) {
            from = new Date(from.getFullYear(), from.getMonth(), from.getDate(), 0, 0, 0)
            if (defFrom > from) {
                alert('Out of Range.')
                from = defFrom;
            }
        }

        this.setState({
            from
        })
    }

    handleToChange = (to) => {
        // 檢查是否為合法日期
        const temp = new Date(to)

        if (!isNaN(temp.valueOf())) {
            to = new Date(to.getFullYear(), to.getMonth(), to.getDate(), 0, 0, 0)
            if (defTo < to) {
                to = defTo;
                alert('Out of Range.')
            }
        }

        this.setState({
            to
        }
        )
    }

    showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    }

    handleForce = (data, fileName) => {
        // 檢查附檔名，若不符合則判斷上傳失敗
        const validExts = [".xlsx", ".xls", ".csv"]
        const fileExt = fileName.substring(fileName.lastIndexOf('.'))
        if (validExts.indexOf(fileExt) < 0) {
            alert("檔案類型錯誤，可接受的副檔名有：" + validExts.toString())
            return
        }
        // 清洗 csv
        let forecastData = this.forecastDataCleaning(data.data)
        // 檢查長度
        this.dataCheck(forecastData)
    }

    handleChange = (event) => {
        this.setState({ username: event.target.value });
    }

    handleISaveResult = () => {
        const saveItem = {
            id: +new Date(),
            name: this.state.username,
            from: this.state.from,
            to: this.state.to,
            mape: this.state.mape,
            rmse: this.state.rmse
        }
        if (this.state.isFileUpload) {
            // 呼叫 Ajax存入資料庫
            this.ajaxServerItemAdd(saveItem)
            this.setState({ isFileUpload: false });
        } else {
            alert("請重新上傳檔案")
        }
    }

    render() {
        return (
            <div className="Calculator">
                <Row className="align-items-center calculator-date-range">
                    <Col xs={12} md={4} className="row-title">
                        <h2>Select a Date Range</h2>
                    </Col>
                    <Col xs={12} md={8}>
                        <DatePick
                            from={this.state.from}
                            to={this.state.to}
                            handleFromChange={this.handleFromChange}
                            handleToChange={this.handleToChange}
                        />
                        <Badge pill variant="primary">
                            {(this.state.to - this.state.from) / (1000 * 3600 * 24) + 1} Days
                        </Badge>
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center calculator-csv-reader">
                    <Col xs={12} md={4} className="row-title">
                        <h2>Select CSV File</h2>
                    </Col>
                    <Col xs={12} md={8}>
                        <ForecastReader handleForce={this.handleForce} />
                        <Badge pill variant="secondary">
                            <a href='https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/elec_data/Sample(273Days).csv'>
                                <span className="glyphicon glyphicon-download-alt" aria-hidden="true"></span>
                                File format template
                            </a>
                        </Badge>
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center calculator-score">
                    <Col xs={12} md={4} className="row-title">
                        {/* <ClacScore rmse={this.state.rmse} mape={this.state.mape} /> */}
                    </Col>
                    <Col xs={12} md={8}>
                        <ClacScore rmse={this.state.rmse} mape={this.state.mape} />
                        {/* <CalcSaveResult username={this.state.username} handleChange={this.handleChange} handleISaveResult={this.handleISaveResult} /> */}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Calculator