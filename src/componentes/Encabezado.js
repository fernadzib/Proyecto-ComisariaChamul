import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Ventana from "./Ventana";
import { Component, useState } from 'react';

const Encabezado = (props) => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
    return (
        <Container>
            <Content>
                 <Logo>
                    <a href="/inicio"  >
                        <img src="/imagen/logo-comisaria.ico" alt=""/>

                    </a>
                </Logo>
                <Search>
                <div>
                     <h2>Comisaria de Chamul</h2>
                </div>
                </Search>
                <Nav>
                    <ListNavGeneral>
                        <ListNav >
                        <a>
                              <NavLink to='/inicio'> <img src="/imagen/inicio.png"  alt="" />
                                 <span>Inicio</span>
                              </NavLink>
                            </a>
                        </ListNav>

                        <ListNav>
                             <a> <button onClick={() => cambiarEstadoModal(!estadoModal)}> 
        
                                  <img src="/imagen/publicar.ico"  alt="" />
                                    <span>Publicar</span>
                                  </button>
                                
                            </a>
                        </ListNav>

                        <ListNav>
                            <a>
                                 <img src="/imagen/notificacion.svg"  alt="" />
                                 <span>Notificacion</span>
                            </a>
                        </ListNav>

                        <ListNav>
                            <a>
                            <NavLink to='/consultar'>  
                                 <img src="/imagen/consulta.png"  alt="" />
                                 <span>Consultar</span>
                            </NavLink>
                            </a>
                        </ListNav>

                        <ListNav>
                            <a>
                            <NavLink to='/acercade'>  
                                 <img src="/imagen/acercade.svg"  alt="" />
                                 <span>Acerca de</span>
                            </NavLink>
                            </a>
                        </ListNav>

                        <User>
                           <a>
                             <img src="/imagen/salir.png" alt="" />
                                <span>Salir</span>
                          
                             </a>

                             
                          </User>

                          <Work>
                              <a>
                           <img src="/imagen/nav-work.svg" alt="" />
                         <span>
                                   Ajustes
                            <img src="/imagen/down-icon.svg" alt="" />
                         </span>
                          </a>
                        </Work>

                    </ListNavGeneral>
                </Nav>
            </Content>
            <Ventana
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
        />
        </Container>

    );
};

const Container = styled.div`
  background-color: white; 
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;

`;

const Content = styled.div`
display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  padding: 2px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const ListNavGeneral = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none; 
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const ListNav = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 40px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 90px;
    }
    button{
      border: none;
      background: none;
      cursor: pointer;
     
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(ListNav)`
cursor: pointer;
  /*a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }*/
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Encabezado;