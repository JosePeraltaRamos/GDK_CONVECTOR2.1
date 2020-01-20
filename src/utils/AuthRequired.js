import { isDemo , apiServicio} from '../constants/config'
import axios from 'axios'
export default (to, from, next) => {

  if (isDemo)
    next()
  if (localStorage.getItem('user') != null && localStorage.getItem('user').length > 0) {
    localStorage.removeItem('combo')
    axios.get(apiServicio["get"]+ "ListSelect/")
    .then(response=> {
       localStorage.setItem('combo',JSON.stringify(response.data));
     })
    .catch(error=>{
      localStorage.removeItem('combo')
            console.log(error);
   })
    next()
  } else {
    localStorage.removeItem('user')
    next('/user/login')
  }
}
