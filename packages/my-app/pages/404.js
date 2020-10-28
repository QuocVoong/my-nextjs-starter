import styled from 'styled-components';
import Plane from 'assets/plane.png';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(0deg, #fff, #03a9f4);
  
  .sky {
    position: relative;
    widows: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .sky h2 {
    font-size: 16em;
    color: #fff;
    text-shadow: 15px 15px 0 rgba(0, 0, 0, 0.1);
  }
  
  .sky h2 span {
    display: inline-block;
    animation: animate 2s ease-in-out infinite;
  }
  
  .sky h2 span:nth-child(even) {
    animation-delay: -1s;
  }
  
  @keyframes animate {
    0%,100% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(50px);
    }
  }
  
  .field {
    padding: 100px;
    height: 40vh;
    background: #6e2308;
    box-shadow: inset 0 20px 10px #51680c;
    text-align: center;
  }
  
  .field h2 {
    color: #fff;
    font-size: 2em;
    margin-bottom: 20px;
    font-family: fantasy;
  }
  
  .field a {
    background: #fff;
    color: #000;
    width: 160px; 
    height: 50px;
    line-height: 50px;
    border-radius: 50px;
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
  }
  
  .plane {
    position: absolute;
    bottom: 100px;
    left: 100px;
    max-width: 300px;
    transform: scale(0.9) rotateY(180deg);
  }
  
  .grass {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    background: url('/static/grass.png');
    background-position: bottom;
    animation: animateGrass 0.25s linear infinite;
  }
  
  @keyframes animateGrass {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -94px 0;
    }
  }
`

export default function Page404() {
  return <>
    <PageContainer>
      <div className='sky'>
        <h2><span>4</span><span>0</span><span>4</span></h2>
        <div className='grass'></div>
        <img src={Plane} className="plane" />
      </div>
      <div className="field">
        <h2>Opps...looks like you got lost.</h2>
        <a href="/">Go Home</a>
      </div>
    </PageContainer>
  </>
}