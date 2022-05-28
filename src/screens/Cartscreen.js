import React, { useState } from 'react'
import Axios from 'axios'

const Cartscreen = (props) => {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const [data, setData] = useState({
    userid:"",
    body:"",
    desc:""
  })
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      userId: data.userid,
      title: data.body,
      body: data.desc
    })
    .then(res=>{
      console.log(res.data)
      e.target.reset()
    })
  }
  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={(e)=> submit(e)}>
        <input
          id="userid"
          className="form-field"
          type="text"
          placeholder="USER-ID"
          name="UserId"
          value={data.userid}
          onChange={(e) => handle(e)}
        />
        <input
          id="body"
          className="form-field"
          type="text"
          placeholder="Body"
          name="Body"
          value={data.body}
          onChange={(e) => handle(e)}
        />
        <input
          id="desc"
          className="form-field"
          type="text"
          placeholder="Description"
          name="description"
          value={data.desc}
          onChange={(e) => handle(e)}
        />
        <button className="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>

  )
}

export default Cartscreen