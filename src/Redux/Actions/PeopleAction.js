
export const storePeopleApi=(title,Content)=>{
    return {
       type: "ADD_PERSON",
       data: {title:title,Content:Content}
    }
  
  } 