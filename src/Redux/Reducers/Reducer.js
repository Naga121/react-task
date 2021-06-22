export const PeopleReducer = (state={people:[]},action)=>{

  switch(action.type){
      case "PEOPLE_ACTION":
          return {people:action.records}
      default:
          return state;
  }
} 