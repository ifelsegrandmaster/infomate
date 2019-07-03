import * as actionTypes from './actionTypes';
import axios from 'axios';
export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token =>{
    axios.defaults.headers = {
        'Content-Type': "application/json",
        "Authorization":"Token " + token
    }
    axios.get('http://127.0.0.1:8000/auth/user/')
        .then(res => {
            const data = res.data;
            localStorage.setItem('pk', data.pk);
            localStorage.setItem('username', data.username);
            localStorage.setItem('profile_pic', data.profile_pic);
            localStorage.setItem('first_name', data.first_name);
            localStorage.setItem('last_name', data.last_name);
            localStorage.setItem('bio', data.bio);
            localStorage.setItem('course', data.course);
            localStorage.setItem('occupation', data.occupation);
            localStorage.setItem('year', data.year);
            localStorage.setItem('reg_no', data.reg_no);


        }).catch(error => {
        console.log(error)
    });
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const getData = data =>{
    return{
        type: actionTypes.AUTH_GET_DATA,
        data: data
    }
}

export const authFail = error =>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const logout = () =>{
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return{
        type: actionTypes.AUTH_LOGOUT

    }
}



export const checkAuthTimeout = expirationTime =>{
    return dispatch =>{
        setTimeout(() =>{
            dispatch(logout());
        }, expirationTime*1000);
    }
}

export const authLogin = (username, password) =>{
  return dispatch =>{
      dispatch(authStart());
      axios.post('http://127.0.0.1:8000/auth/login/', {
          username:username,
          password:password,
      }).then(
          res=>{
              const token = res.data.key;
              const expirationDate = new Date(new Date().getTime() + 36000 *1000);
              localStorage.setItem('token', token);
              localStorage.setItem('expirationDate',expirationDate);
              dispatch(authSuccess(token));
              dispatch(checkAuthTimeout(36000));
          }
      ).catch(err=>{
          dispatch(authFail(err));
      })
  }
}

export const authSignup = (username, email, password1, password2) =>{
    return dispatch =>{
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/auth/registration/', {
            username:username,
            email:email,
            password1:password1,
            password2:password2
        }).then(
            res=>{
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 36000 *1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate',expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(36000));
            }
        ).catch(err=>{
            dispatch(authFail(err));
        })
    }
}

export const authCheckState = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token');
        if(token === undefined){
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));

            if(expirationDate <= new Date()){
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}



export const getNotifications = (token) =>{

    return dispatch => {
        if (token) {
            axios.defaults.headers = {
                'Content-Type': "application/json",
                Authorization: token
            }
            axios.get('http://127.0.0.1:8000/api/')
                .then(res => {
                    const data = res.data;
                    dispatch(getData(data));
                    console.log(data);

                }).catch(error =>{
               console.log(error)
            });
        }
    }
}









