import React, { useEffect } from 'react';
import { Input } from 'antd';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'; 
import '../../App.css'

const Inputs = ({error,onChange,value,mount,Mount,data,reset=false}) => {
    useEffect(()=>{
        if(error){
            Mount(true)}
    },[error,reset])
  return (
    <div className={`Input ${(mount||data )&&(!error? 'inputCorrect' :'inputError')}`}>
        <Input onChange={onChange} value={value}  className='custom-input-class' />
        {(mount||data)&&(!error?<CheckCircleFilled className='correct'/>: <CloseCircleFilled className='error'/>)}
        {error?<span className='erorrText'>{error.message}</span>:''}
    </div>
  );
};

export default Inputs;