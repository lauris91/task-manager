import { range } from 'lodash'
import React from 'react'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const dates = [29, 30, 31, ...Array.from(range(1, 31)), 1, 2]
const noCurrentMonthDayIndexes = [0, 1, 2, 33, 34]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <div className="calendar-wrapper-header">
        <div className="week-month">
          <button className="week active">Week</button>
          <button className="month">Month</button>
        </div>
        <div className="month-info">
          <div className="current-month">April</div>
          <div className="current-year">2021</div>
        </div>
        <div className="week-month">
          <button className="active weekends">Weekends</button>
          <button className="add-task">Add task</button>
        </div>
      </div>
      <div className="calendar-container">
        <div className="calendar">
          {days.map((el) => (
            <div key={el} className="calendar-cell day-name">
              {el}
            </div>
          ))}
          {dates.map((el, i) => (
            <div
              key={i}
              className={`calendar-cell day 
                ${i === 3 ? 'project project-design' : ''}
                ${i === 8 ? 'project project-marketing' : ''}
                ${i === 9 ? 'project project-development' : ''}
                ${i === 10 ? 'project project-management' : ''}
              `}
            >
              <>
                <div
                  className={`${
                    noCurrentMonthDayIndexes.includes(i) && 'text-color-grey'
                    //   : 'text-color-default'
                  }`}
                >
                  <span>{el}</span>
                </div>
                {(i === 3 || i === 8 || i === 9 || i === 10) && (
                  <div>
                    <div className="department-name">Marketing</div>
                    <ul>
                      <li>Create 3 ilustrations for Crown and post it</li>
                      <li>Update responsive design</li>
                    </ul>
                    <div className="check-square">
                      <FontAwesomeIcon
                        icon={faCheckSquare}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
