import React, { Fragment } from 'react'
import {
  faPaperclip,
  faPaperPlane,
  faTrash,
  faUser,
  faTag,
  faCheckSquare,
  faCheck,
  faFile,
  faCloudDownloadAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Fragment>
    <div className="user-row">
      <img
        className="user"
        src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
        alt="yo"
      />
      <span>Nathalie Williams</span>
      <div className="action-buttons">
        <div className="btn cursor-pointer">
          <FontAwesomeIcon icon={faTrash} color="#4d76fd" />
        </div>
        <div className="btn cursor-pointer">
          <FontAwesomeIcon icon={faUser} color="#4d76fd" />
        </div>
        <div className="btn cursor-pointer">
          <FontAwesomeIcon icon={faTag} color="#4d76fd" />
        </div>
        <div className="btn cursor-pointer">
          <FontAwesomeIcon icon={faCheckSquare} color="#4d76fd" />
        </div>
        <div className="btn cursor-pointer">
          <FontAwesomeIcon icon={faPaperclip} color="#4d76fd" />
        </div>
      </div>
    </div>
    <div className="content-container">
      <div className="task-status task-status-answered margin-right-15">
        <FontAwesomeIcon icon={faCheck} color="white" />
      </div>
      <div className="mail-content">
        <div className="mail-section">
          <div className="mail-section-header">Hello marketing</div>
          <span>2 Feb, 2020</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            accumsan commodo lectus gravida dictum. Aliquam a dui eu arcu
            hendrerit porta sed in velit. Fusce eu semper magna. Aenean porta
            facilisis neque, ac dignissim magna vestibulum eu. Etiam id ligula
            eget neque placerat ultricies in sed neque. Nam vitae rutrum est.
            Etiam non condimentum ante, eu consequat orci. Aliquam a dui eu arcu
            hendrerit porta sed in velit. Fusce eu semper magna.
          </p>
        </div>
        <div className="mail-section">
          <span className="mail-history">
            <strong>Okla Nowak</strong> assigned to Natalie Smith. 25 Nov, 2019
          </span>
          <span className="mail-history">
            <strong>Okla Nowak</strong> assigned to Natalie Smith. 25 Nov, 2019
          </span>
          <span className="mail-history">
            <strong>Okla Nowak</strong> assigned to Natalie Smith. 25 Nov, 2019
          </span>
        </div>
        <div className="mail-section">
          <div className="mail-checklist">
            <div className="mail-checklist">
              <div className="task-status task-status-answered">
                <FontAwesomeIcon icon={faCheck} color="white" />
              </div>
              <span>
                <strong className="text-color-blue margin-right-15">
                  Natalie completed this task.
                </strong>{' '}
                19 May, 2020
              </span>
            </div>
          </div>
        </div>
        <div className="mail-section">
          <div className="attachment-row">
            <div className="file-container">
              <div className="file-box">
                <FontAwesomeIcon icon={faFile} />
              </div>
              <div>
                <h5>FileName.docx</h5>
                <div className="file-date">added 20 Feb, 2020</div>
              </div>
            </div>
            <div className="attachment-row-actions">
              <FontAwesomeIcon
                icon={faTrash}
                size="2x"
                className="margin-right-15 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faCloudDownloadAlt}
                size="2x"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="new-mail">
      <div className="email-textarea">
        <input type="text" placeholder="Write a comment..." />
      </div>
      <div className="new-mail-option cursor-pointer">
        <FontAwesomeIcon icon={faPaperclip} color="#a1a4b9" size="2x" />
      </div>
      <div className="new-mail-option new-mail-option-send cursor-pointer">
        <FontAwesomeIcon icon={faPaperPlane} color="white" size="2x" />
      </div>
    </div>
  </Fragment>
)
