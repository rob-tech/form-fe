export const addExperience = (experience) => async dispatch => {
  try {
    var res = await fetch("http://localhost:3000/form/experience", {
      method: "POST",
      body: JSON.stringify(experience),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTRhNTQ5NTQxOTcwZDU1MGMxNmE1OTYiLCJpYXQiOjE1ODE5MzQ1NTMsImV4cCI6MTU4MTk0NTM1M30.TIU_BqT_vgUI5fLqBeK06wIvJzAmJo9teieKrfVh_1c"
      }
    })
    if (res.ok) {
      let experienceRes = await res.json();
      dispatch({
        type: "ADD_EXPERIENCE",
        payload: experienceRes
      })
    }

  } catch (err) {
    console.log(err)
  }
}


export const submitLogin = (user) => async dispatch => {
  try {
    var res = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",

      }
    })
    if (res.ok) {
      let tokenJson = await res.json();
      dispatch({
        type: "USER",
        payload: {
          user: tokenJson.user,
          token: tokenJson.token
        }
      })

      localStorage.setItem("accessToken", tokenJson.token)
  
    }
    else{
      dispatch({
        type: "ERR_MSG",
        payload: "Username or password is wrong. If you don't have an account please register."
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export const submitRegister = (user) => async dispatch => {
  try {
    var res = await fetch("http://localhost:3000/user/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (res.ok) {
      let newUser = await res.json();
      dispatch({
        type: "NEW_USER",
        payload: newUser
        
      })

    }
    else{
      dispatch({
        type: "ERR_MSG",
        payload: "You already have an account. Please log in."
      })
    }
  } catch (err) {
    console.log(err)
  }
}


