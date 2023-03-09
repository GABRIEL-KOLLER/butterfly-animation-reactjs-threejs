import { Environment, Float, Scroll, ScrollControls } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import { Butterfly } from './models/Butterfly';


function App() {
  return (
    <>
      <color attach="background" args={['#000008']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment preset='warehouse'/>

      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokenScale={5} height={400} />
        <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} />
        <Vignette eskil={false} offset={.1} darkness={1.5} />
      </EffectComposer>

      <ScrollControls pages={6} deeping={0.25}>

        <Scroll>
        {/*top*/}
        <Float
          speed={1}
          rotationIntensity={2}
          floatIntensity={0.2}
          floatingRange={[1,1]}
        >
        <Scroll>
          <Butterfly scale={0.05} position={[0,-2.5,0]} />
          <Butterfly scale={0.05} position={[-10,-3,-6]} />
          <Butterfly scale={0.05} position={[10,-4,-10]} />
        </Scroll>
        </Float>
        {/*top*/}


        {/*medium*/}
        <Float
          speed={1}
          rotationIntensity={2}
          floatIntensity={0.2}
          floatingRange={[1,1]}
        >
        <Scroll>
          <Butterfly scale={0.05} position={[-1,-12.5,0]} />
          <Butterfly scale={0.05} position={[12,-14,-10]} />
        </Scroll>
        </Float>
        {/*medium*/}


        {/*mediu,*/}
        <Float
          speed={1}
          rotationIntensity={2}
          floatIntensity={0.2}
          floatingRange={[1,1]}
        >
        <Scroll>
          <Butterfly scale={0.05} position={[-3,-19.5,2]} />
          <Butterfly scale={0.05} position={[8,-23,-10]} />
          <Butterfly scale={0.05} position={[4,-24,2]} />
        </Scroll>
        </Float>
        {/*medium*/}


        </Scroll>

        <Scroll html style={{width: '100%'}}>

          <Container style={{position: 'relative'}}>
            <Row className="text-center align-items-center justify-content-center" style={{position: 'absolute',
            width: '100%', height: '100vh', padding: '0px 30px 0px',}}>
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px'}}>Life can be a struggle</h1>
                </div>
              </Col>
            </Row>

            <Row className="text-center align-items-center justify-content-center" style={{position: 'absolute',
            width: '100%', height: '100vh', padding: '0px 30px 0px', top:'100vh'}}>
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px'}}>Sometimes you can feel</h1>
                </div>
              </Col>
            </Row>

            <Row className="text-center align-items-center justify-content-center" style={{position: 'absolute',
            width: '100%', height: '100vh', padding: '0px 30px 0px', top:'200vh'}}>
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px'}}>Lost</h1>
                  <h1 style={{marginBottom: '0px'}}>Overwhelmed</h1>
                  <h1 style={{marginBottom: '0px'}}>Inside</h1>
                </div>
              </Col>
            </Row>


            <Row className="text-center align-items-center justify-content-center" style={{position: 'absolute',
            width: '100%', height: '100vh', padding: '0px 30px 0px', top:'300vh'}}>
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px'}}>Drifting through life <br/> With no guidance</h1>
                </div>
              </Col>
            </Row>


            <Row className="text-center align-items-center justify-content-center" style={{position: 'absolute',
            width: '100%', height: '100vh', padding: '0px 30px 0px', top:'400vh'}}>
              <Col xs={8}>
                <div>
                  <h1 style={{marginBottom: '0px'}}>But there is hope... <br/> And people who can help </h1>
                </div>
              </Col>
            </Row>


            <Row className="text-center align-items-center justify-content-center" style={{position: 'absolute',
            width: '100%', height: '100vh', padding: '0px 30px 0px', top:'500vh'}}>
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px'}}>It's time to get <br/> the support you need</h1>
                  <h2 style={{marginBottom: '30px', marginTop: '-20px'}}>To get your life back</h2>
                  <Button variant="outline-light" size="lg">Get help now</Button>{''}
                </div>
              </Col>
            </Row>




          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
