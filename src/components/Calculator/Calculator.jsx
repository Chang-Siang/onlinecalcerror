import React from 'react';
import { Component } from 'react';
import { readRemoteFile } from 'react-papaparse'
import moment from 'moment';
import { MAPE, nRMSE } from '../../lib/Metrics'
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
        this.state = {
            isFileUpload: false,
            originData: [],
            username: "",
            from: "",
            to: "",
            mape: 0,
            rmse: 0,
            real: [],
            pred: []
        }
    }

    componentDidMount() {
        this.loadOriginData();
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
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
        let rmse = nRMSE(originData, forecastData)
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

    // real
    handleTextareaChange = (target, e) => {
        console.log(String(e.target.value).split('\n').map(Number))
        if (target == 'pred') {
            this.setState({ pred: String(e.target.value).split('\n').map(Number) })
        } else {
            this.setState({ real: String(e.target.value).split('\n').map(Number) })
        }
    }

    render() {
        return (
            <div className="Calculator">
                <Row className="align-items-center calculator-date-range">
                    <Col xs={12} md={4} className="row-title">
                        <h2>正確答案</h2>
                    </Col>
                    <Col xs={12} md={8}>
                        <textarea value={this.state.value} onChange={(e) =>this.handleTextareaChange('real', e)} />
                        <br />
                        <Badge pill variant="primary">
                            {this.state.real.length} Data Points
                        </Badge>
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center calculator-csv-reader">
                    <Col xs={12} md={4} className="row-title">
                        <h2>預測數值</h2>
                    </Col>
                    <Col xs={12} md={8}>
                        <textarea value={this.state.value} onChange={(e) =>this.handleTextareaChange('pred', e)} />
                        <br />
                        <Badge pill variant="success">
                            {this.state.pred.length} Data Points
                        </Badge>
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
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Calculator