import React, { useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Form, Button, Row, Col, Space } from 'antd';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMount } from 'ahooks'
import { toast } from 'react-toastify';
import '../../App.css'
import Inputs from '../../components/Input';

const SubmitForm = () => {
    const [data, setData] = useState(false)
    const [reset,setReset] = useState(false)
    const [mount, Mount] = useState(false)
    // Yup schema for form validation
    const schema = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        phoneNumber: yup.string().required('Phone Number is required').matches(/^\d+$/, 'Invalid Phone Number'),
    });
    useMount(() => {
        methods.clearErrors()
    });
    // react-hook-form setup
    const methods = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
    });

    // Form submission handler
    const onSubmit = (data) => {
        setData(true)
        toast.success('Contact is created!', {
            position: toast.POSITION.TOP_RIGHT
        });
        setReset(false)
        // Mount(true)

    };
    const handleReset=()=>{
        methods.reset()
        methods.control._resetDefaultValues()
        setData(false)
        // Mount(false)
        setData(false)
        setReset(true)
        window.location.reload();
    }
    return (
        <FormProvider  {...methods}>
            {!reset&&mount&&!data?<span className='errorMessage'><p>One of the fields is incorrect or invalid.Please follow the example in order to continue</p></span>:''
}
            <form onSubmit={methods.handleSubmit(onSubmit)} style={{ width: '600px', margin: 'auto', padding: '10px 30px 10px 50px' }} className='formContainer'>
                <Row gutter={16}>
                    <Col span={24}>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <h1>Form</h1>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="First Name"
                            >
                                <Controller control={methods.control} name='firstName' render={({ field: { onChange, value }, fieldState: { error } }) => (<Inputs onChange={onChange} error={error} mount={mount} Mount={Mount} data={data} value={value} reset={reset} Reset={setReset} />)} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Last Name"
                            >
                                <Controller control={methods.control} name='lastName' render={({ field: { onChange, value }, fieldState: { error } }) => (<Inputs onChange={onChange} error={error} mount={mount} Mount={Mount} data={data} value={value} reset={reset} Reset={setReset} />)} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Email"
                            >
                                <Controller control={methods.control} name='email' render={({ field: { onChange, value }, fieldState: { error } }) => (<Inputs onChange={onChange} error={error} mount={mount} Mount={Mount} data={data} value={value} reset={reset} Reset={setReset} />)} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Phone Number"
                            >
                                <Controller control={methods.control} name='phoneNumber' render={({ field: { onChange, value }, fieldState: { error } }) => (<Inputs onChange={onChange} error={error} mount={mount} Mount={Mount} data={data} value={value} reset={reset} Reset={setReset} />)} />
                            </Form.Item>
                        </Col>

                        <Col span={24} style={{ textAlign: 'right' ,marginRight:'30px'}}>
                            {!data ?
                                <Form.Item>
                                    <Button type="primary" size="large" htmlType="submit" loading={methods.loading}>
                                        Submit
                                    </Button>
                                </Form.Item>
                                :
                                <Form.Item>
                                    <Button type="primary" size="large" onClick={handleReset} loading={methods.loading}>
                                        Reset
                                    </Button>
                                </Form.Item>
                            }
                        </Col>
                    </Col>
                </Row>
            </form>
        </FormProvider>
    );
};

export default SubmitForm;