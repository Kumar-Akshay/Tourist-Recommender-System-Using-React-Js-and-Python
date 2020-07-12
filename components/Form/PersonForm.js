import React, { useState } from "react";
import { Form, Input, Divider, Layout, Alert, Row, Col, Button } from 'antd';
const { Content } = Layout;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 23,
        },
        sm: {
            span: 4,
        },
    }
};

const INITIAL_PERSON = {
    key: "",
    name: "",
    phone: "",
    address: "",
    cnic: ""
};

function PersonForm(props) {

    const [error, setError] = useState("");
    const [person, setPerson] = useState(INITIAL_PERSON);
    const [success, setSuccess] = useState(false);
    const [disable, setDisable] = useState(false);

    // React.useEffect(() => {
    //     console.log(person);
    // }, [person])


    function handleChange(event) {
        const { name, value } = event.target;
        setPerson({ ...person, [name]: value });
    }


    function handleFinish(id) {
        setSuccess(true);
        setDisable(true);
        person.key = id;
        props.getData(person);
    }


    let message = null;
    if (error.length > 0) {
        message = <Alert message={error} type="error" showIcon />
    }
    else if (success){
        message = <Alert message="Person Data Saved" type="success" showIcon />
    }


    

    return <>
        <Layout className="infoform-layout">
            <Content className="content" >
                <div className="site-layout-background">
                    <h1> For Person {props.Number + 1} </h1>
                    {message}
                    <Divider />
                    <Form onFinish={() => handleFinish(props.Number)} {...formItemLayout}>
                        <Row>
                            <Col span={12}>
                                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please Enter Your Name!' }]} className="infoform-input">
                                    <Input
                                        name="name"
                                        size="large"
                                        placeholder="Name"
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Please Enter Your Phone!' }]} className="infoform-input">
                                    <Input
                                        name="phone"
                                        size="large"
                                        placeholder="Phone"
                                        onChange={handleChange}
                                        type="number"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>


                        <Row>
                            <Col span={12}>
                                <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please Enter Your Address!' }]} className="infoform-input">
                                    <Input
                                        name="address"
                                        size="large"
                                        placeholder="Address"
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="cnic" label="CNIC" rules={[{ required: true, message: 'Please Enter Your CNIC!' }]} className="infoform-input">
                                    <Input
                                        name="cnic"
                                        size="large"
                                        placeholder="CNIC"
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col span={16}></Col>
                            <Col span={8}>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit" size="large" disabled={disable}>
                                        Save
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Content>
        </Layout>
    </>

}

export default PersonForm;
