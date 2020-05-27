import axios from 'axios'
import {GET_ERRORS, GET_WALLETS} from './types'

export const createWallet = (newWallet,history)=> async dispatch=>{
    await axios.post('http://localhost:8888/wallet', newWallet)
      .then((res) => {
          history.push('/dashboard')
      })
      .catch((err) => {
        dispatch({type:GET_ERRORS,payload:err.response.data})
      });
}

export const getWallets = ()=> async dispatch=>{
    await axios.get('http://localhost:8888/wallet')
      .then((res) => {
          dispatch({type:GET_WALLETS.payload:res.data})
      })
      
}