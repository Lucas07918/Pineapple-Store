import styled from "styled-components";

export const Container = styled.header`
    background: var(--black);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`;

export const Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;

    padding: 0rem 0rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: aliceblue;

    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 168px 1fr;
    grid-template-columns: 168px 1fr;
    gap: 0;
    -ms-flex-align: stretch;
    align-items: stretch;
    grid-template-areas:
        "logo socialMedia"
        "logo menu";

    .logo{
        grid-area: logo;
        width: 100px;
        height: auto;
        padding: 7px 0 11px 0;
        transition: all .3s ease 0s;
        overflow: hidden;
    }

    .socialMedia{
        
        ul {
            display: -ms-flexbox;
            display: flex;
            padding: 11px 0 0 0;
        }
        
        ul li{
            margin-left: 24px;
        }
        
        ul li:first-child{
            margin-left: 50px;
        }
    }
    .menu{
        grid-area: menu;
        ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: #FFF;
        }
    }

`

export const UpBox = styled.div`
    grid-area: socialMedia;
    height: 50px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,.1);
    align-items: center;

    input{
        transition: all .3s ease 0s;
        -webkit-transition: all .3s ease 0s;
        -moz-transition: all .3s ease 0s;
        /* width: 0; */
        background: 0 0!important;
        border: none;
        outline: 0;
        font-family: Lato,sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 140%;
        color: #fff;
        background-clip: content-box;
    }

    .info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 10%;
    }
`