import React, { useState } from "react";
import { Form, Divider, Select, Layout, Alert, DatePicker, Row, Col, Button } from 'antd';
import axios from "axios";
import catchErrors from "../utils/catchErrors";
import baseUrl from "../utils/baseUrl";
import PersonForm from '../components/Form/PersonForm'

const { Content } = Layout;
const { Option } = Select;

const GENRAL_DATA = {
    location: "",
    interest: "",
    genre: "",
    person: 2,
    date: ""
};

const formItemLayout = {
    labelCol: {
        xs: {
            span: 26,
        },
        sm: {
            span: 5,
        },
    }
};

function Infoform() {

    const [data, setData] = useState(GENRAL_DATA);
    const [error, setError] = useState("");
    const [personList, setPersonList] = useState([]);
    const [disable, setDisable] = useState(true);


   React.useEffect(() => {
        console.log(personList);

        if(personList.length === data.person){
            setDisable(false);
        }
        else{
            setDisable(true);
        }

    }, [personList])



    function getpersondata(person) {
        setPersonList([...personList, person]);
    }


    function handleDate(date, dateString) {
        setData({ ...data, date: dateString });
        // console.log("dateString   " + dateString);
        // console.log("date   " + date);
    }

    function handleSelect(value, option) {
        const key = option.key;
        let res = key.split("-");
        const id = res[0];
        setData({ ...data, [id]: value });
    }

    function handleFinish() {
        // print all the data of the form
        console.log(data)
    }

    let errrors = null;
    if (error.length > 0) {
        errrors = <Alert message={error} type="error" showIcon />
    }

    // let personForm = null;
    // personForm = personList.map((person, index) => {
    //     return <PersonForm Number={index} person={person} key={index} getData={() => getpersondata(person)} />
    // });

    let personForm = [];
    for (var i = 0; i < data.person; i++) {
        personForm.push(<PersonForm Number={i} getData={getpersondata} key={i} />)
    }

    return (
        <>
            <Layout className="infoform-layout">
                <Content className="content" >
                    <div className="site-layout-background">
                        <h1> Fill The Form </h1>
                        {errrors}
                        <Divider />
                        <Form onFinish={handleFinish} {...formItemLayout}>

                            <Row>
                                <Col span={24} >
                                    <Form.Item
                                        name="location"
                                        label="Current Location"
                                        hasFeedback
                                        rules={[{ required: true, message: 'Please select Current Location!' }]}>
                                        <Select placeholder="Please select Current Location" size="large" onChange={handleSelect} >
                                            <Option key="location-0" value="Islamabad">Islamabad</Option>
                                            <Option key="location-1" value="Lahore">Lahore</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        name="interest"
                                        label="Select Interest"
                                        hasFeedback
                                        rules={[{ required: true, message: 'Please select Interest!' }]}>
                                        <Select placeholder="Please select Interest" size="large" onChange={handleSelect} >
                                            <Option key="interest-0" value="Romantic">Romantic</Option>
                                            <Option key="interest-1" value="Historical">Historical</Option>
                                            <Option key="interest-2" value="Adventure">Adventure</Option>
                                            <Option key="interest-3" value="Cultural">Cultural</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        name="genre"
                                        label="Select Genre"
                                        hasFeedback
                                        rules={[{ required: true, message: 'Please select Genre!' }]}>
                                        <Select placeholder="Please select Genre" size="large" onChange={handleSelect} >
                                            <Option key="genre-0" value="XXXX">XXXX</Option>
                                            <Option key="genre-1" value="YYYY">YYYYY</Option>
                                        </Select>
                                    </Form.Item>

                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        name="person"
                                        label="Number of Person"
                                        hasFeedback
                                        rules={[{ required: true, message: 'Please select Number of Person!' }]}>
                                        <Select placeholder="No of Person" size="large" onChange={handleSelect}>
                                            <Option key="person-0" value="2">2</Option>
                                            <Option key="person-1" value="3">3</Option>
                                            <Option key="person-2" value="4">4</Option>
                                            <Option key="person-3" value="5">5</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        name="date"
                                        label="Select Date"
                                        hasFeedback
                                        rules={[{ required: true, message: 'Please select Date' }]}>
                                        <DatePicker name="date" onChange={handleDate} size="large" placeholder="Please select Date" className="infoform-date" />
                                    </Form.Item>

                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit" size="large" disabled={disable}>
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>

                        </Form>
                    </div>
                </Content>
            </Layout>

            {personForm}
            <Divider />
        </>
    );
}

export default Infoform;
