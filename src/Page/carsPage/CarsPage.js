import { useState, useEffect } from "react";
import {Button, Typography, Row, Col, Card, Breadcrumb, Layout, Menu} from 'antd';
import Cars from './index';
import ListCars from '../../components/ListCars';
import Footer from './Footer';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const id = getRandomInt(1, 100);

function CarsPage() {

  const [items, setItem] = useState(null);
  const [save, setSave] = useState(null);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`)
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((err) => console.error(err));
  }, []);

  const colMax = 4;
  let count = 1;

  let gridDisplay = [];
  let gridRow = [];
  items?.map((item) => {
    if (count % colMax === 0) {
      gridDisplay.push(gridRow);
      gridRow = [];
    }
    else {
      gridRow.push(item);
    }
    count++;
  });

  const reset = () => {
    setItem(save);
  }

  const yangAvailable = ()=>{
    setSave(items);
    const available = items?.filter((item)=>item.available === true);
    setItem(available);
    console.log(save)
  }

  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  // console.log(gridDisplay);
  return (
    <div className="CarsPage">
      <Cars></Cars>
      <ListCars></ListCars>
      <Footer></Footer>
      {/* <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
      <Button type="primary" href='/landing'>Landing Page</Button>
      <Title>items</Title>
      <Button type="primary" onClick={reset}>Reset</Button>
      <Button onClick={yangAvailable}>Yang available</Button>
      <div>

          { items? gridDisplay.map((rowItem) => (
            <Row gutter={[16, 16]}>
              {rowItem.map((item) => (
                <Col span={8} key={item.id}>
                  <Card title={item.manufacture}>
                  <p>{item.model}</p>
                  <p>{item.year}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          )) : <p>Loading...</p> }
        
      </div> */}
    </div>
  );
}

export default CarsPage;
