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
      <div className="section section-basic" id="race-data-section">
        <Container>
          <h3 className="title">마사회 경기 정보</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="category">지역</p>
            <div style={{width: '16%'}}>
                <Select options={options}/>
            </div>
            <p className="category">날짜</p>
            <DatePicker
            dateFormat="yyyy / MM / dd"
            selected={date}
            onChange={(date) => setDate(date)}
            className="text-center"
            />
            <p className="category">경주 번호</p>
            <Pagination
                    className="pagination pagination-info"
                    listClassName="pagination-info"
                >
                    <PaginationItem className={`${activeStates[0] ? "active" : ""}`} onClick={() => switchHandler(0)}>
                    <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        1
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className={`${activeStates[1] ? "active" : ""}`} onClick={() => switchHandler(1)}>
                    <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        2
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className={`${activeStates[2] ? "active" : ""}`} onClick={() => switchHandler(2)}>
                    <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        3
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className={`${activeStates[3] ? "active" : ""}`} onClick={() => switchHandler(3)}>
                    <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        4
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className={`${activeStates[4] ? "active" : ""}`} onClick={() => switchHandler(4)}>
                    <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        5
                    </PaginationLink>
                    </PaginationItem>
                </Pagination>
                <Pagination>
                    <PaginationItem>
                    <PaginationLink
                        aria-label="Previous"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    ></PaginationLink>
                    </PaginationItem>
                </Pagination>
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
