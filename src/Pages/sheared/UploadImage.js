import React from 'react';

const UploadImage = () => {

    const handleFileUpload =(event)=>{
        event.preventDefault();
        const image = event.target.userPhoto.files[0];
        console.log(image)
        
        const fromData = new FormData();
        fromData.append('image',image);
        
        fetch('https://api.imgbb.com/1/upload?expiration=600&key=845e5be1d5f228d868554f534bfa6afd',{
            method:'POST',
            body:fromData
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleFileUpload}>
                <input type={'file'} name='userPhoto' ></input>
                <input type={'submit'} className='btn btn-sm'></input>
            </form>
        </div>
    );
};

export default UploadImage;