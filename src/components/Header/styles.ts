import styled from "styled-components";

export const Container = styled.header`

    .slide-item{
    width: 100%;
    height: 480px;
    object-fit: cover;
    }

    .titulo{
        width: 100%;
        color: white;
        position: absolute;
        top: 8rem;
        display: flex;
        justify-content: center;
    }
`;

// export const Content = styled.div`
//     max-width: 1120px;
//     margin: 0 auto;

//     padding: 2rem 1rem 12rem;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     h1{
//         color: #FFF;
//     }

//     button{
//         font-size: 1rem;
//         color: #FFF;
//         background: var(--blue-light);
//         border: 0;
//         padding: 0 2rem;
//         border-radius: 0.25rem;
//         height: 3rem;

//         transition: filter 0.2s;

//         &:hover{
//             filter: brightness(0.9);
//         }
//     }
// `