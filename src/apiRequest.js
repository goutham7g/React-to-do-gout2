const apiRequest = async (url ='', optionsObj = null,errMeg =null) =>{
            try{
                const response = await fetch(url, optionsObj)
                if (!response.ok) throw Error("Plese reload the app ")
            }
            catch(err){
                errMeg = err.Message;
            }
            finally{
                return errMeg
            }
    }
export default apiRequest                                                                                                     