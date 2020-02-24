import React from "react";
import moment from 'moment';
import MaterialTable from 'material-table'


const BasicTable = ({ rankingData, onItemDelClick }) => {
    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
                title="Ranking"
                columns={[
                    { title: '上傳者', field: 'name' },
                    {
                        title: '預測範圍',
                        field: 'range',
                        render: rowData => <div>[{moment(rowData.from).format('YYYY-MM-DD')}] - [{moment(rowData.to).format('YYYY-MM-DD')}]</div>,
                        customFilterAndSearch: (term, rowData) => moment(rowData.from).format('YYYY-MM-DD').indexOf(term) !== -1 || moment(rowData.to).format('YYYY-MM-DD').indexOf(term) !== -1
                    },
                    {
                        title: 'RMSE',
                        field: 'rmse',
                        type: 'numeric',
                        render: rowData => <div>{rowData.rmse.toFixed(6)}</div>
                    },
                    {
                        title: 'MAPE',
                        field: 'mape',
                        type: 'numeric',
                        render: rowData => <div>{rowData.mape.toFixed(6)}</div>
                    },
                    {
                        title: '上傳時間',
                        field: 'id',
                        render: rowData => <div>{moment(rowData.id).format('YYYY-MM-DD HH:mm')}</div>,
                        customFilterAndSearch: (term, rowData) => moment(rowData.id).format('YYYY-MM-DD HH:mm').indexOf(term) !== -1
                    },
                    // { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
                ]}
                data={rankingData}
                options={{
                    actionsColumnIndex: -1,
                    filtering: true
                }}
                editable={{
                    onRowDelete: rowData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    onItemDelClick(rowData.tableData.id)
                                }
                                resolve()
                            }, 1000)
                        }),
                }}
            />
        </div>
    );
}

export default BasicTable