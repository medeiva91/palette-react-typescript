import React, { useState } from 'react';
import { useDropzone } from "react-dropzone"
import axios from 'axios';
import InputTextForm from './InputTextForm';

import './Form.scss';
import fileIcon from '../../assets/img/file_icon.png';

export const Form: React.FC = () => {

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [patronymic, setPatronymic] = useState<string>('');
    const [imgPreview, setImgPreview] = useState<any>(fileIcon);
    const [imgFile, setImgFile] = useState<any>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const [response, setResponse] = useState<string>('');


    const uploadImg = (file:File) => {
        setImgFile(file);
        setImgPreview(URL.createObjectURL(file))
    }
    
    const { getRootProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            uploadImg(acceptedFiles[0]);
        },
    })
      
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    }

    const handleChangeSurname= (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSurname(e.target.value);

    }

    const handleChangePatronymic = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPatronymic(e.target.value);
    }

    const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if (e.target.files && e.target.files.length > 0) {
            uploadImg(e.target.files[0]);
        }
    }

    const cleanForm = () => {
        setName('');
        setSurname('');
        setPatronymic('');
        setImgPreview(fileIcon);
        setImgFile(null);
        setIsError(false);    
    };

    function addToFormData(){
        const formData = new FormData();
        formData.append("action", 'send_data');
        formData.append("id", "1");
        formData.append("image",  imgFile);
        [name, surname, patronymic].forEach((item) => {
            formData.append("contact" , item);
        });
        return formData;
    }

    function postData() {
        setResponse('');
        if (!imgFile) {
            setIsError(true);
            return;
        }
        const formData = addToFormData()
        axios('https://test-job.pixli.app/send.php', {
            method: 'POST',
            data: formData,
        })
        .then(({ data }) => {
            setResponse(JSON.stringify(data));
        })
        .catch((e) => {
            console.log("Ошибка при отправке данных", e)
        })
        .finally(() => {
            cleanForm();
        });
    } 

    return(
        <div className="form">

            <div className="form__block">
                < InputTextForm label={"Имя"} handleChange={handleChangeName} value={ name } />
                < InputTextForm label={"Фамилия"} handleChange={handleChangeSurname} value={ surname }/>
                < InputTextForm label={"Отчество"} handleChange={handleChangePatronymic} value={ patronymic } />
                
                <div  className="form__input" {...getRootProps()}>
                    <label>
                        Фото {isError ?  <span className="error"> : добавьте изображение</span> : ''}
                    </label>

                    <label className={`load-file ${isError ? 'error': ''}` } htmlFor="load-file">
                        <img src={ imgPreview } alt="Иконка загрузки изображения"/>
                    </label>

                    <input
                        className="input__load-file"
                        type="file"
                        placeholder = "" 
                        id="load-file" 
                        onChange={handleChangeImg}
                        accept="image/*"
                    />

                </div>

                <button onClick={ postData }>
                    Сохранить
                </button>

            </div>

            <div className="form__response">
                    <label>
                        Response
                    </label>
                    <textarea readOnly  value={response}
                    />
            </div>
        </div>
    );
}