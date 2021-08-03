import React,{useState} from 'react'

export const Create = (props) => {
    const [note,addNote]=useState({
        title:"",
        content:""
      });
      const save=(event)=>{
        const {name,value}=event.target;
        addNote((preData)=>{
          return{
            ...preData,
            [name]:value
          }
        })
      }
      const InsertDom=()=>{
          props.passNote(note)
      }
    return (
        <>
        <header>
      <div className="input-area">
        <div>
          <input type="text" name="title" id="userTitle" placeholder="Enter Your Title"  onChange={save}  />
        </div>
        <div>
          <textarea name="content" id="" cols="10" rows="5" placeholder="Enter Your Notes"onChange={save}  ></textarea>
        </div>
        <div>
          <input type="button" value="submit" onClick={InsertDom} />
          <input type="button" value="reset"  />
        </div>
      </div>
    </header>
        </>
    )
}
