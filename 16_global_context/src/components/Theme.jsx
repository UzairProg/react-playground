import React from 'react'

function Theme(props) {

    let {theme, setTheme} = props;

    function changeTheme(){
        if(theme == "light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
    
    

  return (
    <div>
      <button
      onClick={changeTheme}
      >
        Change theme
      </button>
    </div>
  )
}

export default Theme
