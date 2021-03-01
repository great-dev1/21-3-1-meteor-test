import React from 'react';

const App = () => (
  <>
    <div className="app-mainmenu">
      <div className="container">
        <div className="menu-list">
          <a className="list-item active" href="#">
            <i className="item-icon icon-check" />
            <p>Tasks</p>
          </a>
          <a className="list-item" href="#">
            <i className="item-icon icon-toolkit" />
            <p>Projects</p>
          </a>
          <a className="list-item" href="#">
            <i className="item-icon icon-user" />
            <p>People</p>
          </a>
          <a className="list-item" href="#">
            <i className="item-icon icon-calendar" />
            <p>Calendar</p>
          </a>
          <a className="list-item" href="#">
            <i className="item-icon icon-inbox" />
            <p>Inbox</p>
          </a>
          <a className="list-item" href="#">
            <i className="item-icon icon-timer" />
            <p>Timesheets</p>
          </a>
          <hr />
          <a className="list-item" href="#">
            <i className="item-icon icon-settings" />
            <p>Settings</p>
          </a>
          <a className="list-item" onClick={() => console.log('support')}>
            <i className="item-icon icon-question-mark" />
            <p>Support</p>
          </a>
        </div>
      </div>
    </div>
    <div className="page">
      <div className="page-header">
        <div className="content has-back-button">
          <div className="back-button">
            <a>
              <i className="icon-chevron-left" />
            </a>
          </div>
          <div className="content-block">
            <div className="page-title">
              <h1>Tasks</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="main-tasks-page content list-view">
        <form className="add-task" noValidate="">
          <div>
            <div className="fieldset add-task-input fieldset-stripped">
              <div className="fieldset-content">
                <label className="fieldset-label">
                  <span className="fieldset-label-content has-icon">
                    <i className="icon-plus" />
                  </span>
                  <input
                    className=""
                    name="title"
                    placeholder="Add new task"
                    type="text"
                    autoComplete="off"
                    value=""
                    onChange={() => {}}
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
        <div className="groups-wrapper">
          <div className="group-container open">
            <div className="group-head">
              <p>Incomplete</p>
            </div>
            <div className="group-content">
              <div className="task">
                <a
                  className="task-link has-color-tag"
                  href="#"
                  style={{ borderColor: '#4e42c3' }}
                >
                  <div className="task-link-head">
                    <div className="task-checkbox">
                      <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkbox-toggle">
                          <i className="checkbox-icon icon-check" />
                        </span>
                      </label>
                    </div>
                    <div className="task-title">
                      <p>Task1</p>
                    </div>
                  </div>
                  <div className="task-link-body">
                    <div className="indicators">
                      <span className="icon-indicator">
                        <i className="icon-description" />
                      </span>
                      <span className="icon-indicator">
                        <i className="icon-chat" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="task">
                <a className="task-link" href="#">
                  <div className="task-link-head">
                    <div className="task-checkbox">
                      <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkbox-toggle">
                          <i className="checkbox-icon icon-check" />
                        </span>
                      </label>
                    </div>
                    <div className="task-title">
                      <p>Task2</p>
                    </div>
                  </div>
                  <div className="task-link-body">
                    <div className="custom-fields">
                      <div className="custom-field custom-field-single">
                        <p className="color-light has-color-tag">
                          <span className="field-background" />
                          <span className="field-title">Highest</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="task">
                <a className="task-link" href="#">
                  <div className="task-link-head">
                    <div className="task-checkbox">
                      <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkbox-toggle">
                          <i className="checkbox-icon icon-check" />
                        </span>
                      </label>
                    </div>
                    <div className="task-title">
                      <p>Task3</p>
                    </div>
                  </div>
                  <div className="task-link-body">
                    <div className="indicators">
                      <span className="icon-indicator">
                        <i className="icon-description" />
                      </span>

                      <span className="icon-indicator">
                        <i className="icon-attach" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="task">
                <a className="task-link" href="#">
                  <div className="task-link-head">
                    <div className="task-checkbox">
                      <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkbox-toggle">
                          <i className="checkbox-icon icon-check" />
                        </span>
                      </label>
                    </div>
                    <div className="task-title">
                      <p>Task4</p>
                    </div>
                  </div>
                  <div className="task-link-body">
                    <div className="indicators">
                      <span className="icon-indicator">
                        <i className="icon-description" />
                      </span>
                      <span className="icon-indicator">
                        <i className="icon-chat" />
                      </span>
                      <span className="icon-indicator">
                        <i className="icon-timer" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="group-container open">
            <div className="group-head">
              <p>Completed</p>
            </div>
            <div className="group-content">
              <div className="task">
                <a className="task-link" href="#">
                  <div className="task-link-head">
                    <div className="task-checkbox">
                      <label className="checkbox">
                        <input type="checkbox" defaultChecked />
                        <span className="checkbox-toggle">
                          <i className="checkbox-icon icon-check" />
                        </span>
                      </label>
                    </div>
                    <div className="task-title">
                      <p>Task5</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="task">
                <a className="task-link" href="#">
                  <div className="task-link-head">
                    <div className="task-checkbox">
                      <label className="checkbox">
                        <input type="checkbox" defaultChecked />
                        <span className="checkbox-toggle">
                          <i className="checkbox-icon icon-check" />
                        </span>
                      </label>
                    </div>
                    <div className="task-title">
                      <p>Task6</p>
                    </div>
                  </div>
                  <div className="task-link-body">
                    <div className="indicators">
                      <span className="icon-indicator">
                        <i className="icon-chat" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
