import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from "styled-components"
import Header from "../UI/Header"

const StyledSubscribeForm = styled.div`
  width: 100%;
  box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.31);
  padding: 30px;
  margin: 30px auto;

  background-color: ${(props) => props.theme.accentColor2};
  border-radius: 10px;
  & > div {
    display: flex;
    width: 100%;
    /* flex-direction: column; */
    flex-flow: row wrap;
    & > * {
      flex: 1 100%;
    }

    & > div {
      color: ${(props) => props.theme.mainColor} !important;
      margin-bottom: 20px;
      a {
        color: ${(props) => props.theme.lightColor};
      }
    }
  }

  h1 {
    color: ${(props) => props.theme.mainColor} !important;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme.lightColor};
    text-align: left;
  }

  input {
    padding: 10px 20px;
    border-radius: 25px;
    border: none;
    margin-bottom: 20px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    background-color: ${(props) => props.theme.mainColor};
    padding: 10px;
    border-radius: 25px;
    max-width: 200px;
    margin: auto;
    box-shadow: 0 0 0 0 black;
    transition: 300ms;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.31);
      transform: scale(1.03);
    }

    &:focus {
      outline: none;
    }
  }
`

const SubscribeForm = () => {
  const url =
    "https://tech.us4.list-manage.com/subscribe/post?u=19f3716c8cf547aef98cc35f6&amp;id=931a3f897e"
  return (
    <StyledSubscribeForm className="SubscribeForm">
      <Header>Suscríbete</Header>
      <p>
        Si quieres mantenerte al dia con las ultimas novedades del blog,
        participar en concursos y tener acceso a contenido exclusivo, no olvides
        suscribirte.
      </p>
      <MailchimpSubscribe url={url} />
    </StyledSubscribeForm>
  )
}

export default SubscribeForm
