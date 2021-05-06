import React from 'react';


function canceltoken() {
    let cancelToken;

    const onType = () => {
        const search = e.target.value;
        if(typeof cancelTooken != typeof undefined){
            cancelToken.cancel("cancelling he prev request")
        }
        cancelToken = axios.cancelToken.source()
        const result = axios.get(
            `url${search}`,
             {cancelToken: cancelToken.token} 
            );

    }
    return (
        <div>
            
        </div>
    )
}

export default canceltoken

