import React from 'react'

export const Note = (props) => {
    return (
        <>
          <div className="card col-lg-4 col-12">
              <div className="card-body">
                <h5 className="card-title text-center">{props.title}</h5>
                <hr/>
                <p className="card-text">{props.userNote}</p>
                <a href="#" className="btn btn-primary">Delete</a>
              </div>
            </div>
        </>
    )
}
