import React from "react";
import { Component } from 'react';
import BasicTable from "./BasicTable"

let ajaxUrl = "http://localhost:3020/"



class Ranking extends Component {
    //建構式
    constructor() {
        super()
        this.state = {
            items: [],
            loading: false,
            error: false
        }
    }

    // 元件狀態
    componentWillMount() {
    }

    componentDidMount() {

        this.setState({
            loading: true
        })

        // 元件"已經"載入，所以可以載入資料進來
        this.ajaxServerItemsLoad()
    }


    // Ajax
    ajaxServerItemsLoad = () => {
        fetch(ajaxUrl + 'ranking', {
            method: 'GET'
        })
            .then((response) => {
                //ok 代表狀態碼在範圍 200-299
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then((itemList) => {

                //加入{ isEditing: false }屬性
                const items = itemList.map((item) => {
                    return Object.assign({}, item, { range: new Date(item.to) - new Date(item.from) })
                })
                console.log('items :', items);
                //載入資料，重新渲染
                this.setState({
                    items: items,
                    loading: false
                })
            })
            .catch((error) => {
                //這裡可以顯示一些訊息
                console.error(error)
                this.setState({
                    loading: false,
                    error: true
                })
            })
    }

    ajaxServerItemDelete = (deleteItem) => {
        //處理payload，不需要isEditing欄位
        const { id } = deleteItem

        //作POST
        fetch(ajaxUrl + `ranking/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                //ok 代表狀態碼在範圍 200-299
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then((item) => {
                //這裡可以顯示一些訊息，或是結束指示動畫…
                console.log('item:', item)
            })
            .catch((error) => {
                console.error('error:', error)
            })
    }

    handleDelItem = index => {
        //拷貝一個新陣列
        const newItems = [...this.state.items]

        // 呼叫 Ajax 刪除資料
        this.ajaxServerItemDelete(newItems[index])

        newItems.splice(index, 1)

        //整個陣列重新更新
        this.setState({
            items: newItems,
        })
    }

    render() {
        return (
            <div>
                <BasicTable rankingData={this.state.items} onItemDelClick={this.handleDelItem} />
            </div>
        )

    }
}

export default Ranking