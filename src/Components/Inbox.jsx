import React, { useState } from 'react'
import {
  faChevronDown,
  faChevronUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [opened, setOpened] = useState(null)

  return (
    <React.Fragment>
      <div className="inbox">
        <div className="department department--border-violet">
          Marketing
          <FontAwesomeIcon
            icon={opened === 'marketing' ? faChevronUp : faChevronDown}
            color="black"
            className="cursor-pointer"
            onClick={() =>
              setOpened(opened === 'marketing' ? null : 'marketing')
            }
          />
        </div>
        {opened === 'marketing' && (
          <div className="department-messages">
            <div className="msg msg-answered">
              <div className="task-status task-status-answered">
                <FontAwesomeIcon icon={faCheck} color="white" />
              </div>
              <div className="msg-content">
                <h4>Hello marketing</h4>
                <span>20 Feb, 2020</span>
              </div>
              <img
                src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
                alt="yo"
              />
            </div>
            <div className="msg">
              <div className="task-status">
                <FontAwesomeIcon icon={faCheck} color="#979dc3" />
              </div>
              <div className="msg-content">
                <h4>Write an article</h4>
                <span>19 Feb, 2020</span>
              </div>
              <img
                src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
                alt="yo"
              />
            </div>
            <div className="msg msg-answered">
              <div className="task-status task-status-answered">
                <FontAwesomeIcon icon={faCheck} color="white" />
              </div>
              <div className="msg-content">
                <h4>I like your marketing</h4>
                <span>10 Feb, 2020</span>
              </div>
              <img
                src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
                alt="yo"
              />
            </div>
          </div>
        )}
        <div className="department department--border-blue">
          Design
          <FontAwesomeIcon
            icon={opened === 'design' ? faChevronUp : faChevronDown}
            color="black"
            className="cursor-pointer"
            onClick={() => setOpened(opened === 'design' ? null : 'design')}
          />
        </div>
        {opened === 'design' && (
          <div className="department-messages">
            <div className="msg msg-answered">
              <div className="task-status task-status-answered">
                <FontAwesomeIcon icon={faCheck} color="white" />
              </div>
              <div className="msg-content">
                <h4>Hello Design!</h4>
                <span>20 Feb, 2020</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                alt="yo"
              />
            </div>
            <div className="msg msg">
              <div className="task-status task-status-answered">
                <FontAwesomeIcon icon={faCheck} color="white" />
              </div>
              <div className="msg-content">
                <h4>Design meeting notes</h4>
                <span>2 Feb, 2020</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                alt="yo"
              />
            </div>
          </div>
        )}
      </div>
      <div className="add-task">
        <button>Add task</button>
      </div>
    </React.Fragment>
  )
}
