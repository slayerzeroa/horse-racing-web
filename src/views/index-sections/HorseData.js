import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// reactstrap components
import {
  Badge,
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

// options for select
const options = [
    { value: 'seoul', label: '서울' },
    { value: 'busan', label: '부산' },
    { value: 'jeju', label: '제주' }
  ]

const horseoptions = [
    { value: '1', label: '글로벌럭키' },
    { value: '2', label: '봄날의기억' },
    { value: '3', label: '호크프린스' }
  ]

// core components

function RaceData() {
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [activeStates, setActiveStates] = React.useState(Array(10).fill(false));

  const switchHandler = (index) => {
    const newActiveStates = Array(10).fill(false);
    newActiveStates[index] = true;
    setActiveStates(newActiveStates);
  };

  return (
    <>
      <div className="section section-basic" id="horse-data-section">
        <Container>
          <h3 className="title">마필 정보</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="category">마명</p>
            <div style={{width: '85%'}}>
                <Select options={horseoptions}/>
            </div>
            <Button color="info" type="button">
                검색
            </Button>
          </div>
            <Card>
                <CardBody>
                    <CardText className="cardtext">
                        <br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/>
                        <br/><br/>
                    </CardText>
                </CardBody>
            </Card>

        </Container>
      </div>
    </>
  );
}

export default RaceData;
