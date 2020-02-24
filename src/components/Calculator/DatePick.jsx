import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';
import '../../stylesheets/DatePick.scss'

// local setting
const MONTHS = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
];

// def date range
let defFrom = null
let defTo = null

const initDefDate = (from, to) => {
    if (defFrom === null && from !== "") {
        console.log('from :', from);
        defFrom = from
        defTo = to
    }
}

const DatePick = ({ from, to, handleFromChange, handleToChange }) => {
    initDefDate(from, to)
    const modifiers = { start: from, end: to };
    return (
        <div>
            <div className="InputFromTo">
                <DayPickerInput
                    value={from}
                    placeholder="From"
                    formatDate={formatDate}
                    parseDate={parseDate}
                    dayPickerProps={{
                        // data
                        modifiers,
                        selectedDays: [from, { from, to }],
                        // style setting
                        months: MONTHS,
                        enableOutsideDays: false,
                        numberOfMonths: 2,
                        // disabledDays
                        fromMonth: defFrom,
                        toMonth: to,
                        disabledDays: {
                            before: defFrom,
                            after: to
                        },
                        // action
                        onDayClick: () => to.getInput().focus(),
                    }}
                    onDayChange={handleFromChange}
                />
                <span> — </span>
                <span className="InputFromTo-to">
                    <DayPickerInput
                        ref={el => (to = el)}
                        value={to}
                        placeholder="To"
                        formatDate={formatDate}
                        parseDate={parseDate}
                        dayPickerProps={{
                            // data
                            month: from,
                            modifiers,
                            selectedDays: [from, { from, to }],
                            // style setting
                            months: MONTHS,
                            enableOutsideDays: false,
                            numberOfMonths: 2,
                            // disabledDays
                            fromMonth: from,
                            toMonth: defTo,
                            disabledDays: {
                                before: from,
                                after: defTo
                            },
                        }}
                        onDayChange={handleToChange}
                    />
                </span>
            </div>
        </div>
    )
}


export default DatePick