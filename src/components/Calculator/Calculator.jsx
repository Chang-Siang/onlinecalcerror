import React from 'react';
import { Component } from 'react';
import { readRemoteFile } from 'react-papaparse'
import moment from 'moment';
import { MAPE, nRMSE } from '../../lib/Metrics'
// Bs components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

// view components
import ForecastReader from './ForecastReader'
import ClacScore from './ClacScore'
import '../../stylesheets/Calculator.scss';

let ajaxUrl = "http://localhost:3020/"


class Calculator extends Component {
    // ---------------------------------------------------
    // 生命週期
    // ---------------------------------------------------
    constructor() {
        super()
        this.state = {
            isFileUpload: false,
            mape: 0,
            nrmse: 0,
            real: [],
            pred: []
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
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
    getRealData = () => {
        const newData = [...this.state.real]
        return newData
    }

    getPredData = () => {
        const newData = [...this.state.pred]
        return newData
    }

    dataCleaning = (data) => {
        // 展開運算子, 壓平陣列
        var newData = data.map(function (value) {
            if (value === '') {
                return '-'
            } else if (Number.isNaN(Number(value))) {
                return '-'
            } else {
                return Number(value)
            }
        })
        console.log(newData)
        return newData
    }

    calculateScore = (e) => {

        e.preventDefault()

        const real = this.dataCleaning(this.getRealData())
        const pred = this.dataCleaning(this.getPredData())

        if (real.length !== pred.length) {
            alert('資料長度不同')
            return
        }

        let newReal = [...real]
        let newPred = [...pred]

        let i = 0;
        while (i < newReal.length) {
            if (newReal[i] === '-') {
                newReal.splice(i, 1)
                newPred.splice(i, 1)
            } else if (newPred[i] === '-') {
                newReal.splice(i, 1)
                newPred.splice(i, 1)
            } else {
                i++
            }
        }

        let nrmse = nRMSE(newReal, newPred)
        let mape = MAPE(newReal, newPred)

        this.setState({
            real: real,
            pred: pred,
            isFileUpload: true,
            nrmse: nrmse,
            mape: mape,
        })
    }

    applyData = (target, data) => {
        if (target === 'pred') {
            this.setState({
                pred: data,
            })
        } else {
            this.setState({
                real: data,
            })
        }
    }

    // ---------------------------------------------------
    // handle action
    // ---------------------------------------------------

    handleForce = (target, data, fileName) => {
        // 檢查附檔名，若不符合則判斷上傳失敗
        const validExts = [".xlsx", ".xls", ".csv"]
        const fileExt = fileName.substring(fileName.lastIndexOf('.'))
        if (validExts.indexOf(fileExt) < 0) {
            alert("檔案類型錯誤，可接受的副檔名有：" + validExts.toString())
            return
        }

        // 清洗 csv
        let newData = [].concat(...data.data)
        // let ary = [].concat(...newData)
        isNaN(newData[0]) && newData.splice(0, 1)

        this.applyData(target, newData)
    }

    handleTextareaChange = (target, e) => {

        let ary = String(e.target.value).split('\n')
        if (target === 'pred') {
            this.setState({ pred: ary })
        } else {
            this.setState({ real: ary })
        }
    }

    render() {
        return (
            <div className="Calculator">
                <Row>
                    <Col xs={12} md={6}>
                        <Row className="align-items-center calculator-textarea">
                            <Col xs={12} className="row-title">
                                <h2>Real Answer</h2>
                            </Col>
                            <Col xs={12} className="row-textarea">
                                <textarea value={this.state.real.join('\n')} placeholder='Please enter some numbers, separated by line breaks.' className="form-control" rows={10} onChange={(e) => this.handleTextareaChange('real', e)} />
                                <br />
                                <Badge pill variant="primary">
                                    {this.state.real.length} Data Points
                                </Badge>
                            </Col>
                            <Col xs={12} className="calculator-csv-reader">
                                <ForecastReader handleForce={(...e) => this.handleForce('real', ...e)} />
                                <Badge pill variant="secondary">
                                    <a href='https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/elec_data/Sample(273Days).csv'>
                                        <span className="glyphicon glyphicon-download-alt" aria-hidden="true"></span>
                                        File format template
                                    </a>
                                </Badge>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="align-items-center calculator-textarea">
                            <Col xs={12} className="row-title">
                                <h2>Predictive Value</h2>
                            </Col>
                            <Col xs={12} className="row-textarea">
                                <textarea value={this.state.pred.join('\n')} placeholder='Please enter some numbers, separated by line breaks.' className="form-control" rows='10' onChange={(e) => this.handleTextareaChange('pred', e)} />
                                <br />
                                <Badge pill variant="primary">
                                    {this.state.pred.length} Data Points
                                </Badge>
                            </Col>
                            <Col xs={12} className="calculator-csv-reader">
                                <ForecastReader handleForce={(...e) => this.handleForce('pred', ...e)} />
                                <Badge pill variant="secondary">
                                    <a href='https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/elec_data/Sample(273Days).csv'>
                                        <span className="glyphicon glyphicon-download-alt" aria-hidden="true"></span>
                                        File format template
                                    </a>
                                </Badge>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center">
                    <Col xs={12} className="row-title">
                        <Button variant="primary" onClick={this.calculateScore}>
                            Calculate
                        </Button>
                        {/* <ClacScore rmse={this.state.rmse} mape={this.state.mape} /> */}
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center calculator-score">
                    <Col xs={12}>
                        <ClacScore nrmse={this.state.nrmse} mape={this.state.mape} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Calculator