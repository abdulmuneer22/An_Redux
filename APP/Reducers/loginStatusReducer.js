
export default (state = null,action) => {
   console.log(action.payload)
   switch(action.type){
       case 'login':
       return 'logged_in'
       
       default:
       return 0
   }


   
}