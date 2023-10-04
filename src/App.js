import logo from './logo.svg';
import './App.css';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
import Logo from './logo.png'
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    document.title = 'Segalla Workout';
  }, []);

  return (
    <>
    <Container>
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
      <Row style={{display: 'flex', justifyContent: 'center'}}>
        <Image src={Logo}  className='logo' />
      </Row>
      <Row className='backBicepes'>
        <h1>Back & Biceps</h1>
        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Barbell curls 3x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/EZ-Barbell-Curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" >
            <Accordion.Header>Barbell Rows 3x12</Accordion.Header>
            <Accordion.Body>
              <Image src="https://anabolicaliens.com/cdn/shop/articles/5eecfe5a263e085d31855d1f_barbell-row-exercise-anabolic-aliens_400x.png?v=1644920854" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Dumbbell hammer Curls 3x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Seated Dumbbell Flys 3x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/12/seated-bent-over-lateral-raise-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Lat cable pull-downs 4x20</Accordion.Header>
            <Accordion.Body>
              <Image src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Seated Alternated Dumbbell Curls 4x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://cdn-0.weighttraining.guide/wp-content/uploads/2021/09/Seated-Alternating-dumbbell-Curl.png?ezimgfmt=ng%3Awebp%2Fngcb4" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Machine Preacher Curls 4x20</Accordion.Header>
            <Accordion.Body>
              <Image src="https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Preacher-Curl.gif" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Cable Rows 4x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Seated-cable-row-new-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Cable Curl (with Rope) 4x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://fitnessprogramer.com/wp-content/uploads/2021/06/rope-bicep-curls.gif" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Lat cable pushdowns (with Rope) 4x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://gymvisual.com/img/p/5/9/1/7/5917.gif" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>

      <Row>
        <h1>Chest & Triceps</h1>
        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Dumbbell chest press 4x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Bench-Press-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" >
            <Accordion.Header>Over Head single Dumbbell press 4x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/seated-dumbbell-overhead-triceps-extension-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Dumbbell flys 4x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/dumbbell-fly-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" >
            <Accordion.Header>Dumbbell Kickbacks 4x15</Accordion.Header>
            <Accordion.Body>
              <Image src="https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Kickback-resized.png" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Rope press downs 4x20</Accordion.Header>
            <Accordion.Body>
              <Image src="https://fitnessvolt.com/wp-content/uploads/2019/04/triceps-rope-push-down-750x474.jpg" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" >
            <Accordion.Header>Single arm Cable Chest Press 4x12</Accordion.Header>
            <Accordion.Body>
              <Image src="https://fitnessprogramer.com/wp-content/uploads/2021/12/One-Arm-Cable-Chest-Press.gif" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Machine Chest Press 4x20</Accordion.Header>
            <Accordion.Body>
              <Image src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Press-Machine.gif" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" >
            <Accordion.Header>Machine Tricep Extensions 4x20</Accordion.Header>
            <Accordion.Body>
              <Image src="https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Tricep-Extension.gif" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className='accordionWorkout'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Push ups 3x Failure</Accordion.Header>
            <Accordion.Body>
              <Image src="https://www.inspireusafoundation.org/wp-content/uploads/2022/11/push-up.gif" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" >
            <Accordion.Header>Bench dips 3x Failure</Accordion.Header>
            <Accordion.Body>
              <Image src="https://fitnessprogramer.com/wp-content/uploads/2021/04/Triceps-Dips-on-Floor.gif" className="imageWorkout"/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
    </>
  );
}

export default App;
