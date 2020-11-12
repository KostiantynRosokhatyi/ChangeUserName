import React from 'react'

function Bucket(props) {
    const {onClick} = props;
    return (
        <svg version="1.1" id="Layer_1" className="nameDelete__icon"
             xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"
             enableBackground="new 0 0 512 512"
             style={{fill: 'rgb(248, 96, 96)', width: "24px", height: "25.500px"}}
             onClick={onClick}
        >

            <path d="M390.1,162.5l-19.3,319H140.3l-19.3-319l-30.4,1.8L110,484.6c0,15.1,13,27.4,29,27.4h233.1c16,0,29-12.3,29-26.5
                                    l19.5-321.2L390.1,162.5z"/>
            <path d="M414.1,75.7h-97.4V35.6C316.7,16,299.5,0,278.4,0h-45.7c-21.1,0-38.3,16-38.3,35.6v40.1H97v30.5h317.2V75.7H414.1z
                                     M224.8,35.6c0-2.4,3.4-5.1,7.8-5.1h45.7c4.5,0,7.8,2.7,7.8,5.1v40.1h-61.4L224.8,35.6L224.8,35.6z"/>
            <rect x="196.4" y="165.6" width="30.5" height="249.6"/>
            <rect x="284.2" y="165.6" width="30.5" height="249.6"/>
        </svg>
    )
}

export default Bucket