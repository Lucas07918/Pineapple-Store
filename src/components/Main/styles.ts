import styled from "styled-components";

export const Container = styled.main`
    /* background-color: red; */
`

export const Content = styled.section`
    background-color: var(--black);
    padding-top: 4rem;

    .image{
        width: 100%;
        height: 480px;
        object-fit: cover;
    }

    .propagands{
        background-color: red;
        width: 80%;
        height: 280px;
        overflow: hidden;
        display: flex;
        align-items: end;
        border-radius: 18px;
        margin: auto;
    }
`

export const Cards = styled.section`

    #container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 25px 0;
    }
    
    .content{
        width: 20%;
        height: 24rem;
        margin: 15px;
        box-sizing: border-box;
        float: left;
        border-radius: 20px;
        cursor: pointer;
        padding-top: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0,0,0,0.22);
        transition: .4s;
        background: #f2f2f2;
        overflow: hidden;

        img{
            object-fit: cover;
            width: 500px;
            height: auto;
        }

        .img{
            height: 100%;
            width: 100%;
            overflow: hidden;
            display: flex;
            align-items: end;
        }
    }
    
    .content:hover{
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transform: translate(0px, -8px);
    }
    
    #refeicao{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    
    .button-gerar{
        text-align: center;
        font-size: 24px;
        color: #fff;
        width: 100%;
        padding: 15px;
        border: 0;
        border-radius: 0;
        outline: none;
        cursor: pointer;
        margin-top: 5px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: #14C38E;
    }
    
    .button-gerar:hover{
        background-color: #00DFAB;
        transition: 0.2s;
    }
`