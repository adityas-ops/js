

let s = "([])"

var isValid = function(s) {
    let st = [];
    for(let i = 0; i<s.length;i++){
        if((s[i] ==='(' ) || (s[i] ==='{' ) || (s[i] ==='[' )){
            st.push(s[i])
        }else if(s[i] === ')'){
            if(st[st.length-1] !== '('){
                return false;
            }else{
                st.pop()
            }  
        }else if(s[i] === '}'){
                 if(st[st.length-1] !== '{'){
                return false;
            }else{
                st.pop()
            } 
        }else if(s[i] === ']'){
                 if(st[st.length-1] !== '['){
                return false;
            }else{
                st.pop()
            } 
        }
    }
   return  st.length === 0  ? true :false
};

console.log('isValid',isValid(s))