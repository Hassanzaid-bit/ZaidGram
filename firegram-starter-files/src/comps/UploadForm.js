import React, { useDebugValue, useState } from 'react';
import ProgressBar from './progressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        const types = ['image/png', '/image/jpeg'];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('')
        }else{
            setFile(null);
            setError("Please select an image file (png or jpeg)")
        }
    }

    return(
        <form action="">
            <input type="file" onChange= {changeHandler} />
            <div className="output">
                { error &&  <div className="error">{ error }</div> }
                { file && <div>{file.name}</div> }
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm